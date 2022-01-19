from os import stat
from time import sleep
import concurrent.futures
import grpc
import stats_service_pb2
import stats_service_pb2_grpc
import requests
from faker import Faker
from random import randint, choice, uniform


url="http://167.172.53.243"
fake=Faker()

try:
    players = requests.get(f"{url}/api/player/all")
    countries=requests.get(f"{url}/api/country")
    countries.raise_for_status()
    players.raise_for_status()
except requests.HTTPError as err:
    raise SystemExit(err)


country_arr=countries.json().get("payload", {})
player_arr=players.json().get("payload", {})

def user_name_generator(count:int):
    usernames = []
    index = count
    while index != 0:
        data = fake.user_name()
        if data not in usernames:
            usernames.append(data)
            index = index - 1
    
    return usernames

def create_user(count:int):
    user_names = user_name_generator(count)
    for val in range(0, count):
        rand_num = randint(0, len(country_arr)-1)
        print(choice(country_arr))
        try:
            r = requests.post(f"{url}/api/player",json={
                "username": user_names[val],
                "country": choice(country_arr)["_id"]
            })
            r.raise_for_status()
            print(r.json())
        except requests.HTTPError as err:
            print("Server send exceptions")
            raise SystemExit(err)
        #sleep(0.1)

def add_stats():
    pass


def generate_stat():
    """
        string playerId = 1;
        string periodId = 2;    
        float totalMoney = 3;
    """
    count = 0;
    period_id = "61e5a122c904a88dd714a7d6"

    while 1:
        
        random_player = choice(player_arr)
        stats = stats_service_pb2.Stat(
            playerId=random_player["_id"], 
            periodId=period_id,
            totalMoney=round(uniform(0, 100), 2)
        )
        count = count + 1
        if count == 1000:
            break
        sleep(0.2)
        yield stats

def run():
    channel = grpc.insecure_channel(f"167.172.53.243:51000")
    stub = stats_service_pb2_grpc.StatsStub(channel=channel)
    stub.AddStat(generate_stat())




def main():
    import argparse
    parser = argparse.ArgumentParser(prog="PROG",
                                     description="Leaderboard realtime application simulation script")
    
    parser.add_argument("--create-users",
                        action="store",
                        type=int,
                        nargs=1,
                        dest="user_count",
                        help="Create random users as many as the giving argument")
    
    parser.add_argument("--generate-stats",
                        action="store_true",
                        dest="generate_stat",
                        help="Generates random as if user statistics are coming from the game")
    
    parsed_args = parser.parse_args()
    
    if parsed_args.user_count:
        with concurrent.futures.ThreadPoolExecutor(max_workers=10) as executer:
            future_to_url = {executer.submit(create_user, parsed_args.user_count[0])}
            for future in concurrent.futures.as_completed(future_to_url):
                try:
                    data = future.result()
                    print(data)
                except Exception as ex:
                    print(ex)
    elif parsed_args.generate_stat:
        run()
    else:
        print("Unknown argument error")
    
    
    
if __name__ == "__main__":
    main()

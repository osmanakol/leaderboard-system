FROM redis
COPY docker/redis-cluster/cluster3/slave/redis.conf /etc/redis/redis.conf
RUN redis-server /etc/redis/redis.conf
COPY docker/init-scripts/redis-replica.sh /home/
CMD [ "bash", "-x", "redis-replica.sh" ]

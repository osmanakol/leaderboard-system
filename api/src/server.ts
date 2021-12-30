import api from "./app";
import { HOST, PORT } from "./config";

api.set("port", PORT)
api.set("host", HOST)



api.listen(api.get("port"), api.get("host"), () => {
    console.info(`API is running, http://${HOST}:${PORT}`)
})
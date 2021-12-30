import api from "./app";
import { HOST, PORT } from "./config";
import { loggerUtil } from "./utils/index";

api.set("port", PORT)
api.set("host", HOST)



api.listen(api.get("port"), api.get("host"), () => {
    loggerUtil.info(`API is running, http://${HOST}:${PORT}`)
    //console.info(`API is running, http://${HOST}:${PORT}`)
})
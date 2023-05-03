import log from "loglevel";

import config from "../config.js";
import { server } from "./http/server.js";

server.listen(config.SERVER_PORT, () => {
  log.info(`server running on http://localhost:${config.SERVER_PORT}`);
});

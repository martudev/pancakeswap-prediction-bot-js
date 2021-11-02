

import { Config } from "./config.js";

new Config({
    env: 'production'
})

console.log(process.env.BSC_RPC_URL_LIST)
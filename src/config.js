
import config from '../config.json'


class Config {

    constructor({ env }) {
        process.env.ENVIROMENT = env
        process.env['BSC_RPC_URL_LIST'] = config.BSC_RPC_URL_LIST
    }
}

export { Config }
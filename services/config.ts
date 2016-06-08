import {ISqsStrategyConfig, ISchedulerConfig} from "fp-queue-handler";
import {Config} from "fp-common"
import {ClientOpts} from "redis";
import * as path from "path";

interface IConfig {
    region: string
    environment: string
    sqs: ISqsStrategyConfig
    scheduler: ISchedulerConfig
    redis: {
        port: number
        host: string
        options?: ClientOpts
    },
    distributedLock: {
        prefix: string
    }
}

let loader = new Config<IConfig>(
    path.join(__dirname + '/../config'),
    'config.yml'
);

let config = loader.config;

export default config;

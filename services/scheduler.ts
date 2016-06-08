import logger from "./logger";
import config from "./config";
import queueClient from "./queue-client";
import {Scheduler, IRedisClientPromisified} from "fp-queue-handler";
import * as redis from "redis";
import * as Promise from "bluebird";
import {DistributedRedisLock} from "fp-common/lib/common";

let redisClient = <IRedisClientPromisified>Promise.promisifyAll(
    redis.createClient(
        config.redis.port,
        config.redis.host,
        config.redis.options
    )
);

let distributedLock = new DistributedRedisLock(
    config.distributedLock.prefix,
    logger,
    redisClient
);

let scheduler = new Scheduler(logger, redisClient, distributedLock, config.scheduler, queueClient);

export default scheduler;

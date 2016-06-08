"use strict";
const logger_1 = require("./logger");
const config_1 = require("./config");
const queue_client_1 = require("./queue-client");
const fp_queue_handler_1 = require("fp-queue-handler");
const redis = require("redis");
const Promise = require("bluebird");
const common_1 = require("fp-common/lib/common");
let redisClient = Promise.promisifyAll(redis.createClient(config_1.default.redis.port, config_1.default.redis.host, config_1.default.redis.options));
let distributedLock = new common_1.DistributedRedisLock(config_1.default.distributedLock.prefix, logger_1.default, redisClient);
let scheduler = new fp_queue_handler_1.Scheduler(logger_1.default, redisClient, distributedLock, config_1.default.scheduler, queue_client_1.default);
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = scheduler;
//# sourceMappingURL=scheduler.js.map
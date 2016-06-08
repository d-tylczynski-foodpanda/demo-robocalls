"use strict";
const logger_1 = require("./logger");
const config_1 = require("./config");
const message_parser_1 = require("./message-parser");
const fp_queue_handler_1 = require("fp-queue-handler");
const aws_sdk_1 = require("aws-sdk");
let sqsClient = new aws_sdk_1.SQS(config_1.default.sqs);
let queueStrategy = new fp_queue_handler_1.SqsStrategy(sqsClient, config_1.default.sqs, logger_1.default);
let queueClient = new fp_queue_handler_1.QueueClient(queueStrategy, message_parser_1.default, logger_1.default);
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = queueClient;
//# sourceMappingURL=queue-client.js.map
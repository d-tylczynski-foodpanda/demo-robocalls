import logger from "./logger";
import config from "./config";
import messageParser from "./message-parser";
import {QueueClient, SqsStrategy} from "fp-queue-handler";
import {SQS} from "aws-sdk";

let sqsClient = new SQS(config.sqs);
let queueStrategy = new SqsStrategy(sqsClient, config.sqs, logger);
let queueClient = new QueueClient(queueStrategy, messageParser, logger);

export default queueClient;

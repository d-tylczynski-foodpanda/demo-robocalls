import config from "./config";
import logger from "./logger";
import {MessageBusFactory, MessageBusDefaults} from "fp-message-sdk";

let defaultConfig = MessageBusDefaults.getConfig();
let messageBus = MessageBusFactory.create(logger, defaultConfig, config.region, config.environment);

export default messageBus;

"use strict";
const config_1 = require("./config");
const logger_1 = require("./logger");
const fp_message_sdk_1 = require("fp-message-sdk");
let defaultConfig = fp_message_sdk_1.MessageBusDefaults.getConfig();
let messageBus = fp_message_sdk_1.MessageBusFactory.create(logger_1.default, defaultConfig, config_1.default.region, config_1.default.environment);
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = messageBus;
//# sourceMappingURL=message-bus.js.map
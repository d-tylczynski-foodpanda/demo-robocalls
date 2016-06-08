"use strict";
const message_sdk_1 = require("fp-message-sdk/lib/message-sdk");
let defaultPlatform = 'foodpanda';
let messageParser = new message_sdk_1.MessageParser(defaultPlatform);
messageParser.registerMessageProcessor(message_sdk_1.VendorOfflineOpenMessage.MESSAGE_TYPE, new message_sdk_1.VendorOfflineOpenMessageProcessor());
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = messageParser;
//# sourceMappingURL=message-parser.js.map
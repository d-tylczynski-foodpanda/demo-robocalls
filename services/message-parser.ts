import {
    MessageParser,
    VendorOfflineOpenMessage,
    VendorOfflineOpenMessageProcessor
} from "fp-message-sdk/lib/message-sdk";

let defaultPlatform = 'foodpanda';
let messageParser = new MessageParser(defaultPlatform);

messageParser.registerMessageProcessor(
    VendorOfflineOpenMessage.MESSAGE_TYPE,
    new VendorOfflineOpenMessageProcessor()
);

export default messageParser;

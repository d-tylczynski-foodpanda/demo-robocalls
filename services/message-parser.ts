import {
    MessageParser,
    VendorOfflineOpenMessage,
    VendorOfflineOpenMessageProcessor,
    VendorOnlineOpenMessage,
    VendorOnlineOpenMessageProcessor,
    VendorOnlineClosedMessage,
    VendorOnlineClosedMessageProcessor
} from "fp-message-sdk/lib/message-sdk";

let defaultPlatform = 'foodpanda';
let messageParser = new MessageParser(defaultPlatform);

messageParser.registerMessageProcessor(
    VendorOfflineOpenMessage.MESSAGE_TYPE,
    new VendorOfflineOpenMessageProcessor()
);

messageParser.registerMessageProcessor(
    VendorOnlineOpenMessage.MESSAGE_TYPE,
    new VendorOnlineOpenMessageProcessor()
);

messageParser.registerMessageProcessor(
    VendorOnlineClosedMessage.MESSAGE_TYPE,
    new VendorOnlineClosedMessageProcessor()
);

export default messageParser;

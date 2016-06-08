"use strict";
const fp_message_sdk_1 = require("fp-message-sdk");
class CallVendorMessage extends fp_message_sdk_1.Message {
    constructor(platform, countryCode, content) {
        super(new fp_message_sdk_1.MessageMetadata(CallVendorMessage.MESSAGE_TYPE, CallVendorMessage.MESSAGE_VERSION, countryCode, platform), content);
    }
}
CallVendorMessage.MESSAGE_TYPE = 'call_vendor';
CallVendorMessage.MESSAGE_VERSION = 1;
exports.CallVendorMessage = CallVendorMessage;
//# sourceMappingURL=call-vendor-message.js.map
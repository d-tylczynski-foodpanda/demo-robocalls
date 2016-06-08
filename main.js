"use strict";
const queue_client_1 = require("./services/queue-client");
const scheduler_1 = require("./services/scheduler");
const call_vendor_message_1 = require("./lib/call-vendor-message");
const fp_message_sdk_1 = require("fp-message-sdk");
let callAfterSeconds = 5 * 60;
function unscheduleCallVendorMessage(platform, countryCode, vendorId) {
    return scheduler_1.default.unschedule(getScheduleTaskNameForCallVendorDelay(platform, countryCode, vendorId));
}
function scheduleCallVendorMessage(platform, countryCode, vendorId) {
    let callVendorMessage = new call_vendor_message_1.CallVendorMessage(platform, countryCode, {
        vendorId: vendorId
    });
    return scheduler_1.default.delay(getScheduleTaskNameForCallVendorDelay(platform, countryCode, vendorId), callAfterSeconds, callVendorMessage).then(() => {
        return null;
    });
}
function getScheduleTaskNameForCallVendorDelay(platform, countryCode, vendorId) {
    return platform + '_' + countryCode + '_call_vendor_' + vendorId;
}
queue_client_1.default.registerMessageHandler(fp_message_sdk_1.VendorOfflineOpenMessage.MESSAGE_TYPE, (message) => {
    return scheduleCallVendorMessage(message.metadata.platform, message.metadata.countryCode, message.message.vendorId);
});
queue_client_1.default.registerMessageHandler(fp_message_sdk_1.VendorOnlineOpenMessage.MESSAGE_TYPE, (message) => {
    return unscheduleCallVendorMessage(message.metadata.platform, message.metadata.countryCode, message.message.vendorId);
});
queue_client_1.default.registerMessageHandler(fp_message_sdk_1.VendorOnlineClosedMessage.MESSAGE_TYPE, (message) => {
    return unscheduleCallVendorMessage(message.metadata.platform, message.metadata.countryCode, message.message.vendorId);
});
//# sourceMappingURL=main.js.map
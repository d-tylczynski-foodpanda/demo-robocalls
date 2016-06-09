import queueClient from "./services/queue-client";
import scheduler from "./services/scheduler";
import * as Promise from "bluebird";
import {CallVendorMessage} from "./lib/call-vendor-message";
import {
    VendorOfflineOpenMessage,
    VendorOnlineOpenMessage,
    VendorOnlineClosedMessage
} from "fp-message-sdk";

let callAfterSeconds = 5 * 60;

function callVendor(platform: string, countryCode: string, vendorId: number): Promise<void> {
    // calling
    return Promise.resolve();
}

function unscheduleCallVendorMessage(platform: string, countryCode: string, vendorId: number): Promise<void> {
    return scheduler.unschedule(
        getScheduleTaskNameForCallVendorDelay(platform, countryCode, vendorId)
    );
}

function scheduleCallVendorMessage(platform: string, countryCode: string, vendorId: number): Promise<void> {
    let callVendorMessage = new CallVendorMessage(
        platform,
        countryCode,
        {
            vendorId: vendorId
        }
    );

    return scheduler.delay(
        getScheduleTaskNameForCallVendorDelay(platform, countryCode, vendorId),
        callAfterSeconds,
        callVendorMessage
    ).then(() => {
        return null;
    });
}

function getScheduleTaskNameForCallVendorDelay(platform: string, countryCode: string, vendorId: number): string {
    return platform + '_' + countryCode + '_call_vendor_' + vendorId;
}

// when offline and open, scheduling a call
queueClient.registerMessageHandler(VendorOfflineOpenMessage.MESSAGE_TYPE, (message: VendorOfflineOpenMessage) => {
    return scheduleCallVendorMessage(
        message.metadata.platform,
        message.metadata.countryCode,
        message.message.vendorId
    );
});

// calling
queueClient.registerMessageHandler(CallVendorMessage.MESSAGE_TYPE, (message: CallVendorMessage) => {
    return callVendor(
        message.metadata.platform,
        message.metadata.countryCode,
        message.message.vendorId
    );
});

// when online and open, unscheduling the call
queueClient.registerMessageHandler(VendorOnlineOpenMessage.MESSAGE_TYPE, (message: VendorOnlineOpenMessage) => {
    return unscheduleCallVendorMessage(
        message.metadata.platform,
        message.metadata.countryCode,
        message.message.vendorId
    );
});

// when online and open, unscheduling the call
queueClient.registerMessageHandler(VendorOnlineClosedMessage.MESSAGE_TYPE, (message: VendorOnlineClosedMessage) => {
    return unscheduleCallVendorMessage(
        message.metadata.platform,
        message.metadata.countryCode,
        message.message.vendorId
    );
});

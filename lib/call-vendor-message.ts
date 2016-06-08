import {MessageMetadata, Message} from "fp-message-sdk";

export interface ICallVendorMessageContent {
    vendorId: number
}

export class CallVendorMessage extends Message {
    static MESSAGE_TYPE = 'call_vendor';
    static MESSAGE_VERSION = 1;

    message: ICallVendorMessageContent

    constructor(
        platform: string,
        countryCode: string,
        content: ICallVendorMessageContent
    ) {
        super(
            new MessageMetadata(
                CallVendorMessage.MESSAGE_TYPE,
                CallVendorMessage.MESSAGE_VERSION,
                countryCode,
                platform
            ),
            content
        );
    }
}

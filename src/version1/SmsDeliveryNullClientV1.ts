import { ConfigParams } from 'pip-services-commons-node';

import { ISmsDeliveryClientV1 } from './ISmsDeliveryClientV1';
import { SmsMessageV1 } from './SmsMessageV1';
import { SmsRecipientV1 } from './SmsRecipientV1';

export class SmsDeliveryNullClientV1 implements ISmsDeliveryClientV1 {

    public sendMessage(correlationId: string, message: SmsMessageV1, parameters: ConfigParams,
        callback?: (err: any) => void): void {
        if (callback) callback(null);
    }

    public sendMessageToRecipient(correlationId: string, recipient: SmsRecipientV1,
        message: SmsMessageV1, parameters: ConfigParams, callback?: (err: any) => void) {
        if (callback) callback(null);
    }

    public sendMessageToRecipients(correlationId: string, recipients: SmsRecipientV1[],
        message: SmsMessageV1, parameters: ConfigParams, callback?: (err: any) => void): void {
        if (callback) callback(null);
    }

}
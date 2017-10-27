import { ConfigParams } from 'pip-services-commons-node';
import { CommandableHttpClient } from 'pip-services-net-node';
import { SmsMessageV1 } from './SmsMessageV1';
import { SmsRecipientV1 } from './SmsRecipientV1';
import { ISmsDeliveryClientV1 } from './ISmsDeliveryClientV1';
export declare class SmsDeliveryHttpClientV1 extends CommandableHttpClient implements ISmsDeliveryClientV1 {
    private _defaultParameters;
    constructor(config?: any);
    sendMessage(correlationId: string, message: SmsMessageV1, parameters: ConfigParams, callback?: (err: any) => void): void;
    sendMessageToRecipient(correlationId: string, recipient: SmsRecipientV1, message: SmsMessageV1, parameters: ConfigParams, callback?: (err: any) => void): void;
    sendMessageToRecipients(correlationId: string, recipients: SmsRecipientV1[], message: SmsMessageV1, parameters: ConfigParams, callback?: (err: any) => void): void;
}

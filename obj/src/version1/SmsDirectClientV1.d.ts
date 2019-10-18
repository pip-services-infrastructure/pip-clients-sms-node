import { ConfigParams } from 'pip-services3-commons-node';
import { DirectClient } from 'pip-services3-rpc-node';
import { ISmsClientV1 } from './ISmsClientV1';
import { SmsMessageV1 } from './SmsMessageV1';
import { SmsRecipientV1 } from './SmsRecipientV1';
export declare class SmsDirectClientV1 extends DirectClient<any> implements ISmsClientV1 {
    private _defaultParameters;
    constructor(config?: any);
    sendMessage(correlationId: string, message: SmsMessageV1, parameters: ConfigParams, callback?: (err: any) => void): void;
    sendMessageToRecipient(correlationId: string, recipient: SmsRecipientV1, message: SmsMessageV1, parameters: ConfigParams, callback?: (err: any) => void): void;
    sendMessageToRecipients(correlationId: string, recipients: SmsRecipientV1[], message: SmsMessageV1, parameters: ConfigParams, callback?: (err: any) => void): void;
}

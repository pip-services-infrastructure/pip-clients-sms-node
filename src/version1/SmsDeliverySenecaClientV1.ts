import { ConfigParams } from 'pip-services-commons-node';
import { IReferences } from 'pip-services-commons-node';
import { CommandableSenecaClient } from 'pip-services-net-node';

import { SmsMessageV1 } from './SmsMessageV1';
import { SmsRecipientV1 } from './SmsRecipientV1';
import { ISmsDeliveryClientV1 } from './ISmsDeliveryClientV1';

export class SmsDeliverySenecaClientV1 extends CommandableSenecaClient implements ISmsDeliveryClientV1 {
    private _defaultParameters: ConfigParams;

    constructor(config?: any) {
        super('sms_delivery');

        let thisConfig = ConfigParams.fromValue(config);
        this._defaultParameters = thisConfig.getSection('parameters');
        if (config != null) this.configure(thisConfig);
    }

    public sendMessage(correlationId: string, message: SmsMessageV1, parameters: ConfigParams,
        callback?: (err: any) => void): void {
        parameters = this._defaultParameters.override(parameters);
        this.callCommand(
            'send_message',
            correlationId,
            {
                message: message,
                parameters: parameters
            },
            callback
        );
    }

    public sendMessageToRecipient(correlationId: string, recipient: SmsRecipientV1,
        message: SmsMessageV1, parameters: ConfigParams, callback?: (err: any) => void) {
        parameters = this._defaultParameters.override(parameters);
        this.callCommand(
            'send_message_to_recipient',
            correlationId,
            {
                recipient: recipient,
                message: message,
                parameters: parameters
            },
            callback
        );
    }

    public sendMessageToRecipients(correlationId: string, recipients: SmsRecipientV1[],
        message: SmsMessageV1, parameters: ConfigParams, callback?: (err: any) => void): void {
        parameters = this._defaultParameters.override(parameters);
        this.callCommand(
            'send_message_to_recipients',
            correlationId,
            {
                recipients: recipients,
                message: message,
                parameters: parameters
            },
            callback
        );
    }

}

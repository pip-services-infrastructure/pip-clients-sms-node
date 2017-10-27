import { ConfigParams } from 'pip-services-commons-node';
import { Descriptor } from 'pip-services-commons-node';
import { DirectClient } from 'pip-services-net-node';

import { ISmsDeliveryClientV1 } from './ISmsDeliveryClientV1';
import { SmsMessageV1 } from './SmsMessageV1';
import { SmsRecipientV1 } from './SmsRecipientV1';

//import { ISmsDeliveryController } from 'pip-services-smsdelivery-node';

export class SmsDeliveryDirectClientV1 extends DirectClient<any> implements ISmsDeliveryClientV1 {
    private _defaultParameters: ConfigParams;

    public constructor(config?: any) {
        super();
        this._dependencyResolver.put('controller', new Descriptor("pip-services-smsdelivery", "controller", "*", "*", "*"));

        let thisConfig = ConfigParams.fromValue(config);
        this._defaultParameters = thisConfig.getSection('parameters');
        if (config != null) this.configure(thisConfig);
    }
    
    public sendMessage(correlationId: string, message: SmsMessageV1, parameters: ConfigParams,
        callback?: (err: any) => void): void {
        parameters = this._defaultParameters.override(parameters);
        let timing = this.instrument(correlationId, 'sms.send_message');
        this._controller.sendMessage(correlationId, message, parameters, (err) => {
            timing.endTiming();
            if (callback) callback(err);
        });
    }

    public sendMessageToRecipient(correlationId: string, recipient: SmsRecipientV1,
        message: SmsMessageV1, parameters: ConfigParams, callback?: (err: any) => void) {
        parameters = this._defaultParameters.override(parameters);
        let timing = this.instrument(correlationId, 'sms.send_message_to_recipient');
        this._controller.sendMessageToRecipient(
            correlationId, recipient, message, parameters, 
            (err) => {
                timing.endTiming();
                if (callback) callback(err);
            }
        );
    }

    public sendMessageToRecipients(correlationId: string, recipients: SmsRecipientV1[],
        message: SmsMessageV1, parameters: ConfigParams, callback?: (err: any) => void): void {
        parameters = this._defaultParameters.override(parameters);
        let timing = this.instrument(correlationId, 'sms.send_message_to_recipients');
        this._controller.sendMessageToRecipients(
            correlationId, recipients, message, parameters, 
            (err) => {
                timing.endTiming();
                if (callback) callback(err);
            }
        );
    }

}
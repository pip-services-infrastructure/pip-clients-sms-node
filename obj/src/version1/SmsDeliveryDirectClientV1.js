"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const pip_services_commons_node_1 = require("pip-services-commons-node");
const pip_services_commons_node_2 = require("pip-services-commons-node");
const pip_services_net_node_1 = require("pip-services-net-node");
//import { ISmsDeliveryController } from 'pip-services-smsdelivery-node';
class SmsDeliveryDirectClientV1 extends pip_services_net_node_1.DirectClient {
    constructor(config) {
        super();
        this._dependencyResolver.put('controller', new pip_services_commons_node_2.Descriptor("pip-services-smsdelivery", "controller", "*", "*", "*"));
        let thisConfig = pip_services_commons_node_1.ConfigParams.fromValue(config);
        this._defaultParameters = thisConfig.getSection('parameters');
        if (config != null)
            this.configure(thisConfig);
    }
    sendMessage(correlationId, message, parameters, callback) {
        parameters = this._defaultParameters.override(parameters);
        let timing = this.instrument(correlationId, 'sms.send_message');
        this._controller.sendMessage(correlationId, message, parameters, (err) => {
            timing.endTiming();
            if (callback)
                callback(err);
        });
    }
    sendMessageToRecipient(correlationId, recipient, message, parameters, callback) {
        parameters = this._defaultParameters.override(parameters);
        let timing = this.instrument(correlationId, 'sms.send_message_to_recipient');
        this._controller.sendMessageToRecipient(correlationId, recipient, message, parameters, (err) => {
            timing.endTiming();
            if (callback)
                callback(err);
        });
    }
    sendMessageToRecipients(correlationId, recipients, message, parameters, callback) {
        parameters = this._defaultParameters.override(parameters);
        let timing = this.instrument(correlationId, 'sms.send_message_to_recipients');
        this._controller.sendMessageToRecipients(correlationId, recipients, message, parameters, (err) => {
            timing.endTiming();
            if (callback)
                callback(err);
        });
    }
}
exports.SmsDeliveryDirectClientV1 = SmsDeliveryDirectClientV1;
//# sourceMappingURL=SmsDeliveryDirectClientV1.js.map
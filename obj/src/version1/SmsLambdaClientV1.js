"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const pip_services3_commons_node_1 = require("pip-services3-commons-node");
const pip_services3_aws_node_1 = require("pip-services3-aws-node");
class SmsLambdaClientV1 extends pip_services3_aws_node_1.CommandableLambdaClient {
    constructor(config) {
        super('sms');
        let thisConfig = pip_services3_commons_node_1.ConfigParams.fromValue(config);
        this._defaultParameters = thisConfig.getSection('parameters');
        if (config != null)
            this.configure(thisConfig);
    }
    sendMessage(correlationId, message, parameters, callback) {
        parameters = this._defaultParameters.override(parameters);
        this.callCommand('send_message', correlationId, {
            message: message,
            parameters: parameters
        }, callback);
    }
    sendMessageToRecipient(correlationId, recipient, message, parameters, callback) {
        parameters = this._defaultParameters.override(parameters);
        this.callCommand('send_message_to_recipient', correlationId, {
            recipient: recipient,
            message: message,
            parameters: parameters
        }, callback);
    }
    sendMessageToRecipients(correlationId, recipients, message, parameters, callback) {
        parameters = this._defaultParameters.override(parameters);
        this.callCommand('send_message_to_recipients', correlationId, {
            recipients: recipients,
            message: message,
            parameters: parameters
        }, callback);
    }
}
exports.SmsLambdaClientV1 = SmsLambdaClientV1;
//# sourceMappingURL=SmsLambdaClientV1.js.map
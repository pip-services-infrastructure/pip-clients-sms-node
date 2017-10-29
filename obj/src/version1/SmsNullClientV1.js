"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class SmsNullClientV1 {
    sendMessage(correlationId, message, parameters, callback) {
        if (callback)
            callback(null);
    }
    sendMessageToRecipient(correlationId, recipient, message, parameters, callback) {
        if (callback)
            callback(null);
    }
    sendMessageToRecipients(correlationId, recipients, message, parameters, callback) {
        if (callback)
            callback(null);
    }
}
exports.SmsNullClientV1 = SmsNullClientV1;
//# sourceMappingURL=SmsNullClientV1.js.map
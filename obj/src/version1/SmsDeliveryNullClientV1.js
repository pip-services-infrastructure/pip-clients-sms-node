"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class SmsDeliveryNullClientV1 {
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
exports.SmsDeliveryNullClientV1 = SmsDeliveryNullClientV1;
//# sourceMappingURL=SmsDeliveryNullClientV1.js.map
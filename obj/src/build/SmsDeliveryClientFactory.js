"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const pip_services_commons_node_1 = require("pip-services-commons-node");
const pip_services_commons_node_2 = require("pip-services-commons-node");
const SmsDeliveryNullClientV1_1 = require("../version1/SmsDeliveryNullClientV1");
const SmsDeliveryDirectClientV1_1 = require("../version1/SmsDeliveryDirectClientV1");
const SmsDeliveryHttpClientV1_1 = require("../version1/SmsDeliveryHttpClientV1");
const SmsDeliverySenecaClientV1_1 = require("../version1/SmsDeliverySenecaClientV1");
class SmsDeliveryClientFactory extends pip_services_commons_node_2.Factory {
    constructor() {
        super();
        this.registerAsType(SmsDeliveryClientFactory.NullClientV1Descriptor, SmsDeliveryNullClientV1_1.SmsDeliveryNullClientV1);
        this.registerAsType(SmsDeliveryClientFactory.DirectClientV1Descriptor, SmsDeliveryDirectClientV1_1.SmsDeliveryDirectClientV1);
        this.registerAsType(SmsDeliveryClientFactory.HttpClientV1Descriptor, SmsDeliveryHttpClientV1_1.SmsDeliveryHttpClientV1);
        this.registerAsType(SmsDeliveryClientFactory.SenecaClientV1Descriptor, SmsDeliverySenecaClientV1_1.SmsDeliverySenecaClientV1);
    }
}
SmsDeliveryClientFactory.Descriptor = new pip_services_commons_node_1.Descriptor('pip-services-smsdelivery', 'factory', 'default', 'default', '1.0');
SmsDeliveryClientFactory.NullClientV1Descriptor = new pip_services_commons_node_1.Descriptor('pip-services-smsdelivery', 'client', 'null', 'default', '1.0');
SmsDeliveryClientFactory.DirectClientV1Descriptor = new pip_services_commons_node_1.Descriptor('pip-services-smsdelivery', 'client', 'direct', 'default', '1.0');
SmsDeliveryClientFactory.HttpClientV1Descriptor = new pip_services_commons_node_1.Descriptor('pip-services-smsdelivery', 'client', 'http', 'default', '1.0');
SmsDeliveryClientFactory.SenecaClientV1Descriptor = new pip_services_commons_node_1.Descriptor('pip-services-smsdelivery', 'client', 'seneca', 'default', '1.0');
exports.SmsDeliveryClientFactory = SmsDeliveryClientFactory;
//# sourceMappingURL=SmsDeliveryClientFactory.js.map
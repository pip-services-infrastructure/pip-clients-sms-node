import { Descriptor } from 'pip-services-commons-node';
import { Factory } from 'pip-services-commons-node';

import { SmsDeliveryNullClientV1 } from '../version1/SmsDeliveryNullClientV1';
import { SmsDeliveryDirectClientV1 } from '../version1/SmsDeliveryDirectClientV1';
import { SmsDeliveryHttpClientV1 } from '../version1/SmsDeliveryHttpClientV1';
import { SmsDeliverySenecaClientV1 } from '../version1/SmsDeliverySenecaClientV1';

export class SmsDeliveryClientFactory extends Factory {
	public static Descriptor: Descriptor = new Descriptor('pip-services-smsdelivery', 'factory', 'default', 'default', '1.0');
	public static NullClientV1Descriptor = new Descriptor('pip-services-smsdelivery', 'client', 'null', 'default', '1.0');
	public static DirectClientV1Descriptor = new Descriptor('pip-services-smsdelivery', 'client', 'direct', 'default', '1.0');
	public static HttpClientV1Descriptor = new Descriptor('pip-services-smsdelivery', 'client', 'http', 'default', '1.0');
	public static SenecaClientV1Descriptor = new Descriptor('pip-services-smsdelivery', 'client', 'seneca', 'default', '1.0');
	
	constructor() {
		super();

		this.registerAsType(SmsDeliveryClientFactory.NullClientV1Descriptor, SmsDeliveryNullClientV1);
		this.registerAsType(SmsDeliveryClientFactory.DirectClientV1Descriptor, SmsDeliveryDirectClientV1);
		this.registerAsType(SmsDeliveryClientFactory.HttpClientV1Descriptor, SmsDeliveryHttpClientV1);
		this.registerAsType(SmsDeliveryClientFactory.SenecaClientV1Descriptor, SmsDeliverySenecaClientV1);
	}
	
}

import { Descriptor } from 'pip-services-commons-node';
import { Factory } from 'pip-services-components-node';

import { SmsNullClientV1 } from '../version1/SmsNullClientV1';
import { SmsDirectClientV1 } from '../version1/SmsDirectClientV1';
import { SmsHttpClientV1 } from '../version1/SmsHttpClientV1';
import { SmsSenecaClientV1 } from '../version1/SmsSenecaClientV1';

export class SmsClientFactory extends Factory {
	public static Descriptor: Descriptor = new Descriptor('pip-services-sms', 'factory', 'default', 'default', '1.0');
	public static NullClientV1Descriptor = new Descriptor('pip-services-sms', 'client', 'null', 'default', '1.0');
	public static DirectClientV1Descriptor = new Descriptor('pip-services-sms', 'client', 'direct', 'default', '1.0');
	public static HttpClientV1Descriptor = new Descriptor('pip-services-sms', 'client', 'http', 'default', '1.0');
	public static SenecaClientV1Descriptor = new Descriptor('pip-services-sms', 'client', 'seneca', 'default', '1.0');
	
	constructor() {
		super();

		this.registerAsType(SmsClientFactory.NullClientV1Descriptor, SmsNullClientV1);
		this.registerAsType(SmsClientFactory.DirectClientV1Descriptor, SmsDirectClientV1);
		this.registerAsType(SmsClientFactory.HttpClientV1Descriptor, SmsHttpClientV1);
		this.registerAsType(SmsClientFactory.SenecaClientV1Descriptor, SmsSenecaClientV1);
	}
	
}

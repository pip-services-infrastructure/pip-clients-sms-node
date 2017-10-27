let assert = require('chai').assert;
let async = require('async');

import { Descriptor } from 'pip-services-commons-node';
import { ConfigParams } from 'pip-services-commons-node';
import { References } from 'pip-services-commons-node';
import { ConsoleLogger } from 'pip-services-commons-node';

import { SmsDeliveryController } from 'pip-services-smsdelivery-node';
import { SmsDeliveryHttpServiceV1 } from 'pip-services-smsdelivery-node';
import { ISmsDeliveryClientV1 } from '../../src/version1/ISmsDeliveryClientV1';
import { SmsDeliveryHttpClientV1 } from '../../src/version1/SmsDeliveryHttpClientV1';
import { SmsDeliveryClientFixtureV1 } from './SmsDeliveryClientFixtureV1';

var httpConfig = ConfigParams.fromTuples(
    "connection.protocol", "http",
    "connection.host", "localhost",
    "connection.port", 3000
);

suite('SmsDeliveryHttpClientV1', ()=> {
    let service: SmsDeliveryHttpServiceV1;
    let client: SmsDeliveryHttpClientV1;
    let fixture: SmsDeliveryClientFixtureV1;

    suiteSetup((done) => {
        let logger = new ConsoleLogger();
        let controller = new SmsDeliveryController();
        controller.configure(new ConfigParams());

        service = new SmsDeliveryHttpServiceV1();
        service.configure(httpConfig);

        let references: References = References.fromTuples(
            new Descriptor('pip-services-commons', 'logger', 'console', 'default', '1.0'), logger,
            new Descriptor('pip-services-smsdelivery', 'controller', 'default', 'default', '1.0'), controller,
            new Descriptor('pip-services-smsdelivery', 'service', 'http', 'default', '1.0'), service
        );
        controller.setReferences(references);
        service.setReferences(references);

        client = new SmsDeliveryHttpClientV1();
        client.setReferences(references);
        client.configure(httpConfig);

        fixture = new SmsDeliveryClientFixtureV1(client);

        service.open(null, (err) => {
            client.open(null, done);
        });
    });
    
    suiteTeardown((done) => {
        client.close(null);
        service.close(null, done);
    });

    test('Send Sms to Address', (done) => {
        fixture.testSendSmsToAddress(done);
    });

    test('Send Sms to Recipients', (done) => {
        fixture.testSendSmsToRecipients(done);
    });

});

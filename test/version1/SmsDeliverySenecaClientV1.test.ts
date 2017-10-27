let assert = require('chai').assert;
let async = require('async');

import { Descriptor } from 'pip-services-commons-node';
import { ConfigParams } from 'pip-services-commons-node';
import { References } from 'pip-services-commons-node';
import { ConsoleLogger } from 'pip-services-commons-node';
import { SenecaInstance } from 'pip-services-net-node';

import { SmsDeliveryController } from 'pip-services-smsdelivery-node';
import { SmsDeliverySenecaServiceV1 } from 'pip-services-smsdelivery-node';
import { ISmsDeliveryClientV1 } from '../../src/version1/ISmsDeliveryClientV1';
import { SmsDeliverySenecaClientV1 } from '../../src/version1/SmsDeliverySenecaClientV1';
import { SmsDeliveryClientFixtureV1 } from './SmsDeliveryClientFixtureV1';

let senecaConfig = ConfigParams.fromTuples(
    "connection.protocol", "none"
);

suite('SmsDeliverySenecaClient', () => {
    let service: SmsDeliverySenecaServiceV1;
    let client: SmsDeliverySenecaClientV1;
    let fixture: SmsDeliveryClientFixtureV1;

    suiteSetup((done) => {
        let logger = new ConsoleLogger();
        let controller = new SmsDeliveryController();
        controller.configure(new ConfigParams());

        service = new SmsDeliverySenecaServiceV1();
        service.configure(senecaConfig);
        let seneca = new SenecaInstance();

        let references: References = References.fromTuples(
            new Descriptor('pip-services-commons', 'logger', 'console', 'default', '1.0'), logger,
            new Descriptor('pip-services-net', 'seneca', 'instance', 'default', '1.0'), seneca,
            new Descriptor('pip-services-smsdelivery', 'controller', 'default', 'default', '1.0'), controller,
            new Descriptor('pip-services-smsdelivery', 'service', 'seneca', 'default', '1.0'), service
        );
        seneca.setReferences(references);
        controller.setReferences(references);
        service.setReferences(references);

        client = new SmsDeliverySenecaClientV1();
        client.configure(senecaConfig);
        client.setReferences(references);

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

let assert = require('chai').assert;
let async = require('async');

import { Descriptor } from 'pip-services-commons-node';
import { ConfigParams } from 'pip-services-commons-node';
import { References } from 'pip-services-commons-node';
import { ConsoleLogger } from 'pip-services-commons-node';

import { SmsDeliveryController } from 'pip-services-smsdelivery-node';
import { ISmsDeliveryClientV1 } from '../../src/version1/ISmsDeliveryClientV1';
import { SmsDeliveryDirectClientV1 } from '../../src/version1/SmsDeliveryDirectClientV1';
import { SmsDeliveryClientFixtureV1 } from './SmsDeliveryClientFixtureV1';

suite('SmsDeliveryDirectClientV1', ()=> {
    let client: SmsDeliveryDirectClientV1;
    let fixture: SmsDeliveryClientFixtureV1;

    suiteSetup((done) => {
        let logger = new ConsoleLogger();
        let controller = new SmsDeliveryController();
        controller.configure(new ConfigParams());

        let references: References = References.fromTuples(
            new Descriptor('pip-services-commons', 'logger', 'console', 'default', '1.0'), logger,
            new Descriptor('pip-services-smsdelivery', 'controller', 'default', 'default', '1.0'), controller,
        );
        controller.setReferences(references);

        client = new SmsDeliveryDirectClientV1();
        client.setReferences(references);

        fixture = new SmsDeliveryClientFixtureV1(client);

        client.open(null, done);
    });
    
    suiteTeardown((done) => {
        client.close(null, done);
    });

    test('Send Sms to Address', (done) => {
        fixture.testSendSmsToAddress(done);
    });

    test('Send Sms to Recipients', (done) => {
        fixture.testSendSmsToRecipients(done);
    });

});

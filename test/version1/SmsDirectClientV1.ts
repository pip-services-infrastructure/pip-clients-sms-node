let assert = require('chai').assert;
let async = require('async');

import { Descriptor } from 'pip-services-commons-node';
import { ConfigParams } from 'pip-services-commons-node';
import { References } from 'pip-services-commons-node';
import { ConsoleLogger } from 'pip-services-components-node';

import { SmsController } from 'pip-services-sms-node';
import { ISmsClientV1 } from '../../src/version1/ISmsClientV1';
import { SmsDirectClientV1 } from '../../src/version1/SmsDirectClientV1';
import { SmsClientFixtureV1 } from './SmsClientFixtureV1';

suite('SmsDirectClientV1', ()=> {
    let client: SmsDirectClientV1;
    let fixture: SmsClientFixtureV1;

    suiteSetup((done) => {
        let logger = new ConsoleLogger();
        let controller = new SmsController();
        controller.configure(new ConfigParams());

        let references: References = References.fromTuples(
            new Descriptor('pip-services', 'logger', 'console', 'default', '1.0'), logger,
            new Descriptor('pip-services-sms', 'controller', 'default', 'default', '1.0'), controller,
        );
        controller.setReferences(references);

        client = new SmsDirectClientV1();
        client.setReferences(references);

        fixture = new SmsClientFixtureV1(client);

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

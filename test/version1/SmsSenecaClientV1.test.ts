let assert = require('chai').assert;
let async = require('async');

import { Descriptor } from 'pip-services-commons-node';
import { ConfigParams } from 'pip-services-commons-node';
import { References } from 'pip-services-commons-node';
import { ConsoleLogger } from 'pip-services-components-node';
import { SenecaInstance } from 'pip-services-seneca-node';

import { SmsController } from 'pip-services-sms-node';
import { SmsSenecaServiceV1 } from 'pip-services-sms-node';
import { ISmsClientV1 } from '../../src/version1/ISmsClientV1';
import { SmsSenecaClientV1 } from '../../src/version1/SmsSenecaClientV1';
import { SmsClientFixtureV1 } from './SmsClientFixtureV1';

let senecaConfig = ConfigParams.fromTuples(
    "connection.protocol", "none"
);

suite('SmsSenecaClient', () => {
    let service: SmsSenecaServiceV1;
    let client: SmsSenecaClientV1;
    let fixture: SmsClientFixtureV1;

    suiteSetup((done) => {
        let logger = new ConsoleLogger();
        let controller = new SmsController();
        controller.configure(new ConfigParams());

        service = new SmsSenecaServiceV1();
        service.configure(senecaConfig);
        let seneca = new SenecaInstance();

        let references: References = References.fromTuples(
            new Descriptor('pip-services', 'logger', 'console', 'default', '1.0'), logger,
            new Descriptor('pip-services-seneca', 'seneca', 'instance', 'default', '1.0'), seneca,
            new Descriptor('pip-services-sms', 'controller', 'default', 'default', '1.0'), controller,
            new Descriptor('pip-services-sms', 'service', 'seneca', 'default', '1.0'), service
        );
        seneca.setReferences(references);
        controller.setReferences(references);
        service.setReferences(references);

        client = new SmsSenecaClientV1();
        client.configure(senecaConfig);
        client.setReferences(references);

        fixture = new SmsClientFixtureV1(client);

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

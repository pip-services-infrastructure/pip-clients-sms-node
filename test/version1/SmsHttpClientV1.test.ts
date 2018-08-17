let assert = require('chai').assert;
let async = require('async');

import { Descriptor } from 'pip-services-commons-node';
import { ConfigParams } from 'pip-services-commons-node';
import { References } from 'pip-services-commons-node';
import { ConsoleLogger } from 'pip-services-components-node';

import { SmsController } from 'pip-services-sms-node';
import { SmsHttpServiceV1 } from 'pip-services-sms-node';
import { ISmsClientV1 } from '../../src/version1/ISmsClientV1';
import { SmsHttpClientV1 } from '../../src/version1/SmsHttpClientV1';
import { SmsClientFixtureV1 } from './SmsClientFixtureV1';

var httpConfig = ConfigParams.fromTuples(
    "connection.protocol", "http",
    "connection.host", "localhost",
    "connection.port", 3000
);

suite('SmsHttpClientV1', ()=> {
    let service: SmsHttpServiceV1;
    let client: SmsHttpClientV1;
    let fixture: SmsClientFixtureV1;

    suiteSetup((done) => {
        let logger = new ConsoleLogger();
        let controller = new SmsController();
        controller.configure(new ConfigParams());

        service = new SmsHttpServiceV1();
        service.configure(httpConfig);

        let references: References = References.fromTuples(
            new Descriptor('pip-services', 'logger', 'console', 'default', '1.0'), logger,
            new Descriptor('pip-services-sms', 'controller', 'default', 'default', '1.0'), controller,
            new Descriptor('pip-services-sms', 'service', 'http', 'default', '1.0'), service
        );
        controller.setReferences(references);
        service.setReferences(references);

        client = new SmsHttpClientV1();
        client.setReferences(references);
        client.configure(httpConfig);

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

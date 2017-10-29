let process = require('process');

import { ConfigParams } from 'pip-services-commons-node';

import { SmsClientFixtureV1 } from './SmsClientFixtureV1';
import { SmsLambdaClientV1 } from '../../src/version1/SmsLambdaClientV1';

suite('SmsLambdaClient', ()=> {
    let awsAccessId = process.env['AWS_ACCESS_ID'];
    let awsAccessKey = process.env['AWS_ACCESS_KEY'];
    let awsArn = process.env['AWS_ARN'];

    // Skip if connection is not configured
    if (awsAccessId == null || awsArn == null) return;

    let client: SmsLambdaClientV1;
    let fixture: SmsClientFixtureV1;

    setup((done) => {
        client = new SmsLambdaClientV1();

        client.configure(ConfigParams.fromTuples(
            'connection.protocol', 'aws',
            'connection.arn', awsArn,
            'credential.access_id', awsAccessId,
            'credential.access_key', awsAccessKey
        ));

        fixture = new SmsClientFixtureV1(client);

        client.open(null, done);
    });

    teardown((done) => {
        client.close(null, done);
    });

    test('Send Sms to Address', (done) => {
        fixture.testSendSmsToAddress(done);
    });

    test('Send Sms to Recipients', (done) => {
        fixture.testSendSmsToRecipients(done);
    });

});
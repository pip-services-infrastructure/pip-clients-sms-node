let _ = require('lodash');
let async = require('async');
let assert = require('chai').assert;

import { ConfigParams } from 'pip-services3-commons-node';
import { SmsMessageV1 } from '../../src/version1/SmsMessageV1';
import { SmsRecipientV1 } from '../../src/version1/SmsRecipientV1';
import { ISmsClientV1 } from '../../src/version1/ISmsClientV1';

export class SmsClientFixtureV1 {
    private _client: ISmsClientV1;
    
    constructor(client: ISmsClientV1) {
        this._client = client;
    }

    public testSendSmsToAddress(done) {
        let message =  <SmsMessageV1> {
            to: '+15203452335',
            text: '{{text}}'
        };

        let parameters = ConfigParams.fromTuples(
            'subject', 'Test Sms To Address',
            'text', 'This is just a test'
        );

        this._client.sendMessage(
            null, message, parameters,
            (err) => {
                assert.isNull(err);
                done();
            }
        );
    }

    public testSendSmsToRecipients(done) {
        let message =  <SmsMessageV1> {
            text: 'This is just a test'
        };

        let recipient = <SmsRecipientV1> {
            id: '1',
            phone: '+152023452335',
            name: 'Test Recipient'
        };

        this._client.sendMessageToRecipient(
            null, recipient, message, null,
            (err) => {
                assert.isNull(err);
                done();
            }
        );
    }
        
}

# Sms Delivery Microservice Client SDK for Node.js

This is a Node.js client SDK for [pip-services-smsdelivery](https://github.com/pip-services-users/pip-services-smsdelivery-node) microservice.
It provides an easy to use abstraction over communication protocols:

* HTTP client
* Seneca client (see http://www.senecajs.org)
* Direct client for monolythic deployments
* Null client to be used in testing

In addition to the microservice functionality the client SDK supports message templates 
that can be configured by client user. 

<a name="links"></a> Quick Links:

* [Development Guide](doc/Development.md)
* [API Version 1](doc/NodeClientApiV1.md)

## Install

Add dependency to the client SDK into **package.json** file of your project
```javascript
{
    ...
    "dependencies": {
        ....
        "pip-clients-smsdelivery-node": "^1.0.*",
        ...
    }
}
```

Then install the dependency using **npm** tool
```bash
# Install new dependencies
npm install

# Update already installed dependencies
npm update
```

## Use

Inside your code get the reference to the client SDK
```javascript
var sdk = new require('pip-clients-smsdelivery-node');
```

Define client configuration parameters.

```javascript
// Client configuration
var config = {
    parameters: {
        server_url: 'http://localhost:3000',
        client_url: 'http://localhost:8000',
        client_name: 'PipServices Sample',
        welcome_message: 'Congratulations with your signup in <%= clientName %>!',
        signature: 'Sincerely, <%= clientName %> Team'
    },
    connection: {
        protocol: 'http',
        host: 'localhost', 
        port: 8080
    }
};
```

Instantiate the client and open connection to the microservice
```javascript
// Create the client instance
var client = sdk.SmsDeliveryHttpClient(config);

// Connect to the microservice
client.open(null, function(err) {
    if (err) {
        console.error('Connection to the microservice failed');
        console.error(err);
        return;
    }
    
    // Work with the microservice
    ...
});
```

Now the client is ready to perform operations
```javascript
// Send sms message to address
client.sendMessage(
    null,
    { 
        to: '+12343455633',
        text: 'This is a test message. Please, ignore it'
    },
    null,
    function (err) {
        ...
    }
);
```

```javascript
// Send sms message to users
client.sendMessageToRecipients(
    null,
    [
        { id: '123', phone: '+12343455633' },
        { id: '321', phone: '+12343434633' }
    ],
    { 
        text: 'This is a test message. Please, ignore it'
    },
    null,
    function (err) {
        ...
    }
);
```

Now you can send a message using the handlebars templates.
Client will automatically load their content and parse.

```javascript
// Send sms message to address using template
client.sendMessage(
    null,
    { 
        to: 'somebody@somewhere.com',
        text: 'Today is {{ today }}'
    },
    {
        today: new Date.toISOString()
    },
    function (err) {
        ...
    }
);
```

## Acknowledgements

This client SDK was created and currently maintained by *Sergey Seroukhov*.


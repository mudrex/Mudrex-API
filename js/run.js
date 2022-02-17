var request=require('request');
var uuid = require("uuid");
var CryptoJS = require("crypto-js");


var clientId = process.env.CLIENT_ID;
var userId = process.env.USER_ID;
var secretKey = process.env.SECRET_KEY;

var timeInSeconds = Math.floor(Date.now() / 1000);
var requestId = uuid.v4();

///////////////////
// WITH "userId" //
///////////////////
// With requestId
var sigString = requestId + timeInSeconds + userId;
token = CryptoJS.HmacSHA256(sigString, secretKey).toString(CryptoJS.enc.Hex).toUpperCase();

// Make Sample response
var options = {
    headers: {
        'X-Timestamp': timeInSeconds,
        'X-Client-Id': clientId,
        'X-User-Id': userId,
        'X-Secret-Key': token,
        'X-Request-Id': requestId
    }
};
request.get(
    'https://sandbox.mudrex.com/api/user_services/v1/verify_user_secret',
    options,
    function(err, res, body) {
        console.log(body == "OK");
    }
);


// Without requestId [WILL BE DEPREDIATED]
var sigString = clientId + timeInSeconds + userId;
token = CryptoJS.HmacSHA256(sigString, secretKey).toString(CryptoJS.enc.Hex).toUpperCase();

// Make Sample response
var options = {
    headers: {
        'X-Timestamp': timeInSeconds,
        'X-Client-Id': clientId,
        'X-User-Id': userId,
        'X-Secret-Key': token,
        'X-Request-Id': requestId
    }
};
request.get(
    'https://sandbox.mudrex.com/api/user_services/v1/verify_user_secret',
    options,
    function(err, res, body) {
        console.log(body == "OK");
    }
);


//////////////////////
// WITHOUT "userId" //
//////////////////////
// With requestId
var sigString = requestId + timeInSeconds;
token = CryptoJS.HmacSHA256(sigString, secretKey).toString(CryptoJS.enc.Hex).toUpperCase();

// Make Sample response
var options = {
    headers: {
        'X-Timestamp': timeInSeconds,
        'X-Client-Id': clientId,
        'X-Secret-Key': token,
        'X-Request-Id': requestId
    }
};
request.get(
    'https://sandbox.mudrex.com/api/user_services/v1/verify_admin_secret',
    options,
    function(err, res, body) {
        console.log(body == "OK");
    }
);


// Without requestId [WILL BE DEPREDIATED]
var sigString = clientId + timeInSeconds;
token = CryptoJS.HmacSHA256(sigString, secretKey).toString(CryptoJS.enc.Hex).toUpperCase();

// Make Sample response
var options = {
    headers: {
        'X-Timestamp': timeInSeconds,
        'X-Client-Id': clientId,
        'X-Secret-Key': token,
        'X-Request-Id': requestId
    }
};
request.get(
    'https://sandbox.mudrex.com/api/user_services/v1/verify_admin_secret',
    options,
    function(err, res, body) {
        console.log(body == "OK");
    }
);

import os
import time
from uuid import uuid4
import hmac
import hashlib
import requests

client_id = os.environ.get("CLIENT_ID")
user_id = os.environ.get("USER_ID")
client_secret = os.environ.get("SECRET_KEY")

time_in_seconds = str(int(time.time()))
request_id = str(uuid4())


###################
## WITH "userId" ##
###################
## With request_id
sig_string = f"{request_id}{time_in_seconds}{user_id}"
token = hmac.new(bytes(client_secret, "utf-8"), msg=bytes(sig_string, "utf-8"), digestmod = hashlib.sha256).hexdigest().upper()

## Make Sample response
headers = {
    'X-Timestamp': time_in_seconds,
    'X-Client-Id': client_id,
    'X-User-Id': user_id,
    'X-Secret-Key': token,
    'X-Request-Id': request_id
}
response = requests.get(
    'https://sandbox.mudrex.com/api/user_services/v1/verify_user_secret',
    headers=headers,
)
print(response.text == "OK")


## Without using request_id [WILL BE DEPREDIATED]
sig_string = f"{client_id}{time_in_seconds}{user_id}"
token = hmac.new(bytes(client_secret, "utf-8"), msg=bytes(sig_string, "utf-8"), digestmod = hashlib.sha256).hexdigest().upper()

## Make Sample response
headers= {
    'X-Timestamp': time_in_seconds,
    'X-Client-Id': client_id,
    'X-User-Id': user_id,
    'X-Secret-Key': token,
    'X-Request-Id': request_id
}
response = requests.get(
    'https://sandbox.mudrex.com/api/user_services/v1/verify_user_secret',
    headers=headers,
)
print(response.text == "OK")


######################
## WITHOUT "userId" ##
######################
## With request_id
sig_string = f"{request_id}{time_in_seconds}"
token = hmac.new(bytes(client_secret, "utf-8"), msg=bytes(sig_string, "utf-8"), digestmod = hashlib.sha256).hexdigest().upper()

## Make Sample response
headers = {
    'X-Timestamp': time_in_seconds,
    'X-Client-Id': client_id,
    'X-Secret-Key': token,
    'X-Request-Id': request_id
}
response = requests.get(
    'https://sandbox.mudrex.com/api/user_services/v1/verify_admin_secret',
    headers=headers,
)
print(response.text == "OK")


## Without using request_id [WILL BE DEPREDIATED]
sig_string = f"{client_id}{time_in_seconds}"
token = hmac.new(bytes(client_secret, "utf-8"), msg=bytes(sig_string, "utf-8"), digestmod = hashlib.sha256).hexdigest().upper()

## Make Sample response
headers= {
    'X-Timestamp': time_in_seconds,
    'X-Client-Id': client_id,
    'X-Secret-Key': token,
    'X-Request-Id': request_id
}
response = requests.get(
    'https://sandbox.mudrex.com/api/user_services/v1/verify_admin_secret',
    headers=headers,
)
print(response.text == "OK")

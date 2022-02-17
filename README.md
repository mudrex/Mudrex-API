# Mudrex API Authentication

## Usage

### Requirements
You should be a signed partner for Mudrex CaaS. Please contact - support.caas@mudrex.com

### Installation

#### Python
```shell
pip install -r requirements.txt
```

#### JS
```shell
npm install
```

#### Postman

Create a new requests > Pre-request Script


## Error Codes

| Error Code | Description |
| --- | --- |
| 6087 | User cap reached |
| 6088 | Repeated request ID |
| 6089 | Invalid X-User-Id |
| 6090 | Invalid X-Secret-Key |
| 6091 | User not found |
| 6092 | Client not found |
| 6093 | Request timestamp expired |
| 6094 | Bad parameters |
| 6095 | X-User-Id missing |
| 6096 | X-Client-Id missing |
| 6097 | X-Request-Id missing |
| 6098 | X-Secret-Key missing |
| 6099 | X-Timestamp missing |

## FAQs
### I am always getting 6093

The timestamp sent is outside of the server time - receiving value the timestamp sent is more than 10s behind of the server time

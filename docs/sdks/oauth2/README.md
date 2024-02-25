# OAuth2
(*oAuth2*)

### Available Operations

* [getAuthorize](#getauthorize) - Request authorization
* [postTokenCreate](#posttokencreate) - Request access token
* [postTokenRefreshJson](#posttokenrefreshjson) - Refresh access token
* [postTokenRefreshRaw](#posttokenrefreshraw) - Refresh access token

## getAuthorize

Request user authorization for an OAuth2 connection

### Example Usage

```typescript
import { SpendeskPublicAPI } from "Spendesk-Public-API";
import { CodeChallengeMethod, ResponseType } from "Spendesk-Public-API/dist/sdk/models/operations";

async function run() {
  const sdk = new SpendeskPublicAPI();

  const res = await sdk.oAuth2.getAuthorize({
    clientId: "<value>",
    codeChallenge: "<value>",
    codeChallengeMethod: CodeChallengeMethod.S256,
    redirectUri: "<value>",
    responseType: ResponseType.Code,
    scope: "<value>",
  });

  if (res.statusCode == 200) {
    // handle response
  }
}

run();
```

### Parameters

| Parameter                                                                            | Type                                                                                 | Required                                                                             | Description                                                                          |
| ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ |
| `request`                                                                            | [operations.GetAuthorizeRequest](../../sdk/models/operations/getauthorizerequest.md) | :heavy_check_mark:                                                                   | The request object to use for the request.                                           |
| `config`                                                                             | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                         | :heavy_minus_sign:                                                                   | Available config options for making requests.                                        |


### Response

**Promise<[operations.GetAuthorizeResponse](../../sdk/models/operations/getauthorizeresponse.md)>**
### Errors

| Error Object        | Status Code         | Content Type        |
| ------------------- | ------------------- | ------------------- |
| errors.ErrorT       | 400,401,403,429,500 | application/json    |
| errors.SDKError     | 4xx-5xx             | */*                 |

## postTokenCreate

Request access token with an authorization code

### Example Usage

```typescript
import { SpendeskPublicAPI } from "Spendesk-Public-API";
import { PostTokenCreateGrantType } from "Spendesk-Public-API/dist/sdk/models/operations";

async function run() {
  const sdk = new SpendeskPublicAPI();

  const res = await sdk.oAuth2.postTokenCreate({
    clientId: "<value>",
    clientSecret: "<value>",
    code: "<value>",
    codeVerifier: "<value>",
    grantType: PostTokenCreateGrantType.AuthorizationCode,
    redirectUri: "<value>",
  });

  if (res.statusCode == 200) {
    // handle response
  }
}

run();
```

### Parameters

| Parameter                                                                                          | Type                                                                                               | Required                                                                                           | Description                                                                                        |
| -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- |
| `request`                                                                                          | [operations.PostTokenCreateRequestBody](../../sdk/models/operations/posttokencreaterequestbody.md) | :heavy_check_mark:                                                                                 | The request object to use for the request.                                                         |
| `config`                                                                                           | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                       | :heavy_minus_sign:                                                                                 | Available config options for making requests.                                                      |


### Response

**Promise<[operations.PostTokenCreateResponse](../../sdk/models/operations/posttokencreateresponse.md)>**
### Errors

| Error Object        | Status Code         | Content Type        |
| ------------------- | ------------------- | ------------------- |
| errors.ErrorT       | 400,401,403,429,500 | application/json    |
| errors.SDKError     | 4xx-5xx             | */*                 |

## postTokenRefreshJson

Request a new access token with a refresh token

### Example Usage

```typescript
import { SpendeskPublicAPI } from "Spendesk-Public-API";
import { PostTokenRefreshJsonGrantType } from "Spendesk-Public-API/dist/sdk/models/operations";

async function run() {
  const sdk = new SpendeskPublicAPI();

  const res = await sdk.oAuth2.postTokenRefreshJson({
    grantType: PostTokenRefreshJsonGrantType.RefreshToken,
    refreshToken: "<value>",
  });

  if (res.statusCode == 200) {
    // handle response
  }
}

run();
```

### Parameters

| Parameter                                                                                                    | Type                                                                                                         | Required                                                                                                     | Description                                                                                                  |
| ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                    | [operations.PostTokenRefreshJsonRequestBody](../../sdk/models/operations/posttokenrefreshjsonrequestbody.md) | :heavy_check_mark:                                                                                           | The request object to use for the request.                                                                   |
| `config`                                                                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                 | :heavy_minus_sign:                                                                                           | Available config options for making requests.                                                                |


### Response

**Promise<[operations.PostTokenRefreshJsonResponse](../../sdk/models/operations/posttokenrefreshjsonresponse.md)>**
### Errors

| Error Object        | Status Code         | Content Type        |
| ------------------- | ------------------- | ------------------- |
| errors.ErrorT       | 400,401,403,429,500 | application/json    |
| errors.SDKError     | 4xx-5xx             | */*                 |

## postTokenRefreshRaw

Request a new access token with a refresh token

### Example Usage

```typescript
import { SpendeskPublicAPI } from "Spendesk-Public-API";

async function run() {
  const sdk = new SpendeskPublicAPI();

  const res = await sdk.oAuth2.postTokenRefreshRaw(new TextEncoder().encode("0x9aDA50C8A1"));

  if (res.statusCode == 200) {
    // handle response
  }
}

run();
```

### Parameters

| Parameter                                                    | Type                                                         | Required                                                     | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `request`                                                    | [Uint8Array](../../models/.md)                               | :heavy_check_mark:                                           | The request object to use for the request.                   |
| `config`                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config) | :heavy_minus_sign:                                           | Available config options for making requests.                |


### Response

**Promise<[operations.PostTokenRefreshRawResponse](../../sdk/models/operations/posttokenrefreshrawresponse.md)>**
### Errors

| Error Object        | Status Code         | Content Type        |
| ------------------- | ------------------- | ------------------- |
| errors.ErrorT       | 400,401,403,429,500 | application/json    |
| errors.SDKError     | 4xx-5xx             | */*                 |

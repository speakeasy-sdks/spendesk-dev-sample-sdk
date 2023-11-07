# OAuth2
(*.oAuth2*)

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

(async() => {
  const sdk = new SpendeskPublicAPI({
    clientAuthFlow: "",
  });

  const res = await sdk.oAuth2.getAuthorize({
    clientId: "string",
    codeChallenge: "string",
    codeChallengeMethod: CodeChallengeMethod.S256,
    redirectUri: "string",
    responseType: ResponseType.Code,
    scope: "string",
  });


  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                        | Type                                                                             | Required                                                                         | Description                                                                      |
| -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| `request`                                                                        | [operations.GetAuthorizeRequest](../../models/operations/getauthorizerequest.md) | :heavy_check_mark:                                                               | The request object to use for the request.                                       |
| `config`                                                                         | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                     | :heavy_minus_sign:                                                               | Available config options for making requests.                                    |


### Response

**Promise<[operations.GetAuthorizeResponse](../../models/operations/getauthorizeresponse.md)>**


## postTokenCreate

Request access token with an authorization code

### Example Usage

```typescript
import { SpendeskPublicAPI } from "Spendesk-Public-API";
import { PostTokenCreateGrantType } from "Spendesk-Public-API/dist/sdk/models/operations";

(async() => {
  const sdk = new SpendeskPublicAPI({
    clientAuthFlow: "",
  });

  const res = await sdk.oAuth2.postTokenCreate({
    clientId: "string",
    clientSecret: "string",
    code: "string",
    codeVerifier: "string",
    grantType: PostTokenCreateGrantType.AuthorizationCode,
    redirectUri: "string",
  });


  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                                      | Type                                                                                           | Required                                                                                       | Description                                                                                    |
| ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- |
| `request`                                                                                      | [operations.PostTokenCreateRequestBody](../../models/operations/posttokencreaterequestbody.md) | :heavy_check_mark:                                                                             | The request object to use for the request.                                                     |
| `config`                                                                                       | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                   | :heavy_minus_sign:                                                                             | Available config options for making requests.                                                  |


### Response

**Promise<[operations.PostTokenCreateResponse](../../models/operations/posttokencreateresponse.md)>**


## postTokenRefreshJson

Request a new access token with a refresh token

### Example Usage

```typescript
import { SpendeskPublicAPI } from "Spendesk-Public-API";
import { PostTokenRefreshJsonGrantType } from "Spendesk-Public-API/dist/sdk/models/operations";

(async() => {
  const sdk = new SpendeskPublicAPI({
    clientAuthFlow: "",
  });

  const res = await sdk.oAuth2.postTokenRefreshJson({
    grantType: PostTokenRefreshJsonGrantType.RefreshToken,
    refreshToken: "string",
  });


  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                                                | Type                                                                                                     | Required                                                                                                 | Description                                                                                              |
| -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                | [operations.PostTokenRefreshJsonRequestBody](../../models/operations/posttokenrefreshjsonrequestbody.md) | :heavy_check_mark:                                                                                       | The request object to use for the request.                                                               |
| `config`                                                                                                 | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                             | :heavy_minus_sign:                                                                                       | Available config options for making requests.                                                            |


### Response

**Promise<[operations.PostTokenRefreshJsonResponse](../../models/operations/posttokenrefreshjsonresponse.md)>**


## postTokenRefreshRaw

Request a new access token with a refresh token

### Example Usage

```typescript
import { SpendeskPublicAPI } from "Spendesk-Public-API";

(async() => {
  const sdk = new SpendeskPublicAPI({
    clientAuthFlow: "",
  });

  const res = await sdk.oAuth2.postTokenRefreshRaw(new TextEncoder().encode("0x9aDA50C8A1"));


  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                    | Type                                                         | Required                                                     | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `request`                                                    | [Uint8Array](../../models//.md)                              | :heavy_check_mark:                                           | The request object to use for the request.                   |
| `config`                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config) | :heavy_minus_sign:                                           | Available config options for making requests.                |


### Response

**Promise<[operations.PostTokenRefreshRawResponse](../../models/operations/posttokenrefreshrawresponse.md)>**


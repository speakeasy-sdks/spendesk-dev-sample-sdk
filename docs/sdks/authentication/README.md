# Authentication
(*authentication*)

### Available Operations

* [postAccessToken](#postaccesstoken) - Create access token

## postAccessToken

Create access token

### Example Usage

```typescript
import { SpendeskPublicAPI } from "Spendesk-Public-API";
import { GrantType } from "Spendesk-Public-API/dist/sdk/models/operations";

async function run() {
  const sdk = new SpendeskPublicAPI({
    clientAuthFlow: "Bearer <YOUR_ACCESS_TOKEN_HERE>",
  });

  const res = await sdk.authentication.postAccessToken({
    requestBody: {
      scope: "bank-fee:read payable:read payable-attachment:read settlement:read wallet-load:read wallet-summary:read user:read supplier:read analytical-field:read",
    },
  });

  if (res.statusCode == 200) {
    // handle response
  }
}

run();
```

### Parameters

| Parameter                                                                                  | Type                                                                                       | Required                                                                                   | Description                                                                                |
| ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ |
| `request`                                                                                  | [operations.PostAccessTokenRequest](../../sdk/models/operations/postaccesstokenrequest.md) | :heavy_check_mark:                                                                         | The request object to use for the request.                                                 |
| `config`                                                                                   | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                               | :heavy_minus_sign:                                                                         | Available config options for making requests.                                              |


### Response

**Promise<[operations.PostAccessTokenResponse](../../sdk/models/operations/postaccesstokenresponse.md)>**
### Errors

| Error Object        | Status Code         | Content Type        |
| ------------------- | ------------------- | ------------------- |
| errors.ErrorT       | 400,401,403,429,500 | application/json    |
| errors.SDKError     | 400-600             | */*                 |

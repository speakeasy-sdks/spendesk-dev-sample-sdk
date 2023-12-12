# SuppliersAndUsers
(*suppliersAndUsers*)

### Available Operations

* [getSuppliers](#getsuppliers) - Get suppliers
* [getUsers](#getusers) - Get users of the company

## getSuppliers

Get suppliers

### Example Usage

```typescript
import { SpendeskPublicAPI } from "Spendesk-Public-API";
import { GetSuppliersSecurity } from "Spendesk-Public-API/dist/sdk/models/operations";

async function run() {
  const sdk = new SpendeskPublicAPI();
const operationSecurity: GetSuppliersSecurity = {
  authorizationCodeFlow: "Bearer <YOUR_ACCESS_TOKEN_HERE>",
};

  const res = await sdk.suppliersAndUsers.getSuppliers({}, operationSecurity);

  if (res.statusCode == 200) {
    // handle response
  }
}

run();
```

### Parameters

| Parameter                                                                              | Type                                                                                   | Required                                                                               | Description                                                                            |
| -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- |
| `request`                                                                              | [operations.GetSuppliersRequest](../../sdk/models/operations/getsuppliersrequest.md)   | :heavy_check_mark:                                                                     | The request object to use for the request.                                             |
| `security`                                                                             | [operations.GetSuppliersSecurity](../../sdk/models/operations/getsupplierssecurity.md) | :heavy_check_mark:                                                                     | The security requirements to use for the request.                                      |
| `config`                                                                               | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                           | :heavy_minus_sign:                                                                     | Available config options for making requests.                                          |


### Response

**Promise<[operations.GetSuppliersResponse](../../sdk/models/operations/getsuppliersresponse.md)>**
### Errors

| Error Object            | Status Code             | Content Type            |
| ----------------------- | ----------------------- | ----------------------- |
| errors.ErrorT           | 400,401,403,404,429,500 | application/json        |
| errors.SDKError         | 400-600                 | */*                     |

## getUsers

Get users of the company

### Example Usage

```typescript
import { SpendeskPublicAPI } from "Spendesk-Public-API";
import { GetUsersSecurity } from "Spendesk-Public-API/dist/sdk/models/operations";

async function run() {
  const sdk = new SpendeskPublicAPI();
const operationSecurity: GetUsersSecurity = {
  authorizationCodeFlow: "Bearer <YOUR_ACCESS_TOKEN_HERE>",
};

  const res = await sdk.suppliersAndUsers.getUsers({}, operationSecurity);

  if (res.statusCode == 200) {
    // handle response
  }
}

run();
```

### Parameters

| Parameter                                                                      | Type                                                                           | Required                                                                       | Description                                                                    |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `request`                                                                      | [operations.GetUsersRequest](../../sdk/models/operations/getusersrequest.md)   | :heavy_check_mark:                                                             | The request object to use for the request.                                     |
| `security`                                                                     | [operations.GetUsersSecurity](../../sdk/models/operations/getuserssecurity.md) | :heavy_check_mark:                                                             | The security requirements to use for the request.                              |
| `config`                                                                       | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                   | :heavy_minus_sign:                                                             | Available config options for making requests.                                  |


### Response

**Promise<[operations.GetUsersResponse](../../sdk/models/operations/getusersresponse.md)>**
### Errors

| Error Object        | Status Code         | Content Type        |
| ------------------- | ------------------- | ------------------- |
| errors.ErrorT       | 400,401,403,404,500 | application/json    |
| errors.SDKError     | 400-600             | */*                 |

# SuppliersAndUsers
(*.suppliersAndUsers*)

### Available Operations

* [getSuppliers](#getsuppliers) - Get suppliers
* [getUsers](#getusers) - Get users of the company

## getSuppliers

Get suppliers

### Example Usage

```typescript
import { SpendeskPublicAPI } from "Spendesk-Public-API";
import { GetSuppliersSecurity } from "Spendesk-Public-API/dist/sdk/models/operations";

(async() => {
  const sdk = new SpendeskPublicAPI();
const operationSecurity: GetSuppliersSecurity = {
  authorizationCodeFlow: "",
};

  const res = await sdk.suppliersAndUsers.getSuppliers({}, operationSecurity);


  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                          | Type                                                                               | Required                                                                           | Description                                                                        |
| ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| `request`                                                                          | [operations.GetSuppliersRequest](../../models/operations/getsuppliersrequest.md)   | :heavy_check_mark:                                                                 | The request object to use for the request.                                         |
| `security`                                                                         | [operations.GetSuppliersSecurity](../../models/operations/getsupplierssecurity.md) | :heavy_check_mark:                                                                 | The security requirements to use for the request.                                  |
| `config`                                                                           | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                       | :heavy_minus_sign:                                                                 | Available config options for making requests.                                      |


### Response

**Promise<[operations.GetSuppliersResponse](../../models/operations/getsuppliersresponse.md)>**


## getUsers

Get users of the company

### Example Usage

```typescript
import { SpendeskPublicAPI } from "Spendesk-Public-API";
import { GetUsersSecurity } from "Spendesk-Public-API/dist/sdk/models/operations";

(async() => {
  const sdk = new SpendeskPublicAPI();
const operationSecurity: GetUsersSecurity = {
  authorizationCodeFlow: "",
};

  const res = await sdk.suppliersAndUsers.getUsers({}, operationSecurity);


  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                  | Type                                                                       | Required                                                                   | Description                                                                |
| -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| `request`                                                                  | [operations.GetUsersRequest](../../models/operations/getusersrequest.md)   | :heavy_check_mark:                                                         | The request object to use for the request.                                 |
| `security`                                                                 | [operations.GetUsersSecurity](../../models/operations/getuserssecurity.md) | :heavy_check_mark:                                                         | The security requirements to use for the request.                          |
| `config`                                                                   | [AxiosRequestConfig](https://axios-http.com/docs/req_config)               | :heavy_minus_sign:                                                         | Available config options for making requests.                              |


### Response

**Promise<[operations.GetUsersResponse](../../models/operations/getusersresponse.md)>**


# Accounts
(*accounts*)

### Available Operations

* [getAnalyticalFields](#getanalyticalfields) - Get analytical fields
* [getAnalyticalValues](#getanalyticalvalues) - Get analytical values
* [getCostCenters](#getcostcenters) - Get cost centers
* [getEmployeeAccounts](#getemployeeaccounts) - Get employee accounts
* [getExpenseCategories](#getexpensecategories) - Get expense categories
* [getSupplierAccounts](#getsupplieraccounts) - Get supplier accounts

## getAnalyticalFields

Get analytical fields

### Example Usage

```typescript
import { SpendeskPublicAPI } from "Spendesk-Public-API";
import { GetAnalyticalFieldsSecurity } from "Spendesk-Public-API/dist/sdk/models/operations";

(async() => {
  const sdk = new SpendeskPublicAPI();
const operationSecurity: GetAnalyticalFieldsSecurity = {
  authorizationCodeFlow: "",
};

  const res = await sdk.accounts.getAnalyticalFields({}, operationSecurity);

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                                        | Type                                                                                             | Required                                                                                         | Description                                                                                      |
| ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ |
| `request`                                                                                        | [operations.GetAnalyticalFieldsRequest](../../models/operations/getanalyticalfieldsrequest.md)   | :heavy_check_mark:                                                                               | The request object to use for the request.                                                       |
| `security`                                                                                       | [operations.GetAnalyticalFieldsSecurity](../../models/operations/getanalyticalfieldssecurity.md) | :heavy_check_mark:                                                                               | The security requirements to use for the request.                                                |
| `config`                                                                                         | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                     | :heavy_minus_sign:                                                                               | Available config options for making requests.                                                    |


### Response

**Promise<[operations.GetAnalyticalFieldsResponse](../../models/operations/getanalyticalfieldsresponse.md)>**


## getAnalyticalValues

Get analytical values

### Example Usage

```typescript
import { SpendeskPublicAPI } from "Spendesk-Public-API";
import { GetAnalyticalValuesSecurity } from "Spendesk-Public-API/dist/sdk/models/operations";

(async() => {
  const sdk = new SpendeskPublicAPI();
const operationSecurity: GetAnalyticalValuesSecurity = {
  authorizationCodeFlow: "",
};

  const res = await sdk.accounts.getAnalyticalValues({
    fieldId: "base",
  }, operationSecurity);

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                                        | Type                                                                                             | Required                                                                                         | Description                                                                                      |
| ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ |
| `request`                                                                                        | [operations.GetAnalyticalValuesRequest](../../models/operations/getanalyticalvaluesrequest.md)   | :heavy_check_mark:                                                                               | The request object to use for the request.                                                       |
| `security`                                                                                       | [operations.GetAnalyticalValuesSecurity](../../models/operations/getanalyticalvaluessecurity.md) | :heavy_check_mark:                                                                               | The security requirements to use for the request.                                                |
| `config`                                                                                         | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                     | :heavy_minus_sign:                                                                               | Available config options for making requests.                                                    |


### Response

**Promise<[operations.GetAnalyticalValuesResponse](../../models/operations/getanalyticalvaluesresponse.md)>**


## getCostCenters

Get cost centers

### Example Usage

```typescript
import { SpendeskPublicAPI } from "Spendesk-Public-API";
import { GetCostCentersSecurity } from "Spendesk-Public-API/dist/sdk/models/operations";

(async() => {
  const sdk = new SpendeskPublicAPI();
const operationSecurity: GetCostCentersSecurity = {
  authorizationCodeFlow: "",
};

  const res = await sdk.accounts.getCostCenters({
    ids: [
      "green",
    ],
  }, operationSecurity);

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                              | Type                                                                                   | Required                                                                               | Description                                                                            |
| -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- |
| `request`                                                                              | [operations.GetCostCentersRequest](../../models/operations/getcostcentersrequest.md)   | :heavy_check_mark:                                                                     | The request object to use for the request.                                             |
| `security`                                                                             | [operations.GetCostCentersSecurity](../../models/operations/getcostcenterssecurity.md) | :heavy_check_mark:                                                                     | The security requirements to use for the request.                                      |
| `config`                                                                               | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                           | :heavy_minus_sign:                                                                     | Available config options for making requests.                                          |


### Response

**Promise<[operations.GetCostCentersResponse](../../models/operations/getcostcentersresponse.md)>**


## getEmployeeAccounts

GET employee accounts

### Example Usage

```typescript
import { SpendeskPublicAPI } from "Spendesk-Public-API";
import { GetEmployeeAccountsSecurity } from "Spendesk-Public-API/dist/sdk/models/operations";

(async() => {
  const sdk = new SpendeskPublicAPI();
const operationSecurity: GetEmployeeAccountsSecurity = {
  authorizationCodeFlow: "",
};

  const res = await sdk.accounts.getEmployeeAccounts({
    ids: [
      "Computer",
    ],
    memberIds: [
      "separate",
    ],
  }, operationSecurity);

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                                        | Type                                                                                             | Required                                                                                         | Description                                                                                      |
| ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ |
| `request`                                                                                        | [operations.GetEmployeeAccountsRequest](../../models/operations/getemployeeaccountsrequest.md)   | :heavy_check_mark:                                                                               | The request object to use for the request.                                                       |
| `security`                                                                                       | [operations.GetEmployeeAccountsSecurity](../../models/operations/getemployeeaccountssecurity.md) | :heavy_check_mark:                                                                               | The security requirements to use for the request.                                                |
| `config`                                                                                         | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                     | :heavy_minus_sign:                                                                               | Available config options for making requests.                                                    |


### Response

**Promise<[operations.GetEmployeeAccountsResponse](../../models/operations/getemployeeaccountsresponse.md)>**


## getExpenseCategories

Get expense categories

### Example Usage

```typescript
import { SpendeskPublicAPI } from "Spendesk-Public-API";
import { GetExpenseCategoriesSecurity } from "Spendesk-Public-API/dist/sdk/models/operations";

(async() => {
  const sdk = new SpendeskPublicAPI();
const operationSecurity: GetExpenseCategoriesSecurity = {
  authorizationCodeFlow: "",
};

  const res = await sdk.accounts.getExpenseCategories({
    ids: [
      "salmon",
    ],
  }, operationSecurity);

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                                          | Type                                                                                               | Required                                                                                           | Description                                                                                        |
| -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- |
| `request`                                                                                          | [operations.GetExpenseCategoriesRequest](../../models/operations/getexpensecategoriesrequest.md)   | :heavy_check_mark:                                                                                 | The request object to use for the request.                                                         |
| `security`                                                                                         | [operations.GetExpenseCategoriesSecurity](../../models/operations/getexpensecategoriessecurity.md) | :heavy_check_mark:                                                                                 | The security requirements to use for the request.                                                  |
| `config`                                                                                           | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                       | :heavy_minus_sign:                                                                                 | Available config options for making requests.                                                      |


### Response

**Promise<[operations.GetExpenseCategoriesResponse](../../models/operations/getexpensecategoriesresponse.md)>**


## getSupplierAccounts

GET supplier accounts

### Example Usage

```typescript
import { SpendeskPublicAPI } from "Spendesk-Public-API";
import { GetSupplierAccountsSecurity } from "Spendesk-Public-API/dist/sdk/models/operations";

(async() => {
  const sdk = new SpendeskPublicAPI();
const operationSecurity: GetSupplierAccountsSecurity = {
  authorizationCodeFlow: "",
};

  const res = await sdk.accounts.getSupplierAccounts({
    ids: [
      "mole",
    ],
  }, operationSecurity);

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                                        | Type                                                                                             | Required                                                                                         | Description                                                                                      |
| ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ |
| `request`                                                                                        | [operations.GetSupplierAccountsRequest](../../models/operations/getsupplieraccountsrequest.md)   | :heavy_check_mark:                                                                               | The request object to use for the request.                                                       |
| `security`                                                                                       | [operations.GetSupplierAccountsSecurity](../../models/operations/getsupplieraccountssecurity.md) | :heavy_check_mark:                                                                               | The security requirements to use for the request.                                                |
| `config`                                                                                         | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                     | :heavy_minus_sign:                                                                               | Available config options for making requests.                                                    |


### Response

**Promise<[operations.GetSupplierAccountsResponse](../../models/operations/getsupplieraccountsresponse.md)>**


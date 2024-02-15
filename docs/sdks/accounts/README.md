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

async function run() {
  const sdk = new SpendeskPublicAPI();
const operationSecurity: GetAnalyticalFieldsSecurity = {
  authorizationCodeFlow: "Bearer <YOUR_ACCESS_TOKEN_HERE>",
};

  const res = await sdk.accounts.getAnalyticalFields({}, operationSecurity);

  if (res.statusCode == 200) {
    // handle response
  }
}

run();
```

### Parameters

| Parameter                                                                                            | Type                                                                                                 | Required                                                                                             | Description                                                                                          |
| ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- |
| `request`                                                                                            | [operations.GetAnalyticalFieldsRequest](../../sdk/models/operations/getanalyticalfieldsrequest.md)   | :heavy_check_mark:                                                                                   | The request object to use for the request.                                                           |
| `security`                                                                                           | [operations.GetAnalyticalFieldsSecurity](../../sdk/models/operations/getanalyticalfieldssecurity.md) | :heavy_check_mark:                                                                                   | The security requirements to use for the request.                                                    |
| `config`                                                                                             | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                         | :heavy_minus_sign:                                                                                   | Available config options for making requests.                                                        |


### Response

**Promise<[operations.GetAnalyticalFieldsResponse](../../sdk/models/operations/getanalyticalfieldsresponse.md)>**
### Errors

| Error Object            | Status Code             | Content Type            |
| ----------------------- | ----------------------- | ----------------------- |
| errors.ErrorT           | 400,401,403,404,429,500 | application/json        |
| errors.SDKError         | 4xx-5xx                 | */*                     |

## getAnalyticalValues

Get analytical values

### Example Usage

```typescript
import { SpendeskPublicAPI } from "Spendesk-Public-API";
import { GetAnalyticalValuesSecurity } from "Spendesk-Public-API/dist/sdk/models/operations";

async function run() {
  const sdk = new SpendeskPublicAPI();
const operationSecurity: GetAnalyticalValuesSecurity = {
  authorizationCodeFlow: "Bearer <YOUR_ACCESS_TOKEN_HERE>",
};

  const res = await sdk.accounts.getAnalyticalValues({
    fieldId: "<value>",
  }, operationSecurity);

  if (res.statusCode == 200) {
    // handle response
  }
}

run();
```

### Parameters

| Parameter                                                                                            | Type                                                                                                 | Required                                                                                             | Description                                                                                          |
| ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- |
| `request`                                                                                            | [operations.GetAnalyticalValuesRequest](../../sdk/models/operations/getanalyticalvaluesrequest.md)   | :heavy_check_mark:                                                                                   | The request object to use for the request.                                                           |
| `security`                                                                                           | [operations.GetAnalyticalValuesSecurity](../../sdk/models/operations/getanalyticalvaluessecurity.md) | :heavy_check_mark:                                                                                   | The security requirements to use for the request.                                                    |
| `config`                                                                                             | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                         | :heavy_minus_sign:                                                                                   | Available config options for making requests.                                                        |


### Response

**Promise<[operations.GetAnalyticalValuesResponse](../../sdk/models/operations/getanalyticalvaluesresponse.md)>**
### Errors

| Error Object            | Status Code             | Content Type            |
| ----------------------- | ----------------------- | ----------------------- |
| errors.ErrorT           | 400,401,403,404,429,500 | application/json        |
| errors.SDKError         | 4xx-5xx                 | */*                     |

## getCostCenters

Get cost centers

### Example Usage

```typescript
import { SpendeskPublicAPI } from "Spendesk-Public-API";
import { GetCostCentersSecurity } from "Spendesk-Public-API/dist/sdk/models/operations";

async function run() {
  const sdk = new SpendeskPublicAPI();
const operationSecurity: GetCostCentersSecurity = {
  authorizationCodeFlow: "Bearer <YOUR_ACCESS_TOKEN_HERE>",
};

  const res = await sdk.accounts.getCostCenters({
    ids: [
      "<value>",
    ],
  }, operationSecurity);

  if (res.statusCode == 200) {
    // handle response
  }
}

run();
```

### Parameters

| Parameter                                                                                  | Type                                                                                       | Required                                                                                   | Description                                                                                |
| ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ |
| `request`                                                                                  | [operations.GetCostCentersRequest](../../sdk/models/operations/getcostcentersrequest.md)   | :heavy_check_mark:                                                                         | The request object to use for the request.                                                 |
| `security`                                                                                 | [operations.GetCostCentersSecurity](../../sdk/models/operations/getcostcenterssecurity.md) | :heavy_check_mark:                                                                         | The security requirements to use for the request.                                          |
| `config`                                                                                   | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                               | :heavy_minus_sign:                                                                         | Available config options for making requests.                                              |


### Response

**Promise<[operations.GetCostCentersResponse](../../sdk/models/operations/getcostcentersresponse.md)>**
### Errors

| Error Object            | Status Code             | Content Type            |
| ----------------------- | ----------------------- | ----------------------- |
| errors.ErrorT           | 400,401,403,404,429,500 | application/json        |
| errors.SDKError         | 4xx-5xx                 | */*                     |

## getEmployeeAccounts

GET employee accounts

### Example Usage

```typescript
import { SpendeskPublicAPI } from "Spendesk-Public-API";
import { GetEmployeeAccountsSecurity } from "Spendesk-Public-API/dist/sdk/models/operations";

async function run() {
  const sdk = new SpendeskPublicAPI();
const operationSecurity: GetEmployeeAccountsSecurity = {
  authorizationCodeFlow: "Bearer <YOUR_ACCESS_TOKEN_HERE>",
};

  const res = await sdk.accounts.getEmployeeAccounts({
    ids: [
      "<value>",
    ],
    memberIds: [
      "<value>",
    ],
  }, operationSecurity);

  if (res.statusCode == 200) {
    // handle response
  }
}

run();
```

### Parameters

| Parameter                                                                                            | Type                                                                                                 | Required                                                                                             | Description                                                                                          |
| ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- |
| `request`                                                                                            | [operations.GetEmployeeAccountsRequest](../../sdk/models/operations/getemployeeaccountsrequest.md)   | :heavy_check_mark:                                                                                   | The request object to use for the request.                                                           |
| `security`                                                                                           | [operations.GetEmployeeAccountsSecurity](../../sdk/models/operations/getemployeeaccountssecurity.md) | :heavy_check_mark:                                                                                   | The security requirements to use for the request.                                                    |
| `config`                                                                                             | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                         | :heavy_minus_sign:                                                                                   | Available config options for making requests.                                                        |


### Response

**Promise<[operations.GetEmployeeAccountsResponse](../../sdk/models/operations/getemployeeaccountsresponse.md)>**
### Errors

| Error Object            | Status Code             | Content Type            |
| ----------------------- | ----------------------- | ----------------------- |
| errors.ErrorT           | 400,401,403,404,429,500 | application/json        |
| errors.SDKError         | 4xx-5xx                 | */*                     |

## getExpenseCategories

Get expense categories

### Example Usage

```typescript
import { SpendeskPublicAPI } from "Spendesk-Public-API";
import { GetExpenseCategoriesSecurity } from "Spendesk-Public-API/dist/sdk/models/operations";

async function run() {
  const sdk = new SpendeskPublicAPI();
const operationSecurity: GetExpenseCategoriesSecurity = {
  authorizationCodeFlow: "Bearer <YOUR_ACCESS_TOKEN_HERE>",
};

  const res = await sdk.accounts.getExpenseCategories({
    ids: [
      "<value>",
    ],
  }, operationSecurity);

  if (res.statusCode == 200) {
    // handle response
  }
}

run();
```

### Parameters

| Parameter                                                                                              | Type                                                                                                   | Required                                                                                               | Description                                                                                            |
| ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ |
| `request`                                                                                              | [operations.GetExpenseCategoriesRequest](../../sdk/models/operations/getexpensecategoriesrequest.md)   | :heavy_check_mark:                                                                                     | The request object to use for the request.                                                             |
| `security`                                                                                             | [operations.GetExpenseCategoriesSecurity](../../sdk/models/operations/getexpensecategoriessecurity.md) | :heavy_check_mark:                                                                                     | The security requirements to use for the request.                                                      |
| `config`                                                                                               | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                           | :heavy_minus_sign:                                                                                     | Available config options for making requests.                                                          |


### Response

**Promise<[operations.GetExpenseCategoriesResponse](../../sdk/models/operations/getexpensecategoriesresponse.md)>**
### Errors

| Error Object            | Status Code             | Content Type            |
| ----------------------- | ----------------------- | ----------------------- |
| errors.ErrorT           | 400,401,403,404,429,500 | application/json        |
| errors.SDKError         | 4xx-5xx                 | */*                     |

## getSupplierAccounts

GET supplier accounts

### Example Usage

```typescript
import { SpendeskPublicAPI } from "Spendesk-Public-API";
import { GetSupplierAccountsSecurity } from "Spendesk-Public-API/dist/sdk/models/operations";

async function run() {
  const sdk = new SpendeskPublicAPI();
const operationSecurity: GetSupplierAccountsSecurity = {
  authorizationCodeFlow: "Bearer <YOUR_ACCESS_TOKEN_HERE>",
};

  const res = await sdk.accounts.getSupplierAccounts({
    ids: [
      "<value>",
    ],
  }, operationSecurity);

  if (res.statusCode == 200) {
    // handle response
  }
}

run();
```

### Parameters

| Parameter                                                                                            | Type                                                                                                 | Required                                                                                             | Description                                                                                          |
| ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- |
| `request`                                                                                            | [operations.GetSupplierAccountsRequest](../../sdk/models/operations/getsupplieraccountsrequest.md)   | :heavy_check_mark:                                                                                   | The request object to use for the request.                                                           |
| `security`                                                                                           | [operations.GetSupplierAccountsSecurity](../../sdk/models/operations/getsupplieraccountssecurity.md) | :heavy_check_mark:                                                                                   | The security requirements to use for the request.                                                    |
| `config`                                                                                             | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                         | :heavy_minus_sign:                                                                                   | Available config options for making requests.                                                        |


### Response

**Promise<[operations.GetSupplierAccountsResponse](../../sdk/models/operations/getsupplieraccountsresponse.md)>**
### Errors

| Error Object            | Status Code             | Content Type            |
| ----------------------- | ----------------------- | ----------------------- |
| errors.ErrorT           | 400,401,403,404,429,500 | application/json        |
| errors.SDKError         | 4xx-5xx                 | */*                     |

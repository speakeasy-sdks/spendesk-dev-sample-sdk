# SpendData
(*spendData*)

### Available Operations

* [getBankFees](#getbankfees) - Get bank fees
* [getPayableAttachments](#getpayableattachments) - Get payables attachments
* [getPayables](#getpayables) - Get payables
* [getSettlements](#getsettlements) - Get settlements
* [getWalletLoads](#getwalletloads) - Get wallet loads
* [getWalletSummary](#getwalletsummary) - Get wallet summaries

## getBankFees

Returns a list of bank fees

### Example Usage

```typescript
import { SpendeskPublicAPI } from "Spendesk-Public-API";
import { GetBankFeesSecurity } from "Spendesk-Public-API/dist/sdk/models/operations";

async function run() {
  const sdk = new SpendeskPublicAPI();
const operationSecurity: GetBankFeesSecurity = {
  authorizationCodeFlow: "<YOUR_AUTHORIZATION_CODE_FLOW_HERE>",
};

  const res = await sdk.spendData.getBankFees({
    settlementIds: [
      "<value>",
    ],
    sort: "+createdAt",
  }, operationSecurity);

  if (res.statusCode == 200) {
    // handle response
  }
}

run();
```

### Parameters

| Parameter                                                                            | Type                                                                                 | Required                                                                             | Description                                                                          |
| ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ |
| `request`                                                                            | [operations.GetBankFeesRequest](../../sdk/models/operations/getbankfeesrequest.md)   | :heavy_check_mark:                                                                   | The request object to use for the request.                                           |
| `security`                                                                           | [operations.GetBankFeesSecurity](../../sdk/models/operations/getbankfeessecurity.md) | :heavy_check_mark:                                                                   | The security requirements to use for the request.                                    |
| `config`                                                                             | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                         | :heavy_minus_sign:                                                                   | Available config options for making requests.                                        |


### Response

**Promise<[operations.GetBankFeesResponse](../../sdk/models/operations/getbankfeesresponse.md)>**
### Errors

| Error Object            | Status Code             | Content Type            |
| ----------------------- | ----------------------- | ----------------------- |
| errors.ErrorT           | 400,401,403,404,429,500 | application/json        |
| errors.SDKError         | 4xx-5xx                 | */*                     |

## getPayableAttachments

Get attachments

### Example Usage

```typescript
import { SpendeskPublicAPI } from "Spendesk-Public-API";
import { GetPayableAttachmentsSecurity } from "Spendesk-Public-API/dist/sdk/models/operations";

async function run() {
  const sdk = new SpendeskPublicAPI();
const operationSecurity: GetPayableAttachmentsSecurity = {
  authorizationCodeFlow: "<YOUR_AUTHORIZATION_CODE_FLOW_HERE>",
};

  const res = await sdk.spendData.getPayableAttachments({
    payableId: "<value>",
  }, operationSecurity);

  if (res.statusCode == 200) {
    // handle response
  }
}

run();
```

### Parameters

| Parameter                                                                                                | Type                                                                                                     | Required                                                                                                 | Description                                                                                              |
| -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                | [operations.GetPayableAttachmentsRequest](../../sdk/models/operations/getpayableattachmentsrequest.md)   | :heavy_check_mark:                                                                                       | The request object to use for the request.                                                               |
| `security`                                                                                               | [operations.GetPayableAttachmentsSecurity](../../sdk/models/operations/getpayableattachmentssecurity.md) | :heavy_check_mark:                                                                                       | The security requirements to use for the request.                                                        |
| `config`                                                                                                 | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                             | :heavy_minus_sign:                                                                                       | Available config options for making requests.                                                            |


### Response

**Promise<[operations.GetPayableAttachmentsResponse](../../sdk/models/operations/getpayableattachmentsresponse.md)>**
### Errors

| Error Object            | Status Code             | Content Type            |
| ----------------------- | ----------------------- | ----------------------- |
| errors.ErrorT           | 400,401,403,404,429,500 | application/json        |
| errors.SDKError         | 4xx-5xx                 | */*                     |

## getPayables

GET payables endpoint

### Example Usage

```typescript
import { SpendeskPublicAPI } from "Spendesk-Public-API";
import { BookkeepingStatus, GetPayablesSecurity } from "Spendesk-Public-API/dist/sdk/models/operations";

async function run() {
  const sdk = new SpendeskPublicAPI();
const operationSecurity: GetPayablesSecurity = {
  authorizationCodeFlow: "<YOUR_AUTHORIZATION_CODE_FLOW_HERE>",
};

  const res = await sdk.spendData.getPayables({
    bookkeepingStatus: [
      BookkeepingStatus.Exported,
    ],
    ids: [
      "<value>",
    ],
    sort: "-createdAt,+payableDate",
  }, operationSecurity);

  if (res.statusCode == 200) {
    // handle response
  }
}

run();
```

### Parameters

| Parameter                                                                            | Type                                                                                 | Required                                                                             | Description                                                                          |
| ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ |
| `request`                                                                            | [operations.GetPayablesRequest](../../sdk/models/operations/getpayablesrequest.md)   | :heavy_check_mark:                                                                   | The request object to use for the request.                                           |
| `security`                                                                           | [operations.GetPayablesSecurity](../../sdk/models/operations/getpayablessecurity.md) | :heavy_check_mark:                                                                   | The security requirements to use for the request.                                    |
| `config`                                                                             | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                         | :heavy_minus_sign:                                                                   | Available config options for making requests.                                        |


### Response

**Promise<[operations.GetPayablesResponse](../../sdk/models/operations/getpayablesresponse.md)>**
### Errors

| Error Object            | Status Code             | Content Type            |
| ----------------------- | ----------------------- | ----------------------- |
| errors.ErrorT           | 400,401,403,404,429,500 | application/json        |
| errors.SDKError         | 4xx-5xx                 | */*                     |

## getSettlements

Get settlements

### Example Usage

```typescript
import { SpendeskPublicAPI } from "Spendesk-Public-API";
import { GetSettlementsSecurity, PaidFrom, State } from "Spendesk-Public-API/dist/sdk/models/operations";

async function run() {
  const sdk = new SpendeskPublicAPI();
const operationSecurity: GetSettlementsSecurity = {
  authorizationCodeFlow: "<YOUR_AUTHORIZATION_CODE_FLOW_HERE>",
};

  const res = await sdk.spendData.getSettlements({
    ids: [
      "<value>",
    ],
    paidFrom: [
      PaidFrom.SpendeskAccount,
    ],
    sort: "+createdAt",
    state: [
      State.Exported,
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
| `request`                                                                                  | [operations.GetSettlementsRequest](../../sdk/models/operations/getsettlementsrequest.md)   | :heavy_check_mark:                                                                         | The request object to use for the request.                                                 |
| `security`                                                                                 | [operations.GetSettlementsSecurity](../../sdk/models/operations/getsettlementssecurity.md) | :heavy_check_mark:                                                                         | The security requirements to use for the request.                                          |
| `config`                                                                                   | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                               | :heavy_minus_sign:                                                                         | Available config options for making requests.                                              |


### Response

**Promise<[operations.GetSettlementsResponse](../../sdk/models/operations/getsettlementsresponse.md)>**
### Errors

| Error Object            | Status Code             | Content Type            |
| ----------------------- | ----------------------- | ----------------------- |
| errors.ErrorT           | 400,401,403,404,429,500 | application/json        |
| errors.SDKError         | 4xx-5xx                 | */*                     |

## getWalletLoads

Get wallet loads

### Example Usage

```typescript
import { SpendeskPublicAPI } from "Spendesk-Public-API";
import { GetWalletLoadsSecurity } from "Spendesk-Public-API/dist/sdk/models/operations";

async function run() {
  const sdk = new SpendeskPublicAPI();
const operationSecurity: GetWalletLoadsSecurity = {
  authorizationCodeFlow: "<YOUR_AUTHORIZATION_CODE_FLOW_HERE>",
};

  const res = await sdk.spendData.getWalletLoads({
    sort: "+createdAt",
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
| `request`                                                                                  | [operations.GetWalletLoadsRequest](../../sdk/models/operations/getwalletloadsrequest.md)   | :heavy_check_mark:                                                                         | The request object to use for the request.                                                 |
| `security`                                                                                 | [operations.GetWalletLoadsSecurity](../../sdk/models/operations/getwalletloadssecurity.md) | :heavy_check_mark:                                                                         | The security requirements to use for the request.                                          |
| `config`                                                                                   | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                               | :heavy_minus_sign:                                                                         | Available config options for making requests.                                              |


### Response

**Promise<[operations.GetWalletLoadsResponse](../../sdk/models/operations/getwalletloadsresponse.md)>**
### Errors

| Error Object            | Status Code             | Content Type            |
| ----------------------- | ----------------------- | ----------------------- |
| errors.ErrorT           | 400,401,403,404,429,500 | application/json        |
| errors.SDKError         | 4xx-5xx                 | */*                     |

## getWalletSummary

Get wallet summary

### Example Usage

```typescript
import { SpendeskPublicAPI } from "Spendesk-Public-API";
import { GetWalletSummarySecurity } from "Spendesk-Public-API/dist/sdk/models/operations";

async function run() {
  const sdk = new SpendeskPublicAPI();
const operationSecurity: GetWalletSummarySecurity = {
  authorizationCodeFlow: "<YOUR_AUTHORIZATION_CODE_FLOW_HERE>",
};

  const res = await sdk.spendData.getWalletSummary({
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

| Parameter                                                                                      | Type                                                                                           | Required                                                                                       | Description                                                                                    |
| ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- |
| `request`                                                                                      | [operations.GetWalletSummaryRequest](../../sdk/models/operations/getwalletsummaryrequest.md)   | :heavy_check_mark:                                                                             | The request object to use for the request.                                                     |
| `security`                                                                                     | [operations.GetWalletSummarySecurity](../../sdk/models/operations/getwalletsummarysecurity.md) | :heavy_check_mark:                                                                             | The security requirements to use for the request.                                              |
| `config`                                                                                       | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                   | :heavy_minus_sign:                                                                             | Available config options for making requests.                                                  |


### Response

**Promise<[operations.GetWalletSummaryResponse](../../sdk/models/operations/getwalletsummaryresponse.md)>**
### Errors

| Error Object            | Status Code             | Content Type            |
| ----------------------- | ----------------------- | ----------------------- |
| errors.ErrorT           | 400,401,403,404,429,500 | application/json        |
| errors.SDKError         | 4xx-5xx                 | */*                     |

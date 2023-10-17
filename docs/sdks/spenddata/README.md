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

(async() => {
  const sdk = new SpendeskPublicAPI();
const operationSecurity: GetBankFeesSecurity = {
  authorizationCodeFlow: "",
};

  const res = await sdk.spendData.getBankFees({
    settlementIds: [
      "Arizona",
    ],
    sort: "+createdAt",
  }, operationSecurity);

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                        | Type                                                                             | Required                                                                         | Description                                                                      |
| -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| `request`                                                                        | [operations.GetBankFeesRequest](../../models/operations/getbankfeesrequest.md)   | :heavy_check_mark:                                                               | The request object to use for the request.                                       |
| `security`                                                                       | [operations.GetBankFeesSecurity](../../models/operations/getbankfeessecurity.md) | :heavy_check_mark:                                                               | The security requirements to use for the request.                                |
| `config`                                                                         | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                     | :heavy_minus_sign:                                                               | Available config options for making requests.                                    |


### Response

**Promise<[operations.GetBankFeesResponse](../../models/operations/getbankfeesresponse.md)>**


## getPayableAttachments

Get attachments

### Example Usage

```typescript
import { SpendeskPublicAPI } from "Spendesk-Public-API";
import { GetPayableAttachmentsSecurity } from "Spendesk-Public-API/dist/sdk/models/operations";

(async() => {
  const sdk = new SpendeskPublicAPI();
const operationSecurity: GetPayableAttachmentsSecurity = {
  authorizationCodeFlow: "",
};

  const res = await sdk.spendData.getPayableAttachments({
    payableId: "Bespoke",
  }, operationSecurity);

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                                            | Type                                                                                                 | Required                                                                                             | Description                                                                                          |
| ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- |
| `request`                                                                                            | [operations.GetPayableAttachmentsRequest](../../models/operations/getpayableattachmentsrequest.md)   | :heavy_check_mark:                                                                                   | The request object to use for the request.                                                           |
| `security`                                                                                           | [operations.GetPayableAttachmentsSecurity](../../models/operations/getpayableattachmentssecurity.md) | :heavy_check_mark:                                                                                   | The security requirements to use for the request.                                                    |
| `config`                                                                                             | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                         | :heavy_minus_sign:                                                                                   | Available config options for making requests.                                                        |


### Response

**Promise<[operations.GetPayableAttachmentsResponse](../../models/operations/getpayableattachmentsresponse.md)>**


## getPayables

GET payables endpoint

### Example Usage

```typescript
import { SpendeskPublicAPI } from "Spendesk-Public-API";
import { GetPayablesBookkeepingStatus, GetPayablesSecurity } from "Spendesk-Public-API/dist/sdk/models/operations";

(async() => {
  const sdk = new SpendeskPublicAPI();
const operationSecurity: GetPayablesSecurity = {
  authorizationCodeFlow: "",
};

  const res = await sdk.spendData.getPayables({
    bookkeepingStatus: [
      GetPayablesBookkeepingStatus.Exported,
    ],
    ids: [
      "Programmable",
    ],
    sort: "-createdAt,+payableDate",
  }, operationSecurity);

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                        | Type                                                                             | Required                                                                         | Description                                                                      |
| -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| `request`                                                                        | [operations.GetPayablesRequest](../../models/operations/getpayablesrequest.md)   | :heavy_check_mark:                                                               | The request object to use for the request.                                       |
| `security`                                                                       | [operations.GetPayablesSecurity](../../models/operations/getpayablessecurity.md) | :heavy_check_mark:                                                               | The security requirements to use for the request.                                |
| `config`                                                                         | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                     | :heavy_minus_sign:                                                               | Available config options for making requests.                                    |


### Response

**Promise<[operations.GetPayablesResponse](../../models/operations/getpayablesresponse.md)>**


## getSettlements

Get settlements

### Example Usage

```typescript
import { SpendeskPublicAPI } from "Spendesk-Public-API";
import { GetSettlementsPaidFrom, GetSettlementsSecurity, GetSettlementsState } from "Spendesk-Public-API/dist/sdk/models/operations";

(async() => {
  const sdk = new SpendeskPublicAPI();
const operationSecurity: GetSettlementsSecurity = {
  authorizationCodeFlow: "",
};

  const res = await sdk.spendData.getSettlements({
    ids: [
      "Northwest",
    ],
    paidFrom: [
      GetSettlementsPaidFrom.ExternalAccount,
    ],
    sort: "+createdAt",
    state: [
      GetSettlementsState.FailedToExport,
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
| `request`                                                                              | [operations.GetSettlementsRequest](../../models/operations/getsettlementsrequest.md)   | :heavy_check_mark:                                                                     | The request object to use for the request.                                             |
| `security`                                                                             | [operations.GetSettlementsSecurity](../../models/operations/getsettlementssecurity.md) | :heavy_check_mark:                                                                     | The security requirements to use for the request.                                      |
| `config`                                                                               | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                           | :heavy_minus_sign:                                                                     | Available config options for making requests.                                          |


### Response

**Promise<[operations.GetSettlementsResponse](../../models/operations/getsettlementsresponse.md)>**


## getWalletLoads

Get wallet loads

### Example Usage

```typescript
import { SpendeskPublicAPI } from "Spendesk-Public-API";
import { GetWalletLoadsSecurity } from "Spendesk-Public-API/dist/sdk/models/operations";

(async() => {
  const sdk = new SpendeskPublicAPI();
const operationSecurity: GetWalletLoadsSecurity = {
  authorizationCodeFlow: "",
};

  const res = await sdk.spendData.getWalletLoads({
    sort: "+createdAt",
  }, operationSecurity);

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                              | Type                                                                                   | Required                                                                               | Description                                                                            |
| -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- |
| `request`                                                                              | [operations.GetWalletLoadsRequest](../../models/operations/getwalletloadsrequest.md)   | :heavy_check_mark:                                                                     | The request object to use for the request.                                             |
| `security`                                                                             | [operations.GetWalletLoadsSecurity](../../models/operations/getwalletloadssecurity.md) | :heavy_check_mark:                                                                     | The security requirements to use for the request.                                      |
| `config`                                                                               | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                           | :heavy_minus_sign:                                                                     | Available config options for making requests.                                          |


### Response

**Promise<[operations.GetWalletLoadsResponse](../../models/operations/getwalletloadsresponse.md)>**


## getWalletSummary

Get wallet summary

### Example Usage

```typescript
import { SpendeskPublicAPI } from "Spendesk-Public-API";
import { GetWalletSummarySecurity } from "Spendesk-Public-API/dist/sdk/models/operations";

(async() => {
  const sdk = new SpendeskPublicAPI();
const operationSecurity: GetWalletSummarySecurity = {
  authorizationCodeFlow: "",
};

  const res = await sdk.spendData.getWalletSummary({
    ids: [
      "navigating",
    ],
  }, operationSecurity);

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                                  | Type                                                                                       | Required                                                                                   | Description                                                                                |
| ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ |
| `request`                                                                                  | [operations.GetWalletSummaryRequest](../../models/operations/getwalletsummaryrequest.md)   | :heavy_check_mark:                                                                         | The request object to use for the request.                                                 |
| `security`                                                                                 | [operations.GetWalletSummarySecurity](../../models/operations/getwalletsummarysecurity.md) | :heavy_check_mark:                                                                         | The security requirements to use for the request.                                          |
| `config`                                                                                   | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                               | :heavy_minus_sign:                                                                         | Available config options for making requests.                                              |


### Response

**Promise<[operations.GetWalletSummaryResponse](../../models/operations/getwalletsummaryresponse.md)>**


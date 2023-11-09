# Spendesk Typescript SDK

<div align="left">
    <a href="https://speakeasyapi.dev/"><img src="https://custom-icon-badges.demolab.com/badge/-Built%20By%20Speakeasy-212015?style=for-the-badge&logoColor=FBE331&logo=speakeasy&labelColor=545454" /></a>
    <a href="https://github.com/speakeasy-sdks/spendesk-dev-sample-sdk.git/actions"><img src="https://img.shields.io/github/actions/workflow/status/speakeasy-sdks/spendesk-dev-sample-sdk/speakeasy_sdk_generation.yml?style=for-the-badge" /></a>
    
</div>

<!-- Start SDK Installation -->
## SDK Installation

### NPM

```bash
npm add https://github.com/speakeasy-sdks/spendesk-dev-sample-sdk
```

### Yarn

```bash
yarn add https://github.com/speakeasy-sdks/spendesk-dev-sample-sdk
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```typescript
import { SpendeskPublicAPI } from "Spendesk-Public-API";
import { GetAnalyticalFieldsSecurity } from "Spendesk-Public-API/dist/sdk/models/operations";

(async () => {
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
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### [accounts](docs/sdks/accounts/README.md)

* [getAnalyticalFields](docs/sdks/accounts/README.md#getanalyticalfields) - Get analytical fields
* [getAnalyticalValues](docs/sdks/accounts/README.md#getanalyticalvalues) - Get analytical values
* [getCostCenters](docs/sdks/accounts/README.md#getcostcenters) - Get cost centers
* [getEmployeeAccounts](docs/sdks/accounts/README.md#getemployeeaccounts) - Get employee accounts
* [getExpenseCategories](docs/sdks/accounts/README.md#getexpensecategories) - Get expense categories
* [getSupplierAccounts](docs/sdks/accounts/README.md#getsupplieraccounts) - Get supplier accounts

### [authentication](docs/sdks/authentication/README.md)

* [postAccessToken](docs/sdks/authentication/README.md#postaccesstoken) - Create access token

### [spendData](docs/sdks/spenddata/README.md)

* [getBankFees](docs/sdks/spenddata/README.md#getbankfees) - Get bank fees
* [getPayableAttachments](docs/sdks/spenddata/README.md#getpayableattachments) - Get payables attachments
* [getPayables](docs/sdks/spenddata/README.md#getpayables) - Get payables
* [getSettlements](docs/sdks/spenddata/README.md#getsettlements) - Get settlements
* [getWalletLoads](docs/sdks/spenddata/README.md#getwalletloads) - Get wallet loads
* [getWalletSummary](docs/sdks/spenddata/README.md#getwalletsummary) - Get wallet summaries

### [oAuth2](docs/sdks/oauth2/README.md)

* [getAuthorize](docs/sdks/oauth2/README.md#getauthorize) - Request authorization
* [postTokenCreate](docs/sdks/oauth2/README.md#posttokencreate) - Request access token
* [postTokenRefreshJson](docs/sdks/oauth2/README.md#posttokenrefreshjson) - Refresh access token
* [postTokenRefreshRaw](docs/sdks/oauth2/README.md#posttokenrefreshraw) - Refresh access token

### [suppliersAndUsers](docs/sdks/suppliersandusers/README.md)

* [getSuppliers](docs/sdks/suppliersandusers/README.md#getsuppliers) - Get suppliers
* [getUsers](docs/sdks/suppliersandusers/README.md#getusers) - Get users of the company
<!-- End SDK Available Operations -->

<!-- Start Dev Containers -->

<!-- End Dev Containers -->



<!-- Start Error Handling -->
# Error Handling

Handling errors in this SDK should largely match your expectations.  All operations return a response object or throw an error.  If Error objects are specified in your OpenAPI Spec, the SDK will throw the appropriate Error type.

| Error Object            | Status Code             | Content Type            |
| ----------------------- | ----------------------- | ----------------------- |
| errors.ErrorT           | 400,401,403,404,429,500 | application/json        |
| errors.SDKError         | 400-600                 | */*                     |


## Example

```typescript
import { SpendeskPublicAPI } from "Spendesk-Public-API";
import { GetAnalyticalFieldsSecurity } from "Spendesk-Public-API/dist/sdk/models/operations";

(async() => {
  const sdk = new SpendeskPublicAPI();
const operationSecurity: GetAnalyticalFieldsSecurity = {
  authorizationCodeFlow: "",
};

  
  let res;
  try {
    res = await sdk.accounts.getAnalyticalFields({}, operationSecurity);
  } catch (e) { 
    if (e instanceof errors.ErrorT) {
      console.error(e) // handle exception 
    
  }

  if (res.statusCode == 200) {
    // handle response
  }
})();
```
<!-- End Error Handling -->



<!-- Start Server Selection -->
# Server Selection

## Select Server by Index

You can override the default server globally by passing a server index to the `serverIdx: number` optional parameter when initializing the SDK client instance. The selected server will then be used as the default on the operations that use it. This table lists the indexes associated with the available servers:

| # | Server | Variables |
| - | ------ | --------- |
| 0 | `https://sandbox-public-api.spendesk.com` | None |
| 1 | `https://public-api.spendesk.com` | None |

For example:

```typescript
import { SpendeskPublicAPI } from "Spendesk-Public-API";
import { GetAnalyticalFieldsSecurity } from "Spendesk-Public-API/dist/sdk/models/operations";

(async () => {
    const sdk = new SpendeskPublicAPI({
        serverIdx: 1,
    });
    const operationSecurity: GetAnalyticalFieldsSecurity = {
        authorizationCodeFlow: "",
    };

    const res = await sdk.accounts.getAnalyticalFields({}, operationSecurity);

    if (res.statusCode == 200) {
        // handle response
    }
})();

```


## Override Server URL Per-Client

The default server can also be overridden globally by passing a URL to the `serverURL: str` optional parameter when initializing the SDK client instance. For example:

```typescript
import { SpendeskPublicAPI } from "Spendesk-Public-API";
import { GetAnalyticalFieldsSecurity } from "Spendesk-Public-API/dist/sdk/models/operations";

(async () => {
    const sdk = new SpendeskPublicAPI({
        serverURL: "https://sandbox-public-api.spendesk.com",
    });
    const operationSecurity: GetAnalyticalFieldsSecurity = {
        authorizationCodeFlow: "",
    };

    const res = await sdk.accounts.getAnalyticalFields({}, operationSecurity);

    if (res.statusCode == 200) {
        // handle response
    }
})();

```
<!-- End Server Selection -->



<!-- Start Custom HTTP Client -->
# Custom HTTP Client

The Typescript SDK makes API calls using the (axios)[https://axios-http.com/docs/intro] HTTP library.  In order to provide a convenient way to configure timeouts, cookies, proxies, custom headers, and other low-level configuration, you can initialize the SDK client with a custom `AxiosInstance` object.


For example, you could specify a header for every request that your sdk makes as follows:

```typescript
from Spendesk-Public-API import SpendeskPublicAPI;
import axios;

const httpClient = axios.create({
    headers: {'x-custom-header': 'someValue'}
})


const sdk = new SpendeskPublicAPI({defaultClient: httpClient});
```
<!-- End Custom HTTP Client -->



<!-- Start Authentication -->
# Authentication

## Per-Client Security Schemes

This SDK supports the following security scheme globally:

| Name             | Type             | Scheme           |
| ---------------- | ---------------- | ---------------- |
| `clientAuthFlow` | oauth2           | OAuth2 token     |

To authenticate with the API the `clientAuthFlow` parameter must be set when initializing the SDK client instance. For example:

```typescript
import { SpendeskPublicAPI } from "Spendesk-Public-API";
import { GetAnalyticalFieldsSecurity } from "Spendesk-Public-API/dist/sdk/models/operations";

(async () => {
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

## Per-Operation Security Schemes

Some operations in this SDK require the security scheme to be specified at the request level. For example:

```typescript
import { SpendeskPublicAPI } from "Spendesk-Public-API";
import { GetAnalyticalFieldsSecurity } from "Spendesk-Public-API/dist/sdk/models/operations";

(async () => {
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
<!-- End Authentication -->

<!-- Placeholder for Future Speakeasy SDK Sections -->

# Development

## Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

## Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release!

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)

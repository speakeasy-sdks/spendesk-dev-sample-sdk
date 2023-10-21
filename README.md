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

### [oAuth2](docs/sdks/oauth2/README.md)

* [getAuthorize](docs/sdks/oauth2/README.md#getauthorize) - Request authorization
* [postTokenCreate](docs/sdks/oauth2/README.md#posttokencreate) - Request access token
* [postTokenRefreshJson](docs/sdks/oauth2/README.md#posttokenrefreshjson) - Refresh access token
* [postTokenRefreshRaw](docs/sdks/oauth2/README.md#posttokenrefreshraw) - Refresh access token

### [spendData](docs/sdks/spenddata/README.md)

* [getBankFees](docs/sdks/spenddata/README.md#getbankfees) - Get bank fees
* [getPayableAttachments](docs/sdks/spenddata/README.md#getpayableattachments) - Get payables attachments
* [getPayables](docs/sdks/spenddata/README.md#getpayables) - Get payables
* [getSettlements](docs/sdks/spenddata/README.md#getsettlements) - Get settlements
* [getWalletLoads](docs/sdks/spenddata/README.md#getwalletloads) - Get wallet loads
* [getWalletSummary](docs/sdks/spenddata/README.md#getwalletsummary) - Get wallet summaries

### [suppliersAndUsers](docs/sdks/suppliersandusers/README.md)

* [getSuppliers](docs/sdks/suppliersandusers/README.md#getsuppliers) - Get suppliers
* [getUsers](docs/sdks/suppliersandusers/README.md#getusers) - Get users of the company
<!-- End SDK Available Operations -->

<!-- Start Dev Containers -->

<!-- End Dev Containers -->

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

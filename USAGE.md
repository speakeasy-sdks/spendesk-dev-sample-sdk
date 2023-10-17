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
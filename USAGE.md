<!-- Start SDK Example Usage [usage] -->
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
<!-- End SDK Example Usage [usage] -->
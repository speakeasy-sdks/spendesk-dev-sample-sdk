# Settlement


## Fields

| Field                                                                                                                                                                                         | Type                                                                                                                                                                                          | Required                                                                                                                                                                                      | Description                                                                                                                                                                                   | Example                                                                                                                                                                                       |
| --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `amount`                                                                                                                                                                                      | *number*                                                                                                                                                                                      | :heavy_check_mark:                                                                                                                                                                            | If the payment was made in a foreign currency, this amount is in the foreign currency.<br/>Expressed in smallest units of the currency (e.g. cents for EUR and USD, but yen for JPY).         | -1500                                                                                                                                                                                         |
| `billingAmount`                                                                                                                                                                               | *number*                                                                                                                                                                                      | :heavy_check_mark:                                                                                                                                                                            | Amount is in the account's currency.<br/>Expressed in smallest units of the currency (e.g. cents for EUR and USD, but yen for JPY).                                                           | 851                                                                                                                                                                                           |
| `billingCurrency`                                                                                                                                                                             | *string*                                                                                                                                                                                      | :heavy_check_mark:                                                                                                                                                                            | Amount is in the account's currency.<br/>Three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html).                                                                  | EUR                                                                                                                                                                                           |
| `billingExchangeRate`                                                                                                                                                                         | *number*                                                                                                                                                                                      | :heavy_check_mark:                                                                                                                                                                            | If the payment was made in a foreign currency, this is the exchange rate between the two currencies at the time of the payment.                                                               | -0.5673333333                                                                                                                                                                                 |
| `clearedAt`                                                                                                                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                                                                                                 | :heavy_check_mark:                                                                                                                                                                            | Date-time that the transaction cleared. [ISO 8601 date format](https://www.iso.org/iso-8601-date-and-time-format.html)                                                                        |                                                                                                                                                                                               |
| `createdAt`                                                                                                                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                                                                                                 | :heavy_check_mark:                                                                                                                                                                            | The date-time the settlement got created in the system                                                                                                                                        |                                                                                                                                                                                               |
| `currency`                                                                                                                                                                                    | *string*                                                                                                                                                                                      | :heavy_check_mark:                                                                                                                                                                            | If the payment was made in a foreign currency, this is the foreign currency.<br/>Three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html).                          | USD                                                                                                                                                                                           |
| `exportedAt`                                                                                                                                                                                  | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                                                                                                 | :heavy_check_mark:                                                                                                                                                                            | Date-time settlement was exported at                                                                                                                                                          |                                                                                                                                                                                               |
| `id`                                                                                                                                                                                          | *string*                                                                                                                                                                                      | :heavy_check_mark:                                                                                                                                                                            | Settlement Id                                                                                                                                                                                 |                                                                                                                                                                                               |
| `links`                                                                                                                                                                                       | [SettlementLinks](../../models/shared/settlementlinks.md)[]                                                                                                                                   | :heavy_check_mark:                                                                                                                                                                            | N/A                                                                                                                                                                                           |                                                                                                                                                                                               |
| `medium`                                                                                                                                                                                      | [SettlementMedium](../../models/shared/settlementmedium.md)                                                                                                                                   | :heavy_check_mark:                                                                                                                                                                            | Medium: `card` or `wireTransfer`                                                                                                                                                              |                                                                                                                                                                                               |
| `paidFrom`                                                                                                                                                                                    | [SettlementPaidFrom](../../models/shared/settlementpaidfrom.md)                                                                                                                               | :heavy_check_mark:                                                                                                                                                                            | The bank account the wire transfer is emitted from (Spendesk or external).<br/>For card payments the value is always `spendeskAccount`                                                        |                                                                                                                                                                                               |
| `state`                                                                                                                                                                                       | [SettlementState](../../models/shared/settlementstate.md)                                                                                                                                     | :heavy_check_mark:                                                                                                                                                                            | Status of the settlement:<br/><br/>State \| Description <br/>---------\|----------<br/> `created` \| Created but not exported <br/> `exported` \| Exported <br/> `failedToExport` \| Tried to export but failed <br/> |                                                                                                                                                                                               |
| `transactionDescription`                                                                                                                                                                      | *string*                                                                                                                                                                                      | :heavy_check_mark:                                                                                                                                                                            | Description of transaction                                                                                                                                                                    | Auth: PAPERTRAIL INC.,PORTLAND,USA                                                                                                                                                            |
| `type`                                                                                                                                                                                        | [SettlementType](../../models/shared/settlementtype.md)                                                                                                                                       | :heavy_check_mark:                                                                                                                                                                            | Type \| Description<br/>---------\|----------<br/> `payment` \|  A payment<br/> `refund` \|  A refund<br/> `advance` \| A cash advance<br/>  `cashReturn` \| A cash return<br/>  `chargeBack` \|  A card disputes/chargeback |                                                                                                                                                                                               |
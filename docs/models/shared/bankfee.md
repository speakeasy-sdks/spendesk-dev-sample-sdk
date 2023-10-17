# BankFee


## Fields

| Field                                                                                                                                     | Type                                                                                                                                      | Required                                                                                                                                  | Description                                                                                                                               |
| ----------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------- |
| `amount`                                                                                                                                  | *number*                                                                                                                                  | :heavy_check_mark:                                                                                                                        | Amount of the fee, always in wallet currency.<br/>Expressed in smallest units of the currency (e.g. cents for EUR and USD, but yen for JPY). |
| `chargedAt`                                                                                                                               | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                                             | :heavy_check_mark:                                                                                                                        | Date and time the bank fee was incurred                                                                                                   |
| `createdAt`                                                                                                                               | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                                             | :heavy_check_mark:                                                                                                                        | The date-time the bank fee got created in the system                                                                                      |
| `currency`                                                                                                                                | *string*                                                                                                                                  | :heavy_check_mark:                                                                                                                        | Three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html).                                                       |
| `id`                                                                                                                                      | *string*                                                                                                                                  | :heavy_check_mark:                                                                                                                        | ID of bank fee                                                                                                                            |
| `kind`                                                                                                                                    | [BankFeeKind](../../models/shared/bankfeekind.md)                                                                                         | :heavy_check_mark:                                                                                                                        | `fxFee` refers to fees incurred by a payment in foreign currency,<br/> and `atmFee` refers to fees incurred at an atm, e.g. to withdraw cash. |
| `settlementId`                                                                                                                            | *string*                                                                                                                                  | :heavy_check_mark:                                                                                                                        | The id of the Settlement related to this bank fee.                                                                                        |
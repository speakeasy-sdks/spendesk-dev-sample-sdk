# GetSettlementsRequest


## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   | Example                                                                                       |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `exportedAfter`                                                                               | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_minus_sign:                                                                            | The date and time the settlement first got exported to accounting                             |                                                                                               |
| `ids`                                                                                         | *string*[]                                                                                    | :heavy_minus_sign:                                                                            | An array of settlement IDs                                                                    |                                                                                               |
| `page`                                                                                        | *number*                                                                                      | :heavy_minus_sign:                                                                            | Page number                                                                                   |                                                                                               |
| `pageSize`                                                                                    | *number*                                                                                      | :heavy_minus_sign:                                                                            | Page size                                                                                     |                                                                                               |
| `paidFrom`                                                                                    | [GetSettlementsPaidFrom](../../models/operations/getsettlementspaidfrom.md)[]                 | :heavy_minus_sign:                                                                            | Bank account used for the settlement                                                          |                                                                                               |
| `sort`                                                                                        | *string*                                                                                      | :heavy_minus_sign:                                                                            | Sort by creation date                                                                         | +createdAt                                                                                    |
| `state`                                                                                       | [GetSettlementsState](../../models/operations/getsettlementsstate.md)[]                       | :heavy_minus_sign:                                                                            | Status of settlements to be returned                                                          |                                                                                               |
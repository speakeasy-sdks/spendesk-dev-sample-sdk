# Counterparty

A payable is due to either a supplier or an employee


## Fields

| Field                                                          | Type                                                           | Required                                                       | Description                                                    |
| -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- |
| `accountPayable`                                               | [shared.AccountPayable](../../models/shared/accountpayable.md) | :heavy_check_mark:                                             | N/A                                                            |
| `id`                                                           | *string*                                                       | :heavy_check_mark:                                             | ID of counterparty                                             |
| `name`                                                         | *string*                                                       | :heavy_check_mark:                                             | Supplier or Employee name                                      |
| `type`                                                         | [shared.PayableType](../../models/shared/payabletype.md)       | :heavy_check_mark:                                             | Type `employee` or `supplier`                                  |
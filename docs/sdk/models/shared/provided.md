# Provided

Only `null` when no documentary evidence or justification has been provided


## Fields

| Field                                                                         | Type                                                                          | Required                                                                      | Description                                                                   |
| ----------------------------------------------------------------------------- | ----------------------------------------------------------------------------- | ----------------------------------------------------------------------------- | ----------------------------------------------------------------------------- |
| `notValidReason`                                                              | *string*                                                                      | :heavy_check_mark:                                                            | The reason why documentary evidence has been declared invalid                 |
| `type`                                                                        | [shared.PayableSchemasType](../../../sdk/models/shared/payableschemastype.md) | :heavy_check_mark:                                                            | The type of documentary evidence provided                                     |
| `valid`                                                                       | *boolean*                                                                     | :heavy_check_mark:                                                            | `false` if documentary evidence has been declared invalid by the accoutant    |
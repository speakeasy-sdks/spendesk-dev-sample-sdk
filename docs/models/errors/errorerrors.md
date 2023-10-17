# ErrorErrors


## Fields

| Field                                                                         | Type                                                                          | Required                                                                      | Description                                                                   |
| ----------------------------------------------------------------------------- | ----------------------------------------------------------------------------- | ----------------------------------------------------------------------------- | ----------------------------------------------------------------------------- |
| `code`                                                                        | *string*                                                                      | :heavy_check_mark:                                                            | Readable error message that could be displayed in a UI                        |
| `detail`                                                                      | *string*                                                                      | :heavy_check_mark:                                                            | Further description provided to give wider context into the error             |
| `source`                                                                      | *string*                                                                      | :heavy_minus_sign:                                                            | Optional: Known source of error such as missing or invalid field in a request |
# EmployeeAccount


## Fields

| Field                                                         | Type                                                          | Required                                                      | Description                                                   |
| ------------------------------------------------------------- | ------------------------------------------------------------- | ------------------------------------------------------------- | ------------------------------------------------------------- |
| `auxiliaryAccountCode`                                        | *string*                                                      | :heavy_check_mark:                                            | Auxiliary account code (if exists)                            |
| `defaultFor`                                                  | [shared.DefaultFor](../../../sdk/models/shared/defaultfor.md) | :heavy_check_mark:                                            | An account can be set as default for all employees            |
| `description`                                                 | *string*                                                      | :heavy_check_mark:                                            | Account description (if exists)                               |
| `generalAccountCode`                                          | *string*                                                      | :heavy_check_mark:                                            | Account code                                                  |
| `id`                                                          | *string*                                                      | :heavy_check_mark:                                            | Account ID                                                    |
| `memberIds`                                                   | *string*[]                                                    | :heavy_check_mark:                                            | The ids of the users assigned to the account                  |
| `name`                                                        | *string*                                                      | :heavy_check_mark:                                            | Account name (if exists)                                      |
# BookkeepingStatus

Status of the payable in the Spendesk flow. 

| Status | Description |
| ---|--- |
| `created` | Payable (approved expense) has been created |
| `prepared` | Payable has been prepared (enriched with accounting information) by an accountant |
| `exported` | Payable has been exported to accounting |
| `failedToExport` | Payable has failed to export to accounting via a native Spendesk integrations |
| `exportedManually` | Payable has been marked as exported manually by the accountant |
| `unprepared` | Payable has been sent back to Bookkeep>Prepare |



## Values

| Name               | Value              |
| ------------------ | ------------------ |
| `Created`          | created            |
| `Prepared`         | prepared           |
| `Exported`         | exported           |
| `FailedToExport`   | failedToExport     |
| `ExportedManually` | exportedManually   |
| `Unprepared`       | unprepared         |
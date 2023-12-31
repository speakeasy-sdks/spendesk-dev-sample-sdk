/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { RFCDate } from "../../../sdk/types";
import { AnalyticalValue } from "./analyticalvalue";
import { Expose, Transform, Type } from "class-transformer";

export class PayableSettlement extends SpeakeasyBase {
    /**
     * Settlement Id
     */
    @SpeakeasyMetadata()
    @Expose({ name: "id" })
    id: string;

    /**
     * Link to settlement endpoint with the relevant `ids` query parameter
     */
    @SpeakeasyMetadata()
    @Expose({ name: "link" })
    link: string;
}

export class Allocations extends SpeakeasyBase {
    /**
     * Payable amount allocated to settlements and bank fees.
     *
     * @remarks
     * Expressed in smallest units of the currency (e.g. cents for EUR and USD, but yen for JPY).
     */
    @SpeakeasyMetadata()
    @Expose({ name: "allocatedAmount" })
    allocatedAmount: number;

    @SpeakeasyMetadata()
    @Expose({ name: "settlement" })
    @Type(() => PayableSettlement)
    settlement: PayableSettlement;
}

/**
 * Status of the payable in the Spendesk flow.
 *
 * @remarks
 *
 * | Status | Description |
 * | ---|--- |
 * | `created` | Payable (approved expense) has been created |
 * | `prepared` | Payable has been prepared (enriched with accounting information) by an accountant |
 * | `exported` | Payable has been exported to accounting |
 * | `failedToExport` | Payable has failed to export to accounting via a native Spendesk integrations |
 * | `exportedManually` | Payable has been marked as exported manually by the accountant |
 * | `unprepared` | Payable has been sent back to Bookkeep>Prepare |
 *
 */
export enum BookkeepingStatus {
    Created = "created",
    Prepared = "prepared",
    Exported = "exported",
    FailedToExport = "failedToExport",
    ExportedManually = "exportedManually",
    Unprepared = "unprepared",
}

export class AccountPayable extends SpeakeasyBase {
    /**
     * Auxiliary code of the account payable, if available
     */
    @SpeakeasyMetadata()
    @Expose({ name: "auxiliaryAccountCode" })
    auxiliaryAccountCode: string;

    /**
     * Accounting code of the account payable
     */
    @SpeakeasyMetadata()
    @Expose({ name: "generalAccountCode" })
    generalAccountCode: string;

    /**
     * Internal Spendesk ID of the account payable
     */
    @SpeakeasyMetadata()
    @Expose({ name: "id" })
    id: string;
}

/**
 * Type `employee` or `supplier`
 */
export enum PayableType {
    Supplier = "supplier",
    Employee = "employee",
}

/**
 * A payable is due to either a supplier or an employee
 */
export class Counterparty extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "accountPayable" })
    @Type(() => AccountPayable)
    accountPayable: AccountPayable;

    /**
     * ID of counterparty
     */
    @SpeakeasyMetadata()
    @Expose({ name: "id" })
    id: string;

    /**
     * Supplier or Employee name
     */
    @SpeakeasyMetadata()
    @Expose({ name: "name" })
    name: string;

    /**
     * Type `employee` or `supplier`
     */
    @SpeakeasyMetadata()
    @Expose({ name: "type" })
    type: PayableType;
}

/**
 * Not `null` only when no documentary evidence or justification has been provided
 */
export class NotProvided extends SpeakeasyBase {
    /**
     * Reason selected for not providing documentary evidence
     *
     * @remarks
     *
     */
    @SpeakeasyMetadata()
    @Expose({ name: "reason" })
    reason: string;

    /**
     * Marked as unable to provide documentary evidence: manually or automatically
     *
     * @remarks
     *
     */
    @SpeakeasyMetadata()
    @Expose({ name: "reportMethod" })
    reportMethod: string;

    /**
     * The user ID that reported as unable to provide documentary evidence
     *
     * @remarks
     *
     */
    @SpeakeasyMetadata()
    @Expose({ name: "reporterId" })
    reporterId: string;
}

/**
 * The type of documentary evidence provided
 */
export enum PayableSchemasType {
    CreditNote = "creditNote",
    Invoice = "invoice",
    MileageEntry = "mileageEntry",
    PerDiemEntry = "perDiemEntry",
    DeclarationOfMissingInvoice = "declarationOfMissingInvoice",
    DeclarationOfMissingCreditNote = "declarationOfMissingCreditNote",
}

/**
 * Only `null` when no documentary evidence or justification has been provided
 */
export class Provided extends SpeakeasyBase {
    /**
     * The reason why documentary evidence has been declared invalid
     */
    @SpeakeasyMetadata()
    @Expose({ name: "notValidReason" })
    notValidReason: string;

    /**
     * The type of documentary evidence provided
     */
    @SpeakeasyMetadata()
    @Expose({ name: "type" })
    type: PayableSchemasType;

    /**
     * `false` if documentary evidence has been declared invalid by the accoutant
     */
    @SpeakeasyMetadata()
    @Expose({ name: "valid" })
    valid: boolean;
}

export class DocumentaryEvidence extends SpeakeasyBase {
    /**
     * Not `null` only when no documentary evidence or justification has been provided
     */
    @SpeakeasyMetadata()
    @Expose({ name: "notProvided" })
    @Type(() => NotProvided)
    notProvided: NotProvided;

    /**
     * Only `null` when no documentary evidence or justification has been provided
     */
    @SpeakeasyMetadata()
    @Expose({ name: "provided" })
    @Type(() => Provided)
    provided: Provided;
}

/**
 * Expense account this line item is allocated to
 */
export class ExpenseAccount extends SpeakeasyBase {
    /**
     * Expense account accounting code
     */
    @SpeakeasyMetadata()
    @Expose({ name: "code" })
    code: string;

    /**
     * Expense account description
     */
    @SpeakeasyMetadata()
    @Expose({ name: "description" })
    description: string;

    /**
     * Expense account Spendesk internal ID
     */
    @SpeakeasyMetadata()
    @Expose({ name: "id" })
    id: string;
}

/**
 * Financial amounts of the line item
 */
export class Financial extends SpeakeasyBase {
    /**
     * Gross amount of the line item (`netAmount` + `vatAmount`)
     *
     * @remarks
     * Expressed in smallest units of the currency (e.g. cents for EUR and USD, but yen for JPY).
     */
    @SpeakeasyMetadata()
    @Expose({ name: "grossAmount" })
    grossAmount: number;

    /**
     * Net amount or the line iteam (`grossAmount` - `vatAmount`)
     *
     * @remarks
     * Expressed in smallest units of the currency (e.g. cents for EUR and USD, but yen for JPY).
     */
    @SpeakeasyMetadata()
    @Expose({ name: "netAmount" })
    netAmount: number;

    /**
     * Only exists when `vatAmount` was manually adjusted by the accountant.
     *
     * @remarks
     * Is calculated as `vatAmount` - (`netAmount` * `vatAccount.rate`) and can be negative or positive.
     * Expressed in smallest units of the currency (e.g. cents for EUR and USD, but yen for JPY).
     */
    @SpeakeasyMetadata()
    @Expose({ name: "vatAdjustementAmount" })
    vatAdjustementAmount: number;

    /**
     * Amount of VAT calculated automatically or entered manually by the accountant.
     *
     * @remarks
     * Expressed in smallest units of the currency (e.g. cents for EUR and USD, but yen for JPY).
     */
    @SpeakeasyMetadata()
    @Expose({ name: "vatAmount" })
    vatAmount: number;
}

/**
 * VAT account this line item is allocated to
 */
export class VatAccount extends SpeakeasyBase {
    /**
     * VAT account accounting code
     */
    @SpeakeasyMetadata()
    @Expose({ name: "code" })
    code: string;

    /**
     * VAT account description
     */
    @SpeakeasyMetadata()
    @Expose({ name: "description" })
    description: string;

    /**
     * VAT account Spendesk internal ID
     */
    @SpeakeasyMetadata()
    @Expose({ name: "id" })
    id: string;

    /**
     * VAT account rate in percent (e.g. 19.2%)
     */
    @SpeakeasyMetadata()
    @Expose({ name: "rate" })
    rate: number;
}

export class LineItems extends SpeakeasyBase {
    /**
     * Expense account this line item is allocated to
     */
    @SpeakeasyMetadata()
    @Expose({ name: "expenseAccount" })
    @Type(() => ExpenseAccount)
    expenseAccount: ExpenseAccount;

    /**
     * Financial amounts of the line item
     */
    @SpeakeasyMetadata()
    @Expose({ name: "financial" })
    @Type(() => Financial)
    financial: Financial;

    /**
     * VAT account this line item is allocated to
     */
    @SpeakeasyMetadata()
    @Expose({ name: "vatAccount" })
    @Type(() => VatAccount)
    vatAccount: VatAccount;
}

export class Links extends SpeakeasyBase {
    /**
     * Link to attachments endpoint with the relevant `payableId`
     */
    @SpeakeasyMetadata()
    @Expose({ name: "attachments" })
    attachments: string;
}

/**
 * Indicates the type of the payable.
 *
 * @remarks
 *
 * Type | Description |
 * ---------|----------|
 *  `expenseClaim` | An expense claim submitted and approved |
 *  `invoicePurchase` | An invoice to pay submitted and approved |
 *  `creditNote` | A credit note submitted and approved |
 *   `singlePurchaseCard` | A purchase made with a single-use virtual card |
 *   `subscriptionCard` | A purchase made with a subscription virtual card |
 *   `physicalCard` | A purchase made with a physical card |
 *   `mileageAllowance` | A mileage expense submitted and approved |
 *   `perDiemAllowance` | A per diem expense submitted and approved |
 *   `reverseBill` | A refund or a late return (aka cash return) |
 */
export enum TypeT {
    ExpenseClaim = "expenseClaim",
    InvoicePurchase = "invoicePurchase",
    CreditNote = "creditNote",
    SinglePurchaseCard = "singlePurchaseCard",
    MileageAllowance = "mileageAllowance",
    PerDiemAllowance = "perDiemAllowance",
    SubscriptionCard = "subscriptionCard",
    PhysicalCard = "physicalCard",
    ReverseBill = "reverseBill",
}

export class Payable extends SpeakeasyBase {
    /**
     * This feature is not activated by default.
     *
     * @remarks
     * If activated, `accounting date` field allows accountants to override the original expense date.
     * In YYYY-MM-DD format.
     *
     */
    @SpeakeasyMetadata()
    @Expose({ name: "accountingDate" })
    @Type(() => String)
    @Transform(({ value }) => new RFCDate(value), { toClassOnly: true })
    accountingDate: RFCDate;

    /**
     * An array of allocations for the payable. A payable can have a settlement or a reversal allocated to it
     */
    @SpeakeasyMetadata({ elemType: Allocations })
    @Expose({ name: "allocations" })
    @Type(() => Allocations)
    allocations: Allocations[];

    /**
     * If the payment was made in a foreign currency, this amount will be the one in the payment currency.
     *
     * @remarks
     * Can contain a negative value (for refunds).
     * Expressed in smallest units of the currency (e.g. cents for EUR and USD, but yen for JPY).
     */
    @SpeakeasyMetadata()
    @Expose({ name: "amount" })
    amount: number;

    /**
     * Analytical fields and values on the payable
     */
    @SpeakeasyMetadata({ elemType: AnalyticalValue })
    @Expose({ name: "analyticalProperties" })
    @Type(() => AnalyticalValue)
    analyticalProperties: AnalyticalValue[];

    /**
     * Status of the payable in the Spendesk flow.
     *
     * @remarks
     *
     * | Status | Description |
     * | ---|--- |
     * | `created` | Payable (approved expense) has been created |
     * | `prepared` | Payable has been prepared (enriched with accounting information) by an accountant |
     * | `exported` | Payable has been exported to accounting |
     * | `failedToExport` | Payable has failed to export to accounting via a native Spendesk integrations |
     * | `exportedManually` | Payable has been marked as exported manually by the accountant |
     * | `unprepared` | Payable has been sent back to Bookkeep>Prepare |
     *
     */
    @SpeakeasyMetadata()
    @Expose({ name: "bookkeepingStatus" })
    bookkeepingStatus: BookkeepingStatus;

    /**
     * The ID of the company (this could be a wallet or an entity)
     */
    @SpeakeasyMetadata()
    @Expose({ name: "companyId" })
    companyId: string;

    /**
     * Id of cost center
     */
    @SpeakeasyMetadata()
    @Expose({ name: "costCenterId" })
    costCenterId: string;

    /**
     * Cost center name
     */
    @SpeakeasyMetadata()
    @Expose({ name: "costCenterName" })
    costCenterName: string;

    /**
     * A payable is due to either a supplier or an employee
     */
    @SpeakeasyMetadata()
    @Expose({ name: "counterparty" })
    @Type(() => Counterparty)
    counterparty: Counterparty;

    /**
     * The date-time the payable got created in the system
     */
    @SpeakeasyMetadata()
    @Expose({ name: "createdAt" })
    @Transform(({ value }) => new Date(value), { toClassOnly: true })
    createdAt: Date;

    /**
     * Credit Note number if available
     */
    @SpeakeasyMetadata()
    @Expose({ name: "creditNoteNumber" })
    creditNoteNumber: string;

    /**
     * If the payment was made in a foreign currency, this amount will be the one in the payment currency.
     *
     * @remarks
     * Three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html).
     */
    @SpeakeasyMetadata()
    @Expose({ name: "currency" })
    currency: string;

    /**
     * Payable description
     */
    @SpeakeasyMetadata()
    @Expose({ name: "description" })
    description: string;

    @SpeakeasyMetadata()
    @Expose({ name: "documentaryEvidence" })
    @Type(() => DocumentaryEvidence)
    documentaryEvidence: DocumentaryEvidence;

    /**
     * The date this payable was first exported via an accounting export. [ISO 8601 date format](https://www.iso.org/iso-8601-date-and-time-format.html)
     */
    @SpeakeasyMetadata()
    @Expose({ name: "exportedAt" })
    @Transform(({ value }) => new Date(value), { toClassOnly: true })
    exportedAt: Date;

    /**
     * If the payment was made in a foreign currency, this amount will be the one in the wallet currency.
     *
     * @remarks
     * Can contain a negative value (for refunds).
     * Expressed in smallest units of the currency (e.g. cents for EUR and USD, but yen for JPY).
     */
    @SpeakeasyMetadata()
    @Expose({ name: "functionalAmount" })
    functionalAmount: number;

    /**
     * If the payment was made in a foreign currency, this amount will be the one in the wallet currency.
     *
     * @remarks
     * Three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html).
     */
    @SpeakeasyMetadata()
    @Expose({ name: "functionalCurrency" })
    functionalCurrency: string;

    /**
     * If the payment was made in a foreign currency, this will be the exchange rate that was applied when the payment was made.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "functionalExchangeRate" })
    functionalExchangeRate: number;

    /**
     * The unique identifier of the payable (UUID format)
     */
    @SpeakeasyMetadata()
    @Expose({ name: "id" })
    id: string;

    /**
     * The date the invoice is due.
     *
     * @remarks
     * In YYYY-MM-DD format.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "invoiceDueDate" })
    @Type(() => String)
    @Transform(({ value }) => new RFCDate(value), { toClassOnly: true })
    invoiceDueDate: RFCDate;

    /**
     * Invoice number if available
     */
    @SpeakeasyMetadata()
    @Expose({ name: "invoiceNumber" })
    invoiceNumber: string;

    /**
     * Line items of the payable
     */
    @SpeakeasyMetadata({ elemType: LineItems })
    @Expose({ name: "lineItems" })
    @Type(() => LineItems)
    lineItems: LineItems[];

    @SpeakeasyMetadata({ elemType: Links })
    @Expose({ name: "links" })
    @Type(() => Links)
    links: Links[];

    /**
     * For expenses - this is the date of the expense.
     *
     * @remarks
     * For reversals - this is the date of the reversal.
     * In YYYY-MM-DD format.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "payableDate" })
    @Type(() => String)
    @Transform(({ value }) => new RFCDate(value), { toClassOnly: true })
    payableDate: RFCDate;

    /**
     * Invoice number of an invoice that resulted in a credit note.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "referenceInvoiceNumber" })
    referenceInvoiceNumber: string;

    /**
     * The ID of the team
     */
    @SpeakeasyMetadata()
    @Expose({ name: "teamId" })
    teamId: string;

    /**
     * The name of the team
     */
    @SpeakeasyMetadata()
    @Expose({ name: "teamName" })
    teamName: string;

    /**
     * Indicates the type of the payable.
     *
     * @remarks
     *
     * Type | Description |
     * ---------|----------|
     *  `expenseClaim` | An expense claim submitted and approved |
     *  `invoicePurchase` | An invoice to pay submitted and approved |
     *  `creditNote` | A credit note submitted and approved |
     *   `singlePurchaseCard` | A purchase made with a single-use virtual card |
     *   `subscriptionCard` | A purchase made with a subscription virtual card |
     *   `physicalCard` | A purchase made with a physical card |
     *   `mileageAllowance` | A mileage expense submitted and approved |
     *   `perDiemAllowance` | A per diem expense submitted and approved |
     *   `reverseBill` | A refund or a late return (aka cash return) |
     */
    @SpeakeasyMetadata()
    @Expose({ name: "type" })
    type: TypeT;

    /**
     * The ID of the Spendesk user who submitted the payable
     */
    @SpeakeasyMetadata()
    @Expose({ name: "userId" })
    userId: string;
}

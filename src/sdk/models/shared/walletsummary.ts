/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose, Type } from "class-transformer";

export class AllocatedOnCards extends SpeakeasyBase {
    /**
     * Amount allocated on card to physical.
     *
     * @remarks
     * Expressed in smallest units of the currency (e.g. cents for EUR and USD, but yen for JPY).
     */
    @SpeakeasyMetadata()
    @Expose({ name: "physicalAmount" })
    physicalAmount: number;

    /**
     * Amount allocated on card to single purchase.
     *
     * @remarks
     *
     */
    @SpeakeasyMetadata()
    @Expose({ name: "singlePurchaseAmount" })
    singlePurchaseAmount: number;

    /**
     * Amount allocated on card to subscription.
     *
     * @remarks
     * Expressed in smallest units of the currency (e.g. cents for EUR and USD, but yen for JPY).
     */
    @SpeakeasyMetadata()
    @Expose({ name: "subscriptionAmount" })
    subscriptionAmount: number;

    /**
     * Total amount allocated on card.
     *
     * @remarks
     * Expressed in smallest units of the currency (e.g. cents for EUR and USD, but yen for JPY).
     */
    @SpeakeasyMetadata()
    @Expose({ name: "totalAllocatedAmount" })
    totalAllocatedAmount: number;
}

export class ScheduledTransfersAmount extends SpeakeasyBase {
    /**
     * Amount allocated to scheduled transfers.
     *
     * @remarks
     * Expressed in smallest units of the currency (e.g. cents for EUR and USD, but yen for JPY).
     */
    @SpeakeasyMetadata()
    @Expose({ name: "scheduledExpenseClaimsAmount" })
    scheduledExpenseClaimsAmount: number;

    /**
     * Amount allocated to scheduled transfers.
     *
     * @remarks
     * Expressed in smallest units of the currency (e.g. cents for EUR and USD, but yen for JPY).
     */
    @SpeakeasyMetadata()
    @Expose({ name: "scheduledInvoicesAmount" })
    scheduledInvoicesAmount: number;

    /**
     * Amount allocated to scheduled transfers.
     *
     * @remarks
     * Expressed in smallest units of the currency (e.g. cents for EUR and USD, but yen for JPY).
     */
    @SpeakeasyMetadata()
    @Expose({ name: "totalScheduledTransfersAmount" })
    totalScheduledTransfersAmount: number;
}

/**
 * Status of wallet
 */
export enum Status {
    Active = "active",
}

export class WalletSummary extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "allocatedOnCards" })
    @Type(() => AllocatedOnCards)
    allocatedOnCards: AllocatedOnCards;

    /**
     * Three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html).
     */
    @SpeakeasyMetadata()
    @Expose({ name: "currency" })
    currency: string;

    /**
     * Id of wallet
     */
    @SpeakeasyMetadata()
    @Expose({ name: "id" })
    id: string;

    /**
     * Name of wallet
     */
    @SpeakeasyMetadata()
    @Expose({ name: "name" })
    name: string;

    @SpeakeasyMetadata()
    @Expose({ name: "scheduledTransfersAmount" })
    @Type(() => ScheduledTransfersAmount)
    scheduledTransfersAmount: ScheduledTransfersAmount;

    /**
     * Status of wallet
     */
    @SpeakeasyMetadata()
    @Expose({ name: "status" })
    status: Status;

    /**
     * The total amount allocated on cards & scheduled transfers
     *
     * @remarks
     * Expressed in smallest units of the currency (e.g. cents for EUR and USD, but yen for JPY).
     */
    @SpeakeasyMetadata()
    @Expose({ name: "totalAllocatedAmount" })
    totalAllocatedAmount: number;

    /**
     * The total amount currently loaded on the wallet. This does not include amounts on pre-paid cards. Card settlements can be delayed in which case totalAmount may differ from (wallet loads - sum of settlements).
     *
     * @remarks
     * Expressed in smallest units of the currency (e.g. cents for EUR and USD, but yen for JPY).
     */
    @SpeakeasyMetadata()
    @Expose({ name: "totalAmount" })
    totalAmount: number;

    /**
     * The total amount currently available for spend
     *
     * @remarks
     * Expressed in smallest units of the currency (e.g. cents for EUR and USD, but yen for JPY).
     */
    @SpeakeasyMetadata()
    @Expose({ name: "totalAvailableAmount" })
    totalAvailableAmount: number;
}

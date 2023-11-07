/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../../../sdk/models/shared";
import { AxiosResponse } from "axios";
import { Expose, Type } from "class-transformer";

export class GetSettlementsSecurity extends SpeakeasyBase {
    @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2;name=Authorization" })
    authorizationCodeFlow?: string;

    @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2;name=Authorization" })
    clientAuthFlow?: string;
}

export enum PaidFrom {
    SpendeskAccount = "spendeskAccount",
    ExternalAccount = "externalAccount",
}

export enum State {
    Created = "created",
    Exported = "exported",
    FailedToExport = "failedToExport",
}

export class GetSettlementsRequest extends SpeakeasyBase {
    /**
     * The date and time the settlement first got exported to accounting
     */
    @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=exportedAfter" })
    exportedAfter?: Date;

    /**
     * An array of settlement IDs
     */
    @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=ids" })
    ids?: string[];

    /**
     * Page number
     */
    @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=page" })
    page?: number;

    /**
     * Page size
     */
    @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pageSize" })
    pageSize?: number;

    /**
     * Bank account used for the settlement
     */
    @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=paidFrom" })
    paidFrom?: PaidFrom[];

    /**
     * Sort by creation date
     */
    @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=sort" })
    sort?: string;

    /**
     * Status of settlements to be returned
     */
    @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=state" })
    state?: State[];
}

/**
 * OK
 */
export class GetSettlementsResponseBody extends SpeakeasyBase {
    @SpeakeasyMetadata({ elemType: shared.Settlement })
    @Expose({ name: "data" })
    @Type(() => shared.Settlement)
    data: shared.Settlement[];

    @SpeakeasyMetadata()
    @Expose({ name: "meta" })
    @Type(() => shared.Pagination)
    meta: shared.Pagination;
}

export class GetSettlementsResponse extends SpeakeasyBase {
    /**
     * HTTP response content type for this operation
     */
    @SpeakeasyMetadata()
    contentType: string;

    /**
     * HTTP response status code for this operation
     */
    @SpeakeasyMetadata()
    statusCode: number;

    /**
     * Raw HTTP response; suitable for custom response parsing
     */
    @SpeakeasyMetadata()
    rawResponse?: AxiosResponse;

    /**
     * OK
     */
    @SpeakeasyMetadata()
    object?: GetSettlementsResponseBody;
}

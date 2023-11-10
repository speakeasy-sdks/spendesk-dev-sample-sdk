/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../../../sdk/models/shared";
import { AxiosResponse } from "axios";
import { Expose, Type } from "class-transformer";

export class GetWalletSummarySecurity extends SpeakeasyBase {
    @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2;name=Authorization" })
    authorizationCodeFlow?: string;

    @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2;name=Authorization" })
    clientAuthFlow?: string;
}

export class GetWalletSummaryRequest extends SpeakeasyBase {
    /**
     * An array of wallet IDs
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
}

/**
 * OK
 */
export class GetWalletSummaryResponseBody extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "data" })
    @Type(() => shared.WalletSummary)
    data: shared.WalletSummary;

    @SpeakeasyMetadata()
    @Expose({ name: "meta" })
    @Type(() => shared.Pagination)
    meta: shared.Pagination;
}

export class GetWalletSummaryResponse extends SpeakeasyBase {
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
    object?: GetWalletSummaryResponseBody;
}

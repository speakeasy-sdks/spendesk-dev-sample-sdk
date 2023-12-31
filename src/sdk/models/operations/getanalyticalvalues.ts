/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../../../sdk/models/shared";
import { AxiosResponse } from "axios";
import { Expose, Type } from "class-transformer";

export class GetAnalyticalValuesSecurity extends SpeakeasyBase {
    @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2;name=Authorization" })
    authorizationCodeFlow?: string;

    @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2;name=Authorization" })
    clientAuthFlow?: string;
}

export class GetAnalyticalValuesRequest extends SpeakeasyBase {
    /**
     * Analytical field ID
     */
    @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=fieldId" })
    fieldId: string;

    /**
     * Include deleted values
     */
    @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=includeArchived" })
    includeArchived?: boolean;

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

export class GetAnalyticalValuesData extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "id" })
    id: string;

    @SpeakeasyMetadata()
    @Expose({ name: "isArchived" })
    isArchived: string;

    @SpeakeasyMetadata()
    @Expose({ name: "value" })
    value: string;
}

/**
 * OK
 */
export class GetAnalyticalValuesResponseBody extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "data" })
    @Type(() => GetAnalyticalValuesData)
    data: GetAnalyticalValuesData;

    @SpeakeasyMetadata()
    @Expose({ name: "meta" })
    @Type(() => shared.Pagination)
    meta: shared.Pagination;
}

export class GetAnalyticalValuesResponse extends SpeakeasyBase {
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
    rawResponse: AxiosResponse;

    /**
     * OK
     */
    @SpeakeasyMetadata()
    object?: GetAnalyticalValuesResponseBody;
}

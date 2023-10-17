/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
import { Expose, Type } from "class-transformer";

export class GetEmployeeAccountsSecurity extends SpeakeasyBase {
    @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2;name=Authorization" })
    authorizationCodeFlow?: string;

    @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2;name=Authorization" })
    clientAuthFlow?: string;
}

export class GetEmployeeAccountsRequest extends SpeakeasyBase {
    /**
     * An array of employee IDs
     */
    @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=ids" })
    ids?: string[];

    /**
     * An array of member IDs
     */
    @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=memberIds" })
    memberIds?: string[];

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
export class GetEmployeeAccounts200ApplicationJSON extends SpeakeasyBase {
    @SpeakeasyMetadata({ elemType: shared.EmployeeAccount })
    @Expose({ name: "data" })
    @Type(() => shared.EmployeeAccount)
    data: shared.EmployeeAccount[];

    @SpeakeasyMetadata()
    @Expose({ name: "meta" })
    @Type(() => shared.Pagination)
    meta: shared.Pagination;
}

export class GetEmployeeAccountsResponse extends SpeakeasyBase {
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
    getEmployeeAccounts200ApplicationJSONObject?: GetEmployeeAccounts200ApplicationJSON;
}
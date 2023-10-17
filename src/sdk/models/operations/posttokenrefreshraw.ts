/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { AxiosResponse } from "axios";
import { Expose } from "class-transformer";

export class PostTokenRefreshApplicationXML extends SpeakeasyBase {}

export enum PostTokenRefreshRaw200ApplicationJSONTokenType {
    Bearer = "Bearer",
}

/**
 * OK
 */
export class PostTokenRefreshRaw200ApplicationJSON extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "access_token" })
    accessToken: string;

    @SpeakeasyMetadata()
    @Expose({ name: "refresh_token" })
    refreshToken: string;

    /**
     * space separated list of granted scopes
     *
     * @remarks
     *
     */
    @SpeakeasyMetadata()
    @Expose({ name: "scope" })
    scope: string;

    @SpeakeasyMetadata()
    @Expose({ name: "token_type" })
    tokenType: PostTokenRefreshRaw200ApplicationJSONTokenType;
}

export class PostTokenRefreshRawResponse extends SpeakeasyBase {
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
    postTokenRefreshRaw200ApplicationJSONObject?: PostTokenRefreshRaw200ApplicationJSON;
}
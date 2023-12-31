/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { AxiosResponse } from "axios";
import { Expose } from "class-transformer";

export enum PostTokenRefreshJsonGrantType {
    RefreshToken = "refresh_token",
}

export class PostTokenRefreshJsonRequestBody extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "grant_type" })
    grantType: PostTokenRefreshJsonGrantType;

    @SpeakeasyMetadata()
    @Expose({ name: "refresh_token" })
    refreshToken: string;
}

export enum PostTokenRefreshJsonTokenType {
    Bearer = "Bearer",
}

/**
 * OK
 */
export class PostTokenRefreshJsonResponseBody extends SpeakeasyBase {
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
    tokenType: PostTokenRefreshJsonTokenType;
}

export class PostTokenRefreshJsonResponse extends SpeakeasyBase {
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
    object?: PostTokenRefreshJsonResponseBody;
}

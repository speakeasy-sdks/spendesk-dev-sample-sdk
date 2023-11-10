/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as utils from "../internal/utils";
import * as shared from "../sdk/models/shared";
import { Accounts } from "./accounts";
import { Authentication } from "./authentication";
import { OAuth2 } from "./oauth2";
import { SpendData } from "./spenddata";
import { SuppliersAndUsers } from "./suppliersandusers";
import axios from "axios";
import { AxiosInstance } from "axios";

/**
 * Contains the list of servers available to the SDK
 */
export const ServerList = [
    /**
     * Sandbox
     */
    "https://sandbox-public-api.spendesk.com",
    /**
     * Production
     */
    "https://public-api.spendesk.com",
] as const;

/**
 * The available configuration options for the SDK
 */
export type SDKProps = {
    clientAuthFlow?: string;

    /**
     * Allows overriding the default axios client used by the SDK
     */
    defaultClient?: AxiosInstance;

    /**
     * Allows overriding the default server used by the SDK
     */
    serverIdx?: number;

    /**
     * Allows overriding the default server URL used by the SDK
     */
    serverURL?: string;
    /**
     * Allows overriding the default retry config used by the SDK
     */
    retryConfig?: utils.RetryConfig;
};

export class SDKConfiguration {
    defaultClient: AxiosInstance;
    security?: shared.Security | (() => Promise<shared.Security>);
    serverURL: string;
    serverDefaults: any;
    language = "typescript";
    openapiDocVersion = "0.1";
    sdkVersion = "0.4.2";
    genVersion = "2.187.7";
    userAgent = "speakeasy-sdk/typescript 0.4.2 2.187.7 0.1 Spendesk-Public-API";
    retryConfig?: utils.RetryConfig;
    public constructor(init?: Partial<SDKConfiguration>) {
        Object.assign(this, init);
    }
}

/**
 * Spendesk Public API: Spendesk Public API
 *
 * @remarks
 * Spendesk Public API - Alpha
 */
export class SpendeskPublicAPI {
    public accounts: Accounts;
    public authentication: Authentication;
    public spendData: SpendData;
    public oAuth2: OAuth2;
    public suppliersAndUsers: SuppliersAndUsers;

    private sdkConfiguration: SDKConfiguration;

    constructor(props?: SDKProps) {
        let serverURL = props?.serverURL;
        const serverIdx = props?.serverIdx ?? 0;

        if (!serverURL) {
            serverURL = ServerList[serverIdx];
        }

        const defaultClient = props?.defaultClient ?? axios.create();
        this.sdkConfiguration = new SDKConfiguration({
            defaultClient: defaultClient,
            security: new shared.Security({ clientAuthFlow: props?.clientAuthFlow }),

            serverURL: serverURL,
            retryConfig: props?.retryConfig,
        });

        this.accounts = new Accounts(this.sdkConfiguration);
        this.authentication = new Authentication(this.sdkConfiguration);
        this.spendData = new SpendData(this.sdkConfiguration);
        this.oAuth2 = new OAuth2(this.sdkConfiguration);
        this.suppliersAndUsers = new SuppliersAndUsers(this.sdkConfiguration);
    }
}

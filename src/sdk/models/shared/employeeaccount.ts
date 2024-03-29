/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose } from "class-transformer";

/**
 * An account can be set as default for all employees
 */
export enum DefaultFor {
    Employees = "employees",
}

export class EmployeeAccount extends SpeakeasyBase {
    /**
     * Auxiliary account code (if exists)
     */
    @SpeakeasyMetadata()
    @Expose({ name: "auxiliaryAccountCode" })
    auxiliaryAccountCode: string;

    /**
     * An account can be set as default for all employees
     */
    @SpeakeasyMetadata()
    @Expose({ name: "defaultFor" })
    defaultFor: DefaultFor;

    /**
     * Account description (if exists)
     */
    @SpeakeasyMetadata()
    @Expose({ name: "description" })
    description: string;

    /**
     * Account code
     */
    @SpeakeasyMetadata()
    @Expose({ name: "generalAccountCode" })
    generalAccountCode: string;

    /**
     * Account ID
     */
    @SpeakeasyMetadata()
    @Expose({ name: "id" })
    id: string;

    /**
     * The ids of the users assigned to the account
     */
    @SpeakeasyMetadata()
    @Expose({ name: "memberIds" })
    memberIds: string[];

    /**
     * Account name (if exists)
     */
    @SpeakeasyMetadata()
    @Expose({ name: "name" })
    name: string;
}

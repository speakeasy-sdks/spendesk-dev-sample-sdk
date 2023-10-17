/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose } from "class-transformer";

export class AnalyticalValue extends SpeakeasyBase {
    /**
     * ID of field
     */
    @SpeakeasyMetadata()
    @Expose({ name: "fieldId" })
    fieldId: string;

    /**
     * Field name
     */
    @SpeakeasyMetadata()
    @Expose({ name: "fieldName" })
    fieldName: string;

    /**
     * ID of value
     */
    @SpeakeasyMetadata()
    @Expose({ name: "valueId" })
    valueId: string;

    /**
     * Value name
     */
    @SpeakeasyMetadata()
    @Expose({ name: "valueName" })
    valueName: string;
}
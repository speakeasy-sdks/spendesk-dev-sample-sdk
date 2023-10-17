/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose, Type } from "class-transformer";

export class PaginationPagination extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "page" })
    page: number;

    @SpeakeasyMetadata()
    @Expose({ name: "pageSize" })
    pageSize: number;

    @SpeakeasyMetadata()
    @Expose({ name: "total" })
    total: number;
}

export class Pagination extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "pagination" })
    @Type(() => PaginationPagination)
    pagination?: PaginationPagination;
}
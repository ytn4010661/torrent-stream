/* tslint:disable */
/* eslint-disable */
/**
 * Torrents Stream Server
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 1.0
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime'
import {
    ProviderCategoryModel,
    ProviderCategoryModelFromJSON,
    ProviderCategoryModelFromJSONTyped,
    ProviderCategoryModelToJSON,
} from './'

/**
 *
 * @export
 * @interface ProviderModel
 */
export interface ProviderModel {
    /**
     *
     * @type {string}
     * @memberof ProviderModel
     */
    provider: string
    /**
     *
     * @type {Array<ProviderCategoryModel>}
     * @memberof ProviderModel
     */
    categories: Array<ProviderCategoryModel>
}

export function ProviderModelFromJSON(json: any): ProviderModel {
    return ProviderModelFromJSONTyped(json, false)
}

export function ProviderModelFromJSONTyped(
    json: any,
    ignoreDiscriminator: boolean
): ProviderModel {
    if (json === undefined || json === null) {
        return json
    }
    return {
        provider: json['provider'],
        categories: (json['categories'] as Array<any>).map(
            ProviderCategoryModelFromJSON
        ),
    }
}

export function ProviderModelToJSON(value?: ProviderModel | null): any {
    if (value === undefined) {
        return undefined
    }
    if (value === null) {
        return null
    }
    return {
        provider: value.provider,
        categories: (value.categories as Array<any>).map(
            ProviderCategoryModelToJSON
        ),
    }
}

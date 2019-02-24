import { HttpHeaders } from '@angular/common/http';
import { InjectionToken, Injectable, Inject, Optional, NgModule } from '@angular/core';
import { SimpleHttpService, SimpleHttpModule } from 'ngx-simple-http';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Injection token that can be used to specify the standard query parameters for all API endpoints.
 * @type {?}
 */
const NGX_YTD_API_DEFAULT_STANDARD_PARAMS = new InjectionToken('ngx-ytd-api-default-standard-params');
/**
 * Injection token that can be used to specify the standard query parameters for all API endpoints.
 * @deprecated Use {\@link NGX_YTD_API_DEFAULT_STANDARD_PARAMS}
 * @type {?}
 */
const NGX_YTD_API_DEFAULT_STANDARD_OPTIONS = NGX_YTD_API_DEFAULT_STANDARD_PARAMS;

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class NgxYtdApiCommonService {
    /**
     * @param {?} http
     * @param {?} defaultOptions
     */
    constructor(http, defaultOptions) {
        this.http = http;
        this.defaultOptions = defaultOptions;
    }
    /**
     * Checks for the following:
     * 1. The `key` exists in `obj`
     * 2. The key-value of `key` in `obj` is not `null`
     * @private
     * @template O
     * @param {?} obj The object to check
     * @param {?} key The key to check for in `obj`
     * @return {?} `true` if all conditions are met, `false` otherwise
     */
    keyValueExistsAndNonNull(obj, key) {
        return key in obj && typeof obj[key] !== null;
    }
    /**
     * Merges an API request's options with the default standard options as
     * specified via the `NGX_YTD_API_DEFAULT_STANDARD_OPTIONS` injection token
     * @deprecated Use {\@link NgxYtdApiCommonService#mergeParamsWithStandardParams}
     * @template T
     * @param {?} opts The API request's options
     * @return {?} The merged API request's options
     */
    mergeOpts(opts) {
        return this.mergeParamsWithStandardParams(opts);
    }
    /**
     * Merges an API request's parameters with the default standard parameters as
     * specified via the `NGX_YTD_API_DEFAULT_STANDARD_OPTIONS` injection token
     * @template T
     * @param {?} opts The API request's options
     * @return {?} The merged API request's options
     */
    mergeParamsWithStandardParams(opts) {
        if (this.defaultOptions) {
            return Object.assign({}, opts, this.defaultOptions);
        }
        else {
            return opts;
        }
    }
    /**
     * Sends a HTTP request to the specified `apiEndpoint`
     * @template B, P, R
     * @param {?} apiEndpoint The API endpoint to send a HTTP request to
     * @param {?} opts Options to append to the endpoint as URL queries
     * @param {?=} body The body of the HTTP request
     * @param {?=} httpType The type of HTTP request to send
     * @return {?} The result of the HTTP request
     */
    sendHttpRequest(apiEndpoint, opts, body = null, httpType) {
        /** @type {?} */
        let headers;
        if (this.keyValueExistsAndNonNull(opts, 'accessToken')) {
            if (this.keyValueExistsAndNonNull(opts, 'accessTokenUsesParam') && opts['accessTokenUsesParam']) {
                // Using parameter
                opts['access_token'] = opts['accessToken'];
                delete opts['accessToken'];
                // We don't want to pass this to the actual API endpoint
                delete opts['accessTokenUsesParam'];
            }
            else {
                // Using HTTP headers
                headers = new HttpHeaders()
                    .set('Authorization', `Bearer ${opts['accessToken']}`);
            }
        }
        switch (httpType) {
            case 'delete':
                if (headers) {
                    return this.http.createHttpDelete(apiEndpoint, opts, headers);
                }
                else {
                    return this.http.createHttpDelete(apiEndpoint, opts);
                }
            case 'get':
                if (headers) {
                    return this.http.createHttpGet(apiEndpoint, opts, headers);
                }
                else {
                    return this.http.createHttpGet(apiEndpoint, opts);
                }
            case 'post':
                if (headers) {
                    if (body) {
                        return this.http.createHttpPost(apiEndpoint, opts, body, headers);
                    }
                    else {
                        return this.http.createHttpPost(apiEndpoint, opts, null, headers);
                    }
                }
                else {
                    if (body) {
                        return this.http.createHttpPost(apiEndpoint, opts, body);
                    }
                    else {
                        return this.http.createHttpPost(apiEndpoint, opts, null);
                    }
                }
            case 'put':
                if (headers) {
                    if (body) {
                        return this.http.createHttpPut(apiEndpoint, opts, body, headers);
                    }
                    else {
                        return this.http.createHttpPut(apiEndpoint, opts, null, headers);
                    }
                }
                else {
                    if (body) {
                        return this.http.createHttpPut(apiEndpoint, opts, body);
                    }
                    else {
                        return this.http.createHttpPut(apiEndpoint, opts, null);
                    }
                }
        }
    }
}
NgxYtdApiCommonService.decorators = [
    { type: Injectable }
];
/** @nocollapse */
NgxYtdApiCommonService.ctorParameters = () => [
    { type: SimpleHttpService },
    { type: undefined, decorators: [{ type: Inject, args: [NGX_YTD_API_DEFAULT_STANDARD_OPTIONS,] }, { type: Optional }] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class NgxYtdApiCommonModule {
}
NgxYtdApiCommonModule.decorators = [
    { type: NgModule, args: [{
                imports: [
                    SimpleHttpModule
                ],
                providers: [
                    NgxYtdApiCommonService
                ]
            },] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

export { NGX_YTD_API_DEFAULT_STANDARD_PARAMS, NGX_YTD_API_DEFAULT_STANDARD_OPTIONS, NgxYtdApiCommonModule, NgxYtdApiCommonService };

//# sourceMappingURL=ngx-ytd-api-common.js.map
(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/common/http'), require('ngx-simple-http')) :
    typeof define === 'function' && define.amd ? define('ngx-ytd-api/search', ['exports', '@angular/core', '@angular/common/http', 'ngx-simple-http'], factory) :
    (factory((global['ngx-ytd-api'] = global['ngx-ytd-api'] || {}, global['ngx-ytd-api'].search = {}),global.ng.core,global.ng.common.http,global.ngxSimpleHttp));
}(this, (function (exports,core,http,ngxSimpleHttp) { 'use strict';

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var NgxYtdApiSearchService = /** @class */ (function () {
        function NgxYtdApiSearchService(http$$1) {
            this.http = http$$1;
            /**
             * The API URL for the Search API of the YouTube Data v3 API
             */
            this.ngxYtdSearchApiUrl = 'https://www.googleapis.com/youtube/v3/search';
        }
        // Handler for HTTP requests
        // Handler for HTTP requests
        /**
         * @private
         * @template B, P, R
         * @param {?} apiEndpoint
         * @param {?} opts
         * @param {?=} body
         * @param {?=} httpType
         * @return {?}
         */
        NgxYtdApiSearchService.prototype._httpHandler =
            // Handler for HTTP requests
            /**
             * @private
             * @template B, P, R
             * @param {?} apiEndpoint
             * @param {?} opts
             * @param {?=} body
             * @param {?=} httpType
             * @return {?}
             */
            function (apiEndpoint, opts, body, httpType) {
                if (body === void 0) {
                    body = null;
                }
                /** @type {?} */
                var headers;
                if ('accessToken' in opts && typeof opts['accessToken'] !== undefined && opts['accessToken'] !== null) {
                    headers = new http.HttpHeaders()
                        .set('Authorization', "Bearer " + opts['accessToken']);
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
            };
        /**
         * Returns a collection of search results that match the query parameters specified
         *
         * See https://developers.google.com/youtube/v3/docs/search/list for more info
         * @param opts API parameters for the API
         * @return Results of the search has an `Observable`
         */
        /**
         * Returns a collection of search results that match the query parameters specified
         *
         * See https://developers.google.com/youtube/v3/docs/search/list for more info
         * @param {?} opts API parameters for the API
         * @return {?} Results of the search has an `Observable`
         */
        NgxYtdApiSearchService.prototype.list = /**
         * Returns a collection of search results that match the query parameters specified
         *
         * See https://developers.google.com/youtube/v3/docs/search/list for more info
         * @param {?} opts API parameters for the API
         * @return {?} Results of the search has an `Observable`
         */
            function (opts) {
                return this._httpHandler(this.ngxYtdSearchApiUrl, opts, null, 'get');
            };
        NgxYtdApiSearchService.decorators = [
            { type: core.Injectable }
        ];
        /** @nocollapse */
        NgxYtdApiSearchService.ctorParameters = function () {
            return [
                { type: ngxSimpleHttp.SimpleHttpService }
            ];
        };
        return NgxYtdApiSearchService;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var NgxYtdApiSearchModule = /** @class */ (function () {
        function NgxYtdApiSearchModule() {
        }
        NgxYtdApiSearchModule.decorators = [
            { type: core.NgModule, args: [{
                        imports: [
                            ngxSimpleHttp.SimpleHttpModule
                        ],
                        providers: [
                            NgxYtdApiSearchService
                        ]
                    },] }
        ];
        return NgxYtdApiSearchModule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    exports.NgxYtdApiSearchModule = NgxYtdApiSearchModule;
    exports.NgxYtdApiSearchService = NgxYtdApiSearchService;

    Object.defineProperty(exports, '__esModule', { value: true });

})));

//# sourceMappingURL=ngx-ytd-api-search.umd.js.map
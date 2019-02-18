(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('ngx-ytd-api/common')) :
    typeof define === 'function' && define.amd ? define('ngx-ytd-api/videos', ['exports', '@angular/core', 'ngx-ytd-api/common'], factory) :
    (factory((global['ngx-ytd-api'] = global['ngx-ytd-api'] || {}, global['ngx-ytd-api'].videos = {}),global.ng.core,global['ngx-ytd-api'].common));
}(this, (function (exports,core,common) { 'use strict';

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var NgxYtdApiVideosService = /** @class */ (function () {
        function NgxYtdApiVideosService(common$$1) {
            this.common = common$$1;
            /**
             * The API URL for the Videos API of the YouTube Data v3 API
             */
            this.ngxYtdVideosApiUrl = 'https://www.googleapis.com/youtube/v3/videos';
            /**
             * The API URL for the Videos API for uploading a video of the YouTube Data v3 API
             */
            this.ngxYtdVideoUploadsApiUrl = 'https://www.googleapis.com/upload/youtube/v3/videos';
        }
        /**
         * Deletes a YouTube video
         *
         * See https://developers.google.com/youtube/v3/docs/videos/delete for more info
         * @param opts API parameters for the API
         * @return An observable of the HTTP request
         */
        /**
         * Deletes a YouTube video
         *
         * See https://developers.google.com/youtube/v3/docs/videos/delete for more info
         * @param {?} opts API parameters for the API
         * @return {?} An observable of the HTTP request
         */
        NgxYtdApiVideosService.prototype.delete = /**
         * Deletes a YouTube video
         *
         * See https://developers.google.com/youtube/v3/docs/videos/delete for more info
         * @param {?} opts API parameters for the API
         * @return {?} An observable of the HTTP request
         */
            function (opts) {
                return this.common.sendHttpRequest(this.ngxYtdVideosApiUrl, this.common.mergeOpts(opts), null, 'delete');
            };
        /**
         * Retrieves the ratings that the authorized user gave to a list of specified videos
         *
         * See https://developers.google.com/youtube/v3/docs/videos/getRating for more info
         * @param opts API parameters for the API
         * @return An observable of the HTTP request
         */
        /**
         * Retrieves the ratings that the authorized user gave to a list of specified videos
         *
         * See https://developers.google.com/youtube/v3/docs/videos/getRating for more info
         * @param {?} opts API parameters for the API
         * @return {?} An observable of the HTTP request
         */
        NgxYtdApiVideosService.prototype.getRating = /**
         * Retrieves the ratings that the authorized user gave to a list of specified videos
         *
         * See https://developers.google.com/youtube/v3/docs/videos/getRating for more info
         * @param {?} opts API parameters for the API
         * @return {?} An observable of the HTTP request
         */
            function (opts) {
                return this.common.sendHttpRequest(this.ngxYtdVideosApiUrl + "/getRating", this.common.mergeOpts(opts), null, 'get');
            };
        /**
         * Uploads a video to YouTube and optionally sets the video's metadata
         *
         * See https://developers.google.com/youtube/v3/docs/videos/insert for more info
         * @param body The HTTP request body
         * @param opts API parameters for the API
         * @return An observable of the HTTP request
         */
        /**
         * Uploads a video to YouTube and optionally sets the video's metadata
         *
         * See https://developers.google.com/youtube/v3/docs/videos/insert for more info
         * @param {?} body The HTTP request body
         * @param {?} opts API parameters for the API
         * @return {?} An observable of the HTTP request
         */
        NgxYtdApiVideosService.prototype.insert = /**
         * Uploads a video to YouTube and optionally sets the video's metadata
         *
         * See https://developers.google.com/youtube/v3/docs/videos/insert for more info
         * @param {?} body The HTTP request body
         * @param {?} opts API parameters for the API
         * @return {?} An observable of the HTTP request
         */
            function (body, opts) {
                return this.common.sendHttpRequest(this.ngxYtdVideoUploadsApiUrl, this.common.mergeOpts(opts), body, 'post');
            };
        /**
         * Returns a list of videos that match the requested API parameters
         *
         * See https://developers.google.com/youtube/v3/docs/videos/list for more info
         * @param opts API parameters for the API
         * @return An observable of the HTTP request
         */
        /**
         * Returns a list of videos that match the requested API parameters
         *
         * See https://developers.google.com/youtube/v3/docs/videos/list for more info
         * @param {?} opts API parameters for the API
         * @return {?} An observable of the HTTP request
         */
        NgxYtdApiVideosService.prototype.list = /**
         * Returns a list of videos that match the requested API parameters
         *
         * See https://developers.google.com/youtube/v3/docs/videos/list for more info
         * @param {?} opts API parameters for the API
         * @return {?} An observable of the HTTP request
         */
            function (opts) {
                return this.common.sendHttpRequest(this.ngxYtdVideosApiUrl, this.common.mergeOpts(opts), null, 'get');
            };
        /**
         * Add a like or dislike rating to a video or remove a rating from a video
         *
         * See https://developers.google.com/youtube/v3/docs/videos/rate for more info
         * @param opts API parameters for the API
         * @return An observable of the HTTP request
         */
        /**
         * Add a like or dislike rating to a video or remove a rating from a video
         *
         * See https://developers.google.com/youtube/v3/docs/videos/rate for more info
         * @param {?} opts API parameters for the API
         * @return {?} An observable of the HTTP request
         */
        NgxYtdApiVideosService.prototype.rate = /**
         * Add a like or dislike rating to a video or remove a rating from a video
         *
         * See https://developers.google.com/youtube/v3/docs/videos/rate for more info
         * @param {?} opts API parameters for the API
         * @return {?} An observable of the HTTP request
         */
            function (opts) {
                return this.common.sendHttpRequest(this.ngxYtdVideosApiUrl + "/rate", this.common.mergeOpts(opts), null, 'post');
            };
        /**
         * Reports a video for having abusive content
         *
         * See https://developers.google.com/youtube/v3/docs/videos/reportAbuse for more info
         * @param body The HTTP request body
         * @param opts API parameters for the API
         * @return An observable of the HTTP request
         */
        /**
         * Reports a video for having abusive content
         *
         * See https://developers.google.com/youtube/v3/docs/videos/reportAbuse for more info
         * @param {?} body The HTTP request body
         * @param {?=} opts API parameters for the API
         * @return {?} An observable of the HTTP request
         */
        NgxYtdApiVideosService.prototype.reportAbuse = /**
         * Reports a video for having abusive content
         *
         * See https://developers.google.com/youtube/v3/docs/videos/reportAbuse for more info
         * @param {?} body The HTTP request body
         * @param {?=} opts API parameters for the API
         * @return {?} An observable of the HTTP request
         */
            function (body, opts) {
                return this.common.sendHttpRequest(this.ngxYtdVideosApiUrl + "/reportAbuse", this.common.mergeOpts(opts), body, 'post');
            };
        /**
         * Updates a video's metadata
         *
         * See https://developers.google.com/youtube/v3/docs/videos/update for more info
         * @param body The HTTP request body
         * @param opts API parameters for the API
         * @return An observable of the HTTP request
         */
        /**
         * Updates a video's metadata
         *
         * See https://developers.google.com/youtube/v3/docs/videos/update for more info
         * @param {?} body The HTTP request body
         * @param {?} opts API parameters for the API
         * @return {?} An observable of the HTTP request
         */
        NgxYtdApiVideosService.prototype.update = /**
         * Updates a video's metadata
         *
         * See https://developers.google.com/youtube/v3/docs/videos/update for more info
         * @param {?} body The HTTP request body
         * @param {?} opts API parameters for the API
         * @return {?} An observable of the HTTP request
         */
            function (body, opts) {
                return this.common.sendHttpRequest(this.ngxYtdVideosApiUrl, this.common.mergeOpts(opts), body, 'put');
            };
        NgxYtdApiVideosService.decorators = [
            { type: core.Injectable }
        ];
        /** @nocollapse */
        NgxYtdApiVideosService.ctorParameters = function () {
            return [
                { type: common.NgxYtdApiCommonService }
            ];
        };
        return NgxYtdApiVideosService;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var NgxYtdApiVideosModule = /** @class */ (function () {
        function NgxYtdApiVideosModule() {
        }
        NgxYtdApiVideosModule.decorators = [
            { type: core.NgModule, args: [{
                        imports: [
                            common.NgxYtdApiCommonModule
                        ],
                        providers: [
                            NgxYtdApiVideosService
                        ]
                    },] }
        ];
        return NgxYtdApiVideosModule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    exports.NgxYtdApiVideosService = NgxYtdApiVideosService;
    exports.NgxYtdApiVideosModule = NgxYtdApiVideosModule;

    Object.defineProperty(exports, '__esModule', { value: true });

})));

//# sourceMappingURL=ngx-ytd-api-videos.umd.js.map
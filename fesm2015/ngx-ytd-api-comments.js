import { __decorate, __metadata } from 'tslib';
import { Injectable, NgModule } from '@angular/core';
import { NgxYtdApiCommonService, NGX_YTD_API_DEFAULT_STANDARD_PARAMS, NgxYtdApiCommonModule } from 'ngx-ytd-api/common';

let NgxYtdApiCommentsService = class NgxYtdApiCommentsService {
    constructor(common) {
        this.common = common;
        /**
         * The API URL for the Comments API of the YouTube Data v3 API
         */
        this.ngxYtdCommentsApiUrl = 'https://www.googleapis.com/youtube/v3/comments';
    }
    /**
     * Deletes a comment
     *
     * See https://developers.google.com/youtube/v3/docs/comments/delete for more info
     * @param opts Options for the API
     * @return Results of the deletion as an `Observable`
     */
    delete(opts) {
        return this.common.sendHttpRequest(this.ngxYtdCommentsApiUrl, this.common.mergeOpts(opts), null, 'delete');
    }
    /**
     * Creates a reply to an existing comment
     *
     * See https://developers.google.com/youtube/v3/docs/comments/insert for more info
     * @param body The API body
     * @param opts Options for the API
     * @return Results of the creation as an `Observable`
     */
    insert(body, opts) {
        return this.common.sendHttpRequest(this.ngxYtdCommentsApiUrl, this.common.mergeOpts(opts), body, 'post');
    }
    /**
     * Retrieves comments
     *
     * See https://developers.google.com/youtube/v3/docs/comments/list for more info
     * @param opts Options for the API
     * @return Results of the request as an `Observable`
     */
    list(opts) {
        return this.common.sendHttpRequest(this.ngxYtdCommentsApiUrl, this.common.mergeOpts(opts), null, 'get');
    }
    /**
     * Flags one or more comments as spam
     *
     * See https://developers.google.com/youtube/v3/docs/comments/markAsSpam for more info
     * @param opts Options for the API
     * @return Results of the request as an `Observable`
     */
    markAsSpam(opts) {
        return this.common.sendHttpRequest(`${this.ngxYtdCommentsApiUrl}/markAsSpam`, this.common.mergeOpts(opts), null, 'post');
    }
    /**
     * Sets the moderation status of one or more comments
     *
     * See https://developers.google.com/youtube/v3/docs/comments/setModerationStatus for more info
     * @param opts Options for the API
     * @return Results of the request as an `Observable`
     */
    setModerationStatus(opts) {
        return this.common.sendHttpRequest(`${this.ngxYtdCommentsApiUrl}/setModerationStatus`, this.common.mergeOpts(opts), null, 'post');
    }
    /**
     * Modifies a comment
     *
     * See https://developers.google.com/youtube/v3/docs/comments/update for more info
     * @param body The API body
     * @param opts Options for the API
     * @return Results of the update as an `Observable`
     */
    update(body, opts) {
        return this.common.sendHttpRequest(this.ngxYtdCommentsApiUrl, this.common.mergeOpts(opts), body, 'put');
    }
};
NgxYtdApiCommentsService.ctorParameters = () => [
    { type: NgxYtdApiCommonService }
];
NgxYtdApiCommentsService = __decorate([
    Injectable(),
    __metadata("design:paramtypes", [NgxYtdApiCommonService])
], NgxYtdApiCommentsService);

var NgxYtdApiCommentsModule_1;
let NgxYtdApiCommentsModule = NgxYtdApiCommentsModule_1 = class NgxYtdApiCommentsModule {
    /**
     * Returns the module with the specified standard parameters
     * @param defaultParams The default standard parameters
     * @returns The module with the specified standard parameters
     */
    static forRoot(defaultParams) {
        return {
            ngModule: NgxYtdApiCommentsModule_1,
            providers: [
                { provide: NGX_YTD_API_DEFAULT_STANDARD_PARAMS, useValue: defaultParams }
            ]
        };
    }
};
NgxYtdApiCommentsModule = NgxYtdApiCommentsModule_1 = __decorate([
    NgModule({
        imports: [
            NgxYtdApiCommonModule
        ],
        providers: [
            NgxYtdApiCommentsService
        ]
    })
], NgxYtdApiCommentsModule);

/**
 * Generated bundle index. Do not edit.
 */

export { NgxYtdApiCommentsModule, NgxYtdApiCommentsService };
//# sourceMappingURL=ngx-ytd-api-comments.js.map

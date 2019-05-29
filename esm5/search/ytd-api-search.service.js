import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { NgxYtdApiCommonService } from 'ngx-ytd-api/common';
var NgxYtdApiSearchService = /** @class */ (function () {
    function NgxYtdApiSearchService(common) {
        this.common = common;
        /**
         * The API URL for the Search API of the YouTube Data v3 API
         */
        this.ngxYtdSearchApiUrl = 'https://www.googleapis.com/youtube/v3/search';
    }
    /**
     * Returns a collection of search results that match the query parameters specified
     *
     * See https://developers.google.com/youtube/v3/docs/search/list for more info
     * @param opts API parameters for the API
     * @return Results of the search has an `Observable`
     */
    NgxYtdApiSearchService.prototype.list = function (opts) {
        return this.common.sendHttpRequest(this.ngxYtdSearchApiUrl, this.common.mergeOpts(opts), null, 'get');
    };
    NgxYtdApiSearchService = tslib_1.__decorate([
        Injectable(),
        tslib_1.__metadata("design:paramtypes", [NgxYtdApiCommonService])
    ], NgxYtdApiSearchService);
    return NgxYtdApiSearchService;
}());
export { NgxYtdApiSearchService };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoieXRkLWFwaS1zZWFyY2guc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25neC15dGQtYXBpL3NlYXJjaC8iLCJzb3VyY2VzIjpbInl0ZC1hcGktc2VhcmNoLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFFLHNCQUFzQixFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFNNUQ7SUFDRSxnQ0FDVSxNQUE4QjtRQUE5QixXQUFNLEdBQU4sTUFBTSxDQUF3QjtRQUV4Qzs7V0FFRztRQUNNLHVCQUFrQixHQUFHLDhDQUE4QyxDQUFDO0lBSnpFLENBQUM7SUFLTDs7Ozs7O09BTUc7SUFDSCxxQ0FBSSxHQUFKLFVBQUssSUFBNkI7UUFDaEMsT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDLGVBQWUsQ0FDaEMsSUFBSSxDQUFDLGtCQUFrQixFQUN2QixJQUFJLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBMEIsSUFBSSxDQUFDLEVBQ3BELElBQUksRUFDSixLQUFLLENBQ04sQ0FBQztJQUNKLENBQUM7SUF0QlUsc0JBQXNCO1FBRGxDLFVBQVUsRUFBRTtpREFHTyxzQkFBc0I7T0FGN0Isc0JBQXNCLENBdUJsQztJQUFELDZCQUFDO0NBQUEsQUF2QkQsSUF1QkM7U0F2Qlksc0JBQXNCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTmd4WXRkQXBpQ29tbW9uU2VydmljZSB9IGZyb20gJ25neC15dGQtYXBpL2NvbW1vbic7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBOZ3hZdGRBcGlTZWFyY2hMaXN0T3B0cywgTmd4WXRkQXBpU2VhcmNoTGlzdFJlc3VsdCB9IGZyb20gJy4veXRkLWFwaS1zZWFyY2guaW50ZXJmYWNlcyc7XG5cblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIE5neFl0ZEFwaVNlYXJjaFNlcnZpY2Uge1xuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIGNvbW1vbjogTmd4WXRkQXBpQ29tbW9uU2VydmljZVxuICApIHsgfVxuICAvKipcbiAgICogVGhlIEFQSSBVUkwgZm9yIHRoZSBTZWFyY2ggQVBJIG9mIHRoZSBZb3VUdWJlIERhdGEgdjMgQVBJXG4gICAqL1xuICByZWFkb25seSBuZ3hZdGRTZWFyY2hBcGlVcmwgPSAnaHR0cHM6Ly93d3cuZ29vZ2xlYXBpcy5jb20veW91dHViZS92My9zZWFyY2gnO1xuICAvKipcbiAgICogUmV0dXJucyBhIGNvbGxlY3Rpb24gb2Ygc2VhcmNoIHJlc3VsdHMgdGhhdCBtYXRjaCB0aGUgcXVlcnkgcGFyYW1ldGVycyBzcGVjaWZpZWRcbiAgICpcbiAgICogU2VlIGh0dHBzOi8vZGV2ZWxvcGVycy5nb29nbGUuY29tL3lvdXR1YmUvdjMvZG9jcy9zZWFyY2gvbGlzdCBmb3IgbW9yZSBpbmZvXG4gICAqIEBwYXJhbSBvcHRzIEFQSSBwYXJhbWV0ZXJzIGZvciB0aGUgQVBJXG4gICAqIEByZXR1cm4gUmVzdWx0cyBvZiB0aGUgc2VhcmNoIGhhcyBhbiBgT2JzZXJ2YWJsZWBcbiAgICovXG4gIGxpc3Qob3B0czogTmd4WXRkQXBpU2VhcmNoTGlzdE9wdHMpOiBPYnNlcnZhYmxlPE5neFl0ZEFwaVNlYXJjaExpc3RSZXN1bHQ+IHtcbiAgICByZXR1cm4gdGhpcy5jb21tb24uc2VuZEh0dHBSZXF1ZXN0PGFueSwgTmd4WXRkQXBpU2VhcmNoTGlzdE9wdHMsIE5neFl0ZEFwaVNlYXJjaExpc3RSZXN1bHQ+KFxuICAgICAgdGhpcy5uZ3hZdGRTZWFyY2hBcGlVcmwsXG4gICAgICB0aGlzLmNvbW1vbi5tZXJnZU9wdHM8Tmd4WXRkQXBpU2VhcmNoTGlzdE9wdHM+KG9wdHMpLFxuICAgICAgbnVsbCxcbiAgICAgICdnZXQnXG4gICAgKTtcbiAgfVxufVxuIl19
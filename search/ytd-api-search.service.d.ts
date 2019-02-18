import { NgxYtdApiCommonService } from 'ngx-ytd-api/common';
import { Observable } from 'rxjs';
import { NgxYtdApiSearchListOpts, NgxYtdApiSearchListResult } from './ytd-api-search.interfaces';
export declare class NgxYtdApiSearchService {
    private common;
    constructor(common: NgxYtdApiCommonService);
    /**
     * The API URL for the Search API of the YouTube Data v3 API
     */
    readonly ngxYtdSearchApiUrl = "https://www.googleapis.com/youtube/v3/search";
    /**
     * Returns a collection of search results that match the query parameters specified
     *
     * See https://developers.google.com/youtube/v3/docs/search/list for more info
     * @param opts API parameters for the API
     * @return Results of the search has an `Observable`
     */
    list(opts: NgxYtdApiSearchListOpts): Observable<NgxYtdApiSearchListResult>;
}

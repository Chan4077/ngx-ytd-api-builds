import { Injectable, Version, defineInjectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class NgxYtdApiService {
    /**
     * @param {?} http
     */
    constructor(http) {
        this.http = http;
        /**
         * The YouTube base API URL
         */
        this.ytdApiBaseUrl = 'https://www.googleapis.com/youtube/v3/';
    }
    /**
     * Searches using the YouTube HTTP Data API
     * @param {?} query The query to search for. See the {\@link https://developers.google.com/youtube/v3/docs/search/list#q|developer docs}
     * for more info.
     * @param {?} opts Options for searching
     * @return {?} Results of the search as a stream
     */
    search(query, opts) {
        query = encodeURI(query);
        let /** @type {?} */ _apiUrl = `${this.ytdApiBaseUrl}search?q=${query}&part=snippet,id`;
        // Loop through every property in the opts object
        for (const /** @type {?} */ prop in opts) {
            // Check if property has a non-null value
            if (opts.hasOwnProperty(prop) && opts[prop] !== null) {
                // Add parameter to the API URL
                _apiUrl += `&${prop}=${encodeURI(opts[prop])}`;
            }
        }
        return this.http.get(_apiUrl);
    }
}
NgxYtdApiService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] },
];
/** @nocollapse */
NgxYtdApiService.ctorParameters = () => [
    { type: HttpClient }
];
/** @nocollapse */ NgxYtdApiService.ngInjectableDef = defineInjectable({ factory: function NgxYtdApiService_Factory() { return new NgxYtdApiService(inject(HttpClient)); }, token: NgxYtdApiService, providedIn: "root" });

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class NgxYtdApiSearchService {
    /**
     * @param {?} http
     */
    constructor(http) {
        this.http = http;
        /**
         * The YouTube base API URL
         */
        this.ytdApiBaseUrl = 'https://www.googleapis.com/youtube/v3/';
    }
    /**
     * Searches using the YouTube HTTP Data API
     * @param {?} query The query to search for. See the {\@link https://developers.google.com/youtube/v3/docs/search/list#q|developer docs}
     * for more info.
     * @param {?} opts Options for searching
     * @return {?} Results of the search as a stream
     */
    search(query, opts) {
        query = encodeURI(query);
        let /** @type {?} */ _apiUrl = `${this.ytdApiBaseUrl}search?q=${query}&part=snippet,id`;
        // Loop through every property in the opts object
        for (const /** @type {?} */ prop in opts) {
            // Check if property has a non-null value
            if (opts.hasOwnProperty(prop) && opts[prop] !== null) {
                // Add parameter to the API URL
                _apiUrl += `&${prop}=${encodeURI(opts[prop])}`;
            }
        }
        return this.http.get(_apiUrl);
    }
}
NgxYtdApiSearchService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] },
];
/** @nocollapse */
NgxYtdApiSearchService.ctorParameters = () => [
    { type: HttpClient }
];
/** @nocollapse */ NgxYtdApiSearchService.ngInjectableDef = defineInjectable({ factory: function NgxYtdApiSearchService_Factory() { return new NgxYtdApiSearchService(inject(HttpClient)); }, token: NgxYtdApiSearchService, providedIn: "root" });

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
// Interfaces

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
const /** @type {?} */ VERSION = new Version('1.0.0-alpha.2-383dfcc-383dfcc');

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */

export { NgxYtdApiService, NgxYtdApiSearchService, VERSION };

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4LXl0ZC1hcGkuanMubWFwIiwic291cmNlcyI6WyJuZzovL25neC15dGQtYXBpL3l0ZC1hcGkuc2VydmljZS50cyIsIm5nOi8vbmd4LXl0ZC1hcGkvc2VhcmNoL3l0ZC1hcGktc2VhcmNoLnNlcnZpY2UudHMiLCJuZzovL25neC15dGQtYXBpL3ZlcnNpb24udHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgSHR0cENsaWVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcblxuaW1wb3J0IHsgTmd4WXRkQXBpU2VhcmNoUmVzdWx0LCBOZ3hZdGRBcGlTZWFyY2hPcHRzIH0gZnJvbSAnLi9zZWFyY2gveXRkLWFwaS1zZWFyY2guaW50ZXJmYWNlcyc7XG5cbkBJbmplY3RhYmxlKHtcblx0cHJvdmlkZWRJbjogJ3Jvb3QnXG59KVxuZXhwb3J0IGNsYXNzIE5neFl0ZEFwaVNlcnZpY2Uge1xuXHQvKipcblx0ICogVGhlIFlvdVR1YmUgYmFzZSBBUEkgVVJMXG5cdCAqL1xuXHRwcml2YXRlIHl0ZEFwaUJhc2VVcmwgPSAnaHR0cHM6Ly93d3cuZ29vZ2xlYXBpcy5jb20veW91dHViZS92My8nO1xuXHRjb25zdHJ1Y3Rvcihcblx0XHRwcml2YXRlIGh0dHA6IEh0dHBDbGllbnRcblx0KSB7IH1cblx0LyoqXG5cdCAqIFNlYXJjaGVzIHVzaW5nIHRoZSBZb3VUdWJlIEhUVFAgRGF0YSBBUElcblx0ICogQHBhcmFtIHF1ZXJ5IFRoZSBxdWVyeSB0byBzZWFyY2ggZm9yLiBTZWUgdGhlIHtAbGluayBodHRwczovL2RldmVsb3BlcnMuZ29vZ2xlLmNvbS95b3V0dWJlL3YzL2RvY3Mvc2VhcmNoL2xpc3QjcXxkZXZlbG9wZXIgZG9jc31cblx0ICogZm9yIG1vcmUgaW5mby5cblx0ICogQHBhcmFtIG9wdHMgT3B0aW9ucyBmb3Igc2VhcmNoaW5nXG5cdCAqIEByZXR1cm5zIFJlc3VsdHMgb2YgdGhlIHNlYXJjaCBhcyBhIHN0cmVhbVxuXHQgKi9cblx0c2VhcmNoKHF1ZXJ5OiBzdHJpbmcsIG9wdHM6IE5neFl0ZEFwaVNlYXJjaE9wdHMpOiBPYnNlcnZhYmxlPE5neFl0ZEFwaVNlYXJjaFJlc3VsdD4ge1xuXHRcdHF1ZXJ5ID0gZW5jb2RlVVJJKHF1ZXJ5KTtcblx0XHRsZXQgX2FwaVVybCA9IGAke3RoaXMueXRkQXBpQmFzZVVybH1zZWFyY2g/cT0ke3F1ZXJ5fSZwYXJ0PXNuaXBwZXQsaWRgO1xuXHRcdC8vIExvb3AgdGhyb3VnaCBldmVyeSBwcm9wZXJ0eSBpbiB0aGUgb3B0cyBvYmplY3Rcblx0XHRmb3IgKGNvbnN0IHByb3AgaW4gb3B0cykge1xuXHRcdFx0Ly8gQ2hlY2sgaWYgcHJvcGVydHkgaGFzIGEgbm9uLW51bGwgdmFsdWVcblx0XHRcdGlmIChvcHRzLmhhc093blByb3BlcnR5KHByb3ApICYmIG9wdHNbcHJvcF0gIT09IG51bGwpIHtcblx0XHRcdFx0Ly8gQWRkIHBhcmFtZXRlciB0byB0aGUgQVBJIFVSTFxuXHRcdFx0XHRfYXBpVXJsICs9IGAmJHtwcm9wfT0ke2VuY29kZVVSSShvcHRzW3Byb3BdKX1gO1xuXHRcdFx0fVxuXHRcdH1cblx0XHRyZXR1cm4gdGhpcy5odHRwLmdldDxOZ3hZdGRBcGlTZWFyY2hSZXN1bHQ+KF9hcGlVcmwpO1xuXHR9XG59XG4iLCJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBIdHRwQ2xpZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuXG5pbXBvcnQgeyBOZ3hZdGRBcGlTZWFyY2hPcHRzLCBOZ3hZdGRBcGlTZWFyY2hSZXN1bHQgfSBmcm9tICcuL3l0ZC1hcGktc2VhcmNoLmludGVyZmFjZXMnO1xuXG5ASW5qZWN0YWJsZSh7XG5cdHByb3ZpZGVkSW46ICdyb290J1xufSlcbmV4cG9ydCBjbGFzcyBOZ3hZdGRBcGlTZWFyY2hTZXJ2aWNlIHtcblx0LyoqXG5cdCAqIFRoZSBZb3VUdWJlIGJhc2UgQVBJIFVSTFxuXHQgKi9cblx0cHJpdmF0ZSB5dGRBcGlCYXNlVXJsID0gJ2h0dHBzOi8vd3d3Lmdvb2dsZWFwaXMuY29tL3lvdXR1YmUvdjMvJztcblx0Y29uc3RydWN0b3IocHJpdmF0ZSBodHRwOiBIdHRwQ2xpZW50KSB7IH1cblx0LyoqXG5cdCAqIFNlYXJjaGVzIHVzaW5nIHRoZSBZb3VUdWJlIEhUVFAgRGF0YSBBUElcblx0ICogQHBhcmFtIHF1ZXJ5IFRoZSBxdWVyeSB0byBzZWFyY2ggZm9yLiBTZWUgdGhlIHtAbGluayBodHRwczovL2RldmVsb3BlcnMuZ29vZ2xlLmNvbS95b3V0dWJlL3YzL2RvY3Mvc2VhcmNoL2xpc3QjcXxkZXZlbG9wZXIgZG9jc31cblx0ICogZm9yIG1vcmUgaW5mby5cblx0ICogQHBhcmFtIG9wdHMgT3B0aW9ucyBmb3Igc2VhcmNoaW5nXG5cdCAqIEByZXR1cm5zIFJlc3VsdHMgb2YgdGhlIHNlYXJjaCBhcyBhIHN0cmVhbVxuXHQgKi9cblx0c2VhcmNoKHF1ZXJ5OiBzdHJpbmcsIG9wdHM6IE5neFl0ZEFwaVNlYXJjaE9wdHMpOiBPYnNlcnZhYmxlPE5neFl0ZEFwaVNlYXJjaFJlc3VsdD4ge1xuXHRcdHF1ZXJ5ID0gZW5jb2RlVVJJKHF1ZXJ5KTtcblx0XHRsZXQgX2FwaVVybCA9IGAke3RoaXMueXRkQXBpQmFzZVVybH1zZWFyY2g/cT0ke3F1ZXJ5fSZwYXJ0PXNuaXBwZXQsaWRgO1xuXHRcdC8vIExvb3AgdGhyb3VnaCBldmVyeSBwcm9wZXJ0eSBpbiB0aGUgb3B0cyBvYmplY3Rcblx0XHRmb3IgKGNvbnN0IHByb3AgaW4gb3B0cykge1xuXHRcdFx0Ly8gQ2hlY2sgaWYgcHJvcGVydHkgaGFzIGEgbm9uLW51bGwgdmFsdWVcblx0XHRcdGlmIChvcHRzLmhhc093blByb3BlcnR5KHByb3ApICYmIG9wdHNbcHJvcF0gIT09IG51bGwpIHtcblx0XHRcdFx0Ly8gQWRkIHBhcmFtZXRlciB0byB0aGUgQVBJIFVSTFxuXHRcdFx0XHRfYXBpVXJsICs9IGAmJHtwcm9wfT0ke2VuY29kZVVSSShvcHRzW3Byb3BdKX1gO1xuXHRcdFx0fVxuXHRcdH1cblx0XHRyZXR1cm4gdGhpcy5odHRwLmdldDxOZ3hZdGRBcGlTZWFyY2hSZXN1bHQ+KF9hcGlVcmwpO1xuXHR9XG59XG4iLCJpbXBvcnQgeyBWZXJzaW9uIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmV4cG9ydCBjb25zdCBWRVJTSU9OID0gbmV3IFZlcnNpb24oJzEuMC4wLWFscGhhLjItMzgzZGZjYycpO1xuIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7OztJQWNDLFlBQ1M7UUFBQSxTQUFJLEdBQUosSUFBSTs7Ozs2QkFGVyx3Q0FBd0M7S0FHM0Q7Ozs7Ozs7O0lBUUwsTUFBTSxDQUFDLEtBQWEsRUFBRSxJQUF5QjtRQUM5QyxLQUFLLEdBQUcsU0FBUyxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ3pCLHFCQUFJLE9BQU8sR0FBRyxHQUFHLElBQUksQ0FBQyxhQUFhLFlBQVksS0FBSyxrQkFBa0IsQ0FBQzs7UUFFdkUsS0FBSyx1QkFBTSxJQUFJLElBQUksSUFBSSxFQUFFOztZQUV4QixJQUFJLElBQUksQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLElBQUksRUFBRTs7Z0JBRXJELE9BQU8sSUFBSSxJQUFJLElBQUksSUFBSSxTQUFTLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLEVBQUUsQ0FBQzthQUMvQztTQUNEO1FBQ0QsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBd0IsT0FBTyxDQUFDLENBQUM7S0FDckQ7OztZQTlCRCxVQUFVLFNBQUM7Z0JBQ1gsVUFBVSxFQUFFLE1BQU07YUFDbEI7Ozs7WUFOUSxVQUFVOzs7Ozs7OztBQ0ZuQjs7OztJQWNDLFlBQW9CLElBQWdCO1FBQWhCLFNBQUksR0FBSixJQUFJLENBQVk7Ozs7NkJBRFosd0NBQXdDO0tBQ3ZCOzs7Ozs7OztJQVF6QyxNQUFNLENBQUMsS0FBYSxFQUFFLElBQXlCO1FBQzlDLEtBQUssR0FBRyxTQUFTLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDekIscUJBQUksT0FBTyxHQUFHLEdBQUcsSUFBSSxDQUFDLGFBQWEsWUFBWSxLQUFLLGtCQUFrQixDQUFDOztRQUV2RSxLQUFLLHVCQUFNLElBQUksSUFBSSxJQUFJLEVBQUU7O1lBRXhCLElBQUksSUFBSSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssSUFBSSxFQUFFOztnQkFFckQsT0FBTyxJQUFJLElBQUksSUFBSSxJQUFJLFNBQVMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsRUFBRSxDQUFDO2FBQy9DO1NBQ0Q7UUFDRCxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUF3QixPQUFPLENBQUMsQ0FBQztLQUNyRDs7O1lBNUJELFVBQVUsU0FBQztnQkFDWCxVQUFVLEVBQUUsTUFBTTthQUNsQjs7OztZQVBRLFVBQVU7Ozs7Ozs7Ozs7Ozs7O0FDRG5CLHVCQUVhLE9BQU8sR0FBRyxJQUFJLE9BQU8sQ0FBQyx1QkFBdUIsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7In0=
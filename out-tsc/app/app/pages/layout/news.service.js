import { __decorate, __metadata } from "tslib";
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { delay, map } from 'rxjs/operators';
const TOTAL_PAGES = 7;
export class NewsPost {
}
let NewsService = class NewsService {
    constructor(http) {
        this.http = http;
    }
    load(page, pageSize) {
        const startIndex = ((page - 1) % TOTAL_PAGES) * pageSize;
        return this.http
            .get('https://jsonplaceholder.typicode.com/posts')
            .pipe(map(news => news.splice(startIndex, pageSize)), delay(1500));
    }
};
NewsService = __decorate([
    Injectable(),
    __metadata("design:paramtypes", [HttpClient])
], NewsService);
export { NewsService };
//# sourceMappingURL=news.service.js.map
import { TestBed } from '@angular/core/testing';
import { RecommendedCompaniesService } from './recommendedcompanies.service';
describe('RecommendedcompaniesService', () => {
    let service;
    beforeEach(() => {
        TestBed.configureTestingModule({});
        service = TestBed.inject(RecommendedCompaniesService);
    });
    it('should be created', () => {
        expect(service).toBeTruthy();
    });
});
//# sourceMappingURL=recommendedcompanies.service.spec.js.map
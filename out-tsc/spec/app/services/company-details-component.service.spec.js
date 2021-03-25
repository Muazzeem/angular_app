import { TestBed } from '@angular/core/testing';
import { CompanyDetailsComponentService } from './company-details-component.service';
describe('CompanyDetailsComponentService', () => {
    let service;
    beforeEach(() => {
        TestBed.configureTestingModule({});
        service = TestBed.inject(CompanyDetailsComponentService);
    });
    it('should be created', () => {
        expect(service).toBeTruthy();
    });
});
//# sourceMappingURL=company-details-component.service.spec.js.map
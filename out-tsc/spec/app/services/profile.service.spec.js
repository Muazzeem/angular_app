import { TestBed } from '@angular/core/testing';
import { ProfileService } from './profile.service';
describe('ProfileService', () => {
    let service;
    beforeEach(() => {
        TestBed.configureTestingModule({});
        service = TestBed.inject(ProfileService);
    });
    it('should be created', () => {
        expect(service).toBeTruthy();
    });
});
//# sourceMappingURL=profile.service.spec.js.map
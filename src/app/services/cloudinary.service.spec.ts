import { TestBed, inject } from '@angular/core/testing';

import { CloudinaryService } from './cloudinary.service';

describe('CloudinaryService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CloudinaryService]
    });
  });

  it('should be created', inject([CloudinaryService], (service: CloudinaryService) => {
    expect(service).toBeTruthy();
  }));
});

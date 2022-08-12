import { TestBed } from '@angular/core/testing';

import { AgenciaServiceService } from './agencia.service';

describe('AgenciaServiceService', () => {
  let service: AgenciaServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AgenciaServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

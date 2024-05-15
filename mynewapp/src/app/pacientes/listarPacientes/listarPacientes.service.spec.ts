/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { ListarPacientesService } from './listarPacientes.service';

describe('Service: ListarPacientes', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ListarPacientesService]
    });
  });

  it('should ...', inject([ListarPacientesService], (service: ListarPacientesService) => {
    expect(service).toBeTruthy();
  }));
});

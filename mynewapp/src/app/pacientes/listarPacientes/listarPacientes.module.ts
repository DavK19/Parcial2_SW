import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListarPacientesComponent } from './listarPacientes.component';
import { HttpClientModule } from '@angular/common/http';
import { TablaPacientesModule } from '../tablaPacientes/tablaPacientes.module';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    TablaPacientesModule
  ],
  declarations: [ListarPacientesComponent],
  exports: [ListarPacientesComponent]
})
export class ListarPacientesModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TablaPacientesComponent } from './tablaPacientes.component';
import { CartaPacienteComponent } from '../cartaPaciente/cartaPaciente.component';

@NgModule({
    declarations: [
        TablaPacientesComponent,
        CartaPacienteComponent
    ],
    imports: [
        CommonModule
    ],
    exports: [
        TablaPacientesComponent
    ]
})
export class TablaPacientesModule { }
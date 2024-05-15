import { Component, Input, OnInit } from '@angular/core';
import { Paciente } from '../paciente';

@Component({
  selector: 'app-tablaPacientes',
  templateUrl: './tablaPacientes.component.html',
  styleUrls: ['./tablaPacientes.component.css']
})
export class TablaPacientesComponent implements OnInit {

  @Input() pacientes: Paciente[] = [];

  paciente!: Paciente;

  constructor() { }

  ngOnInit() {
  }

  cambiarPaciente(paciente: Paciente){
    this.paciente = paciente;
  }

}

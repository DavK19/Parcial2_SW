import { Component, OnInit } from '@angular/core';
import { Paciente } from '../paciente';
import { ListarPacientesService } from './listarPacientes.service';

@Component({
  selector: 'app-listarPacientes',
  templateUrl: './listarPacientes.component.html',
  styleUrls: ['./listarPacientes.component.css']
})
export class ListarPacientesComponent implements OnInit {

  pacientes: Paciente[] = [];
  menores: number = 0;

  constructor(private service: ListarPacientesService) { }

  ngOnInit() {
    this.service.getPacientes()
      .subscribe(pacientes => {this.pacientes = pacientes
        this.menores = this.pacientes.filter(paciente => paciente.edad < 18).length;
      });
  }

}

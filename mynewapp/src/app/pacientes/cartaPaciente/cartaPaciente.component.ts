import { Component, Input, OnInit } from '@angular/core';
import { Paciente } from '../paciente';

@Component({
  selector: 'app-cartaPaciente',
  templateUrl: './cartaPaciente.component.html',
  styleUrls: ['./cartaPaciente.component.css']
})
export class CartaPacienteComponent implements OnInit {

  @Input() paciente!: Paciente;

  constructor() { }

  ngOnInit() {
  }

}

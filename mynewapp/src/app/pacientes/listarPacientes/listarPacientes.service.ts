import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment.development';
import { HttpClient } from '@angular/common/http';
import { Paciente } from '../paciente';

@Injectable({
  providedIn: 'root'
})
export class ListarPacientesService {

constructor(private http: HttpClient) { }

getPacientes() {
  return this.http.get<Paciente[]>(environment.url);
}

}

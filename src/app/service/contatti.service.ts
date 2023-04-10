import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Messaggio } from '../models/contatti';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContattiService {

  constructor(private http: HttpClient) { }

  postMessage(m:Messaggio): Observable<any>{
    return this.http.post<Messaggio>("http://l4com.labforweb.it/backend/web/test/ajax/12-01/modulo_contatti.php", m)
  }
}

import { Injectable } from '@angular/core';
import { Corso, corsi } from '../models/corso';

@Injectable({
  providedIn: 'root'
})
export class CorsiService {

  constructor() { }

  corsiArr:Corso[] = [];

  getCorsi():Corso[] {
    this.corsiArr = corsi;
    return corsi
  }

  getCorsiDetail(id:number): Corso | undefined {
    return corsi.find(c => c.id == id)
  }
}

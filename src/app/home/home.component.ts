import { Component, OnInit } from '@angular/core';
import { CorsiService } from '../service/corsi.service';
import { Corso } from '../models/corso';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private corsiService: CorsiService) { }

  listaCorsi: Corso[] = []

  ngOnInit(): void {
    this.getListaCorsi();
  }

  getListaCorsi() {
    this.listaCorsi = this.corsiService.getCorsi();
    //console.log(this.corsiService.getCorsi());;
  }

}

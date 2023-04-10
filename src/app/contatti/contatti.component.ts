import { Component } from '@angular/core';
import { Messaggio } from '../models/contatti';
import { ContattiService } from '../service/contatti.service';

@Component({
  selector: 'app-contatti',
  templateUrl: './contatti.component.html',
  styleUrls: ['./contatti.component.css']
})
export class ContattiComponent {

  constructor(private contattiService: ContattiService){}

  msg: Messaggio = {
    name: "",
    email: "",
    tel: "",
    message: ""
  }

  postMessage(){
    this.contattiService.postMessage(this.msg)
    .subscribe({
      next: (res) => console.log(res),
      error: (err) => console.log(err)
    })
  }

}

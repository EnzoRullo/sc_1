import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CorsiService } from '../service/corsi.service';
import { Corso } from '../models/corso';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-corsi-detail',
  templateUrl: './corsi-detail.component.html',
  styleUrls: ['./corsi-detail.component.css']
})
export class CorsiDetailComponent implements OnInit {
  constructor(
    private route: ActivatedRoute,
    private corsiService: CorsiService,
  ) { }

  sub: any;
  sub3: any;
  idMetodo1: any;
  idMetodo2: any;
  idMetodo3: any;
  corsoMetodo1?: Corso;
  corsoMetodo2?: Corso;
  corsoMetodo3?: Corso;


  ngOnInit(): void {
    this.getCorsiDetail1();
    this.getCorsiDetail2();
    this.getCorsiDetail3();
  }

  getCorsiDetail1() {
    this.sub = this.route.params.subscribe({
      next: (params) => {
        console.log(params)
        this.idMetodo1 = params['id'];
      }
    });

    this.corsoMetodo1 = this.corsiService.getCorsiDetail(Number(this.idMetodo1));
    console.log('ActivateRoute metodo 1 concluso');

  }

  getCorsiDetail2() { // estrazione detail con snapshot
    this.idMetodo2 = this.route.snapshot.params['id'];

    this.corsoMetodo2 = this.corsiService.getCorsiDetail(Number(this.idMetodo2));
    console.log('ActivateRoute con snapshot concluso');
  }

  getCorsiDetail3() { // estrazione detail con parmMap
    this.sub3 = this.route.paramMap
      .pipe(switchMap(async param => param.get('id')))
      .subscribe({
        next: (data) => {
          this.idMetodo3 = data
          this.corsoMetodo3 = this.corsiService.getCorsiDetail(Number(this.idMetodo3))
        },
        error: (err) => console.log(err)
      });
      console.log('ActivateRoute con paramMap.pipe(switchMap()) concluso');
  }
}

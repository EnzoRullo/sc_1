import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NewsComponent } from './news/news.component';
import { ContattiComponent } from './contatti/contatti.component';
import { LoginComponent } from './login/login.component';
import { CorsiDetailComponent } from './corsi-detail/corsi-detail.component';

const routes: Routes = [
  { path: 'home', component:HomeComponent},
  { path: 'corsi-detail/:id', component:CorsiDetailComponent},
  { path: 'news', component:NewsComponent},
  { path: 'contatti', component:ContattiComponent},
  { path: 'login', component:LoginComponent},
  { path: '**', redirectTo: '/home', pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CursosComponent } from './components/cursos/cursos.component';
import { HomeComponent } from './components/home/home.component';
import { FerramentasComponent } from './components/ferramentas/ferramentas.component';

const routes: Routes = [
  {path:'', component: HomeComponent},
  {path: 'cursos', component: CursosComponent},
  {path: 'ferramentas', component: FerramentasComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

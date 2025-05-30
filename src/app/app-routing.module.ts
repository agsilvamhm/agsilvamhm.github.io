import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CursosComponent } from './components/cursos/cursos.component';
import { HomeComponent } from './components/home/home.component';
import { FerramentasComponent } from './components/ferramentas/ferramentas.component';
import { ConcursosComponent } from './components/concursos/concursos.component';
import { FerramentasIAComponent } from './components/ferramentas-ia/ferramentas-ia.component';

const routes: Routes = [
  {path:'', component: HomeComponent},
  {path: 'cursos', component: CursosComponent},
  {path: 'ferramentas', component: FerramentasComponent},
  {path: 'concursos', component: ConcursosComponent},
  {path: 'ia', component: FerramentasIAComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

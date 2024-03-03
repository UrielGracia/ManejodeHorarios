import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginScreenComponent } from './screens/login-screen/login-screen.component';
import { RegistroScreenComponent } from './screens/registro-screen/registro-screen.component';
import { HomeScreenComponent } from './screens/home-screen/home-screen.component';
import { RegistrarProductoScreenComponent } from './screens/registrar-producto-screen/registrar-producto-screen.component';
import { DashboardScreenComponent } from './screens/dashboard-screen/dashboard-screen.component';
import { RegistroMateriasScreenComponent } from './screens/registro-materias-screen/registro-materias-screen.component';
import { MateriasScreenComponent } from './screens/materias-screen/materias-screen.component';

const routes: Routes = [
  { path: '', component: LoginScreenComponent, pathMatch: 'full' },
  { path: 'registro', component: RegistroScreenComponent, pathMatch: 'full' },
  { path: 'registro/:id', component: RegistroScreenComponent, pathMatch: 'full' },
  { path: 'home', component: HomeScreenComponent, pathMatch: 'full' },
  { path: 'registroProducto', component: RegistrarProductoScreenComponent, pathMatch: 'full' },
  { path: 'dashboard', component: DashboardScreenComponent, pathMatch: 'full' },
  { path: 'registroM', component: RegistroMateriasScreenComponent, pathMatch: 'full' },
  { path: 'registroM/:id', component: RegistroMateriasScreenComponent, pathMatch: 'full' },
  { path: 'homeM', component: MateriasScreenComponent, pathMatch: 'full' }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

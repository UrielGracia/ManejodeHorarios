import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';

//Import para servicios HTTP
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

//Angular
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
//import {MatFormFieldModule} from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon';

//Fechas
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatNativeDateModule} from '@angular/material/core';

//Cambio de idioma
import { MAT_DATE_LOCALE } from '@angular/material/core';

//Mask
//import { NgxMaskModule, IConfig } from 'ngx-mask';
//Options mask
//export const options: Partial<IConfig> | (() => Partial<IConfig>) = {};

//Componentes
import { RegistroScreenComponent } from './screens/registro-screen/registro-screen.component';
import { HomeScreenComponent } from './screens/home-screen/home-screen.component';
import { LoginScreenComponent } from './screens/login-screen/login-screen.component';
import { RegistrarProductoScreenComponent } from './screens/registrar-producto-screen/registrar-producto-screen.component';

//Cookies
//import { CookieService } from 'ngx-cookie-service';

//Tablas
import {MatTableModule} from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';

//Dialog
import {MatDialogModule} from '@angular/material/dialog';
import { EliminarUserModalComponent } from './modals/eliminar-user-modal/eliminar-user-modal.component';


//Importaciones para el apartado nuevo del proyecto (Si son necesarias)
import {MatToolbarModule} from '@angular/material/toolbar';
import { DashboardScreenComponent } from './screens/dashboard-screen/dashboard-screen.component';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatDividerModule} from '@angular/material/divider';
import { MateriasScreenComponent } from './screens/materias-screen/materias-screen.component';
import { RegistroMateriasScreenComponent } from './screens/registro-materias-screen/registro-materias-screen.component';
import {MatSelectModule} from '@angular/material/select';
import { TimepickerModule } from 'ngx-bootstrap/timepicker';
import {NgxMaterialTimepickerModule} from 'ngx-material-timepicker';
import { EliminarMateriaModalComponent } from './modals/eliminar-materia-modal/eliminar-materia-modal.component';
import { ActualizarMateriaModalComponent } from './modals/actualizar-materia-modal/actualizar-materia-modal.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginScreenComponent,
    RegistroScreenComponent,
    HomeScreenComponent,
    RegistrarProductoScreenComponent,
    EliminarUserModalComponent,
    DashboardScreenComponent,
    MateriasScreenComponent,
    RegistroMateriasScreenComponent,
    EliminarMateriaModalComponent,
    ActualizarMateriaModalComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    MatInputModule,
    MatIconModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatPaginatorModule,
    MatButtonModule,
    HttpClientModule,
    MatTableModule,
    //NgxMaskModule.forRoot(options),
    MatDialogModule,
    //Importaciones nuevas
    MatToolbarModule,
    MatSidenavModule,
    MatDividerModule,
    MatSelectModule,
    TimepickerModule,
    NgxMaterialTimepickerModule,
  ],
  providers: [
    {provide: MAT_DATE_LOCALE, useValue: 'es-ES'}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

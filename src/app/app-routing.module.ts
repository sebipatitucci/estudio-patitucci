import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './components/inicio/inicio.component';
import { ServiciosComponent } from './components/servicios/servicios.component';
import { ClientesComponent } from './components/clientes/clientes.component';
import { ContactoComponent } from './components/contacto/contacto.component';

const routes: Routes = [
  {path: "", component: InicioComponent },
  {path: "inicio", component: InicioComponent },
  {path: "servicios", component: ServiciosComponent },
  {path: "clientes", component: ClientesComponent },
  {path: "contacto", component: ContactoComponent },
  {path: "**", component: InicioComponent, pathMatch:"full" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

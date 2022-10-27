import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; // <-- NgModel lives here

import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UsuarioDetailComponent } from './usuario-detail/usuario-detail.component';
import { UsuariosComponent } from './usuarios/usuarios.component';
import { MessagesComponent } from './messages/messages.component';

import { AppRoutingModule } from './app-routing.module';
@NgModule({
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  declarations: [
    AppComponent,
    UsuariosComponent,
    UsuarioDetailComponent,
    MessagesComponent,
    DashboardComponent,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}

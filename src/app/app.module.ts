import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import {ClientsComponent} from './components/clients/clients.component';
import {NavbarComponent} from './components/navbar/navbar.component';
import {ClientService} from './services/client.service';
import { FormsModule } from '@angular/forms';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

@NgModule({
  declarations: [
    AppComponent,
    ClientsComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,    
    FormsModule
  ],
  providers: [ClientService],
  bootstrap: [AppComponent],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule { }

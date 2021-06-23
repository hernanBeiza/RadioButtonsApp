import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ObligatorioComponent } from './obligatorio/obligatorio.component';
import { DependientesComponent } from './dependientes/dependientes.component';

@NgModule({
  declarations: [
    AppComponent,
    ObligatorioComponent,
    DependientesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule, ReactiveFormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

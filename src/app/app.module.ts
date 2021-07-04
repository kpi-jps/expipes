import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { PlacaAutoPipe } from './placa-auto.pipe';
import { TelBRPipe } from './tel-br.pipe';
import { TelUSPipe } from './tel-us.pipe';
import { NomeABNTPipe } from './nome-abnt.pipe';
import { PipesComponent } from './pipes/pipes.component';

@NgModule({
  declarations: [
    AppComponent,
    PlacaAutoPipe,
    TelBRPipe,
    TelUSPipe,
    NomeABNTPipe,
    PipesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

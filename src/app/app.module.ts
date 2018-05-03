import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HttpModule } from "@angular/http"

import { HttpClientModule } from '@angular/common/http';

import { MatAutocompleteModule, MatFormFieldModule, MatInputModule } from "@angular/material"
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { VersusComponent } from './versus/versus.component';
import { CorpSelectorComponent } from './versus/corp-selector.component';
import { DataService } from './shared/data.service';
import { KillComponent } from './kill/kill.component';

@NgModule({
  declarations: [
    AppComponent,
    VersusComponent,
    CorpSelectorComponent,
    KillComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    MatInputModule,
    HttpClientModule,
    HttpModule,
    MatAutocompleteModule,
    MatFormFieldModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }

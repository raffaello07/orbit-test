import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {DropdownModule} from 'primeng/dropdown';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatInputModule} from '@angular/material/input';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    FormsModule,
    BrowserAnimationsModule,
    DropdownModule,
    BrowserModule,
    MatInputModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

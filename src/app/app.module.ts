import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

import { IgxTreeGridModule } from "igniteui-angular";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    IgxTreeGridModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}

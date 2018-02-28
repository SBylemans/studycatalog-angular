import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { StudycatalogComponent } from './studycatalog/studycatalog.component';
import { StudycatalogAddComponent } from './studycatalog-add/studycatalog-add.component';
import {AppRoutingModule} from './app-routing.module';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import {StudyService} from "./study.service";


@NgModule({
  declarations: [
    AppComponent,
    StudycatalogComponent,
    StudycatalogAddComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    StudyService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

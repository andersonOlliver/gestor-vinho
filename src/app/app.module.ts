import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {VinhosComponent} from './components/vinhos/vinhos.component';
import {VinhosService} from './services/vinhos.service';
import {InMemoryWebApiModule} from 'angular-in-memory-web-api';
import {VinhoApi} from './vinho-api';
import {HttpModule} from '@angular/http';

@NgModule({
  declarations: [
    AppComponent,
    VinhosComponent
  ],
  imports: [
    BrowserModule,
    HttpModule  ,
    InMemoryWebApiModule.forRoot(VinhoApi)
  ],
  providers: [VinhosService],
  bootstrap: [AppComponent]
})
export class AppModule { }

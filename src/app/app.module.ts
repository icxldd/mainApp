import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import {HttpClientModule} from '@angular/common/http';

import { AppComponent } from './app.component';

import { WelcomeComponent } from './home/welcome.component';
import { RouterModule } from '@angular/router';

import { ProductModule } from './products/product/product.module';
import { RoomComponent } from './room/room.component';

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,RoomComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot([

     {
    path: 'room/:roomId',
    component: RoomComponent
  },

      // { path: '',             redirectTo: 'welcome', pathMatch: 'full'},

      // { path: '**',           redirectTo: 'welcome', pathMatch: "full"}

    ]),
    // ProductModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

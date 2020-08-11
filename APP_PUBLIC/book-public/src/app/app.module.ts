import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeListComponent } from './home-list/home-list.component';

import {HttpClientModule} from '@angular/common/http';
import { AboutComponent } from './about/about.component';
import { HomepageComponent } from './homepage/homepage.component';
import { HeaderComponent } from './header/header.component';
import { FrameworkComponent } from './framework/framework.component';

import {APP_BASE_HREF} from '@angular/common';
import {RouterModule} from '@angular/router';
import { CreateComponent } from './create/create.component';
import { DetailsPageComponent } from './details-page/details-page.component';
import {FormsModule} from '@angular/forms';
import { AlphabeticComponent } from './alphabetic/alphabetic.component';


//import {HttpModule} from '@angular/http';




@NgModule({
  declarations: [
    AppComponent,
    HomeListComponent,
    AboutComponent,
    HomepageComponent,
    HeaderComponent,
    FrameworkComponent,
    CreateComponent,
    DetailsPageComponent,
    AlphabeticComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot([
      {
         path : '',
         component : HomepageComponent
      },
      {
        path : 'about',
        component : AboutComponent
      },
      {
        path : 'create',
        component : CreateComponent
      },
      {
        path : 'book/:bookid',
        component : DetailsPageComponent
      },
      {
        path : 'alphabetic',
        component : AlphabeticComponent
      }
    ])
  ],
  providers: [{provide : APP_BASE_HREF, useValue: '/'}],
  //bootstrap: [AppComponent]
  bootstrap: [FrameworkComponent]
})
export class AppModule { }

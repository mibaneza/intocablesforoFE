import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

//matrial
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatDialogModule} from '@angular/material/dialog';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavBarFeComponent } from './component/estruct/nav-bar-fe/nav-bar-fe.component';
import { TablaComponent } from './component/tabla/tabla.component';
import { HeaderFeComponent } from './component/estruct/header-fe/header-fe.component';
import { ArticleFeComponent } from './component/estruct/article-fe/article-fe.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarFeComponent,
    TablaComponent,
    HeaderFeComponent,
    ArticleFeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,

    BrowserAnimationsModule,

//materail
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    MatDialogModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

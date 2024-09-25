import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { SearchbarComponent } from './components/searchbar/searchbar.component';
import { MoviesComponent } from './pages/movies/movies.component';
import { TvSeriesComponent } from './pages/tv-series/tv-series.component';
import { BookmarkedComponent } from './pages/bookmarked/bookmarked.component';
import { LoginComponent } from './pages/login/login.component';
import { SignUpComponent } from './pages/sign-up/sign-up.component';
import { appConfig } from './app.config';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SidebarComponent,
    SearchbarComponent,
    MoviesComponent,
    TvSeriesComponent,
    BookmarkedComponent,
    LoginComponent,
    SignUpComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    
   
  ],


  providers: [ ...appConfig.providers],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { Movies } from './shared/media.service';
import { LandingPageComponent } from './components/landing-page/landing-page.component';
import { HomepageComponent } from './components/homepage/homepage.component';
import { MovieDetailsComponent } from './components/movie-details/movie-details.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { AppComponent } from './app.component';
import { MylistComponent } from './components/mylist/mylist.component';
import { MoviesComponent } from './components/movies/movies.component';
import { TvsComponent } from './components/tvs/tvs.component';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { MoviesItemBoxComponent } from './components/movies/movies-item-box/movies-item-box.component';

import { CommonModule } from '@angular/common';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { MaterialModule } from './material/material.module';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
// Angural MUI Components

@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent,
    HomepageComponent,
    MovieDetailsComponent,
    NavbarComponent,
    MylistComponent,
    MoviesComponent,
    TvsComponent,
    LoginComponent,
    SignupComponent,
    MoviesItemBoxComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    BrowserAnimationsModule, // required animations module
    ToastrModule.forRoot(), // ToastrModule added
    MaterialModule,
    NoopAnimationsModule,
  ],
  providers: [Movies],
  bootstrap: [AppComponent],
})
export class AppModule {}

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './components/homepage/homepage.component';
import { LandingPageComponent } from './components/landing-page/landing-page.component';
import { LoginComponent } from './components/login/login.component';
import { MovieDetailsComponent } from './components/movie-details/movie-details.component';
import { MoviesComponent } from './components/movies/movies.component';
import { MylistComponent } from './components/mylist/mylist.component';
import { SignupComponent } from './components/signup/signup.component';
import { TvsComponent } from './components/tvs/tvs.component';

const routes: Routes = [
  { path: 'index', component: LandingPageComponent },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'home', component: HomepageComponent },
  { path: 'movies', component: MoviesComponent },
  { path: 'tvs', component: TvsComponent },
  { path: 'mylist', component: MylistComponent },
  { path: 'details/:id/:name', component: MovieDetailsComponent },
  { path: '', redirectTo: '/index', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

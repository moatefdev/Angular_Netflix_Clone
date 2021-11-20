import { Injectable } from '@angular/core';
import { ApiConfig } from './apiConfig';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IMediaBox } from './generalObjects';
import { Router } from '@angular/router';

@Injectable()
export class Movies {
  itemDetails: any[] = [];
  favMedia: any[] = [];
  constructor(private http: HttpClient, private route: Router) {}
  isUserLoggedIn() {
    const user = window.sessionStorage.getItem('current_user');
    if (user == null) {
      alert('Login required to access this page.');
      this.route.navigate(['/login']);
    }
  }
  getTrendingMovies(): any {
    return this.http.get<any>(ApiConfig.trending);
  }
  getTopRated(): any {
    return this.http.get<any>(ApiConfig.topRated);
  }
  getPopularOnNetflix(): any {
    return this.http.get<any>(ApiConfig.popular);
  }
  getActionGenre(): any {
    return this.http.get<any>(ApiConfig.apiUrl + ApiConfig.fetchAction);
  }
  getComedyGenre(): any {
    return this.http.get<any>(ApiConfig.apiUrl + ApiConfig.fetchComedy);
  }
  getHorrorGenre(): any {
    return this.http.get<any>(ApiConfig.apiUrl + ApiConfig.fetchHorror);
  }
  getGenres(): any {
    return this.http.get<any>(ApiConfig.apiUrl + ApiConfig.genres);
  }
  getSpecificGenre(genreId: any, page: any): any {
    return this.http.get<any>(
      `${ApiConfig.specificGenre}${genreId}&page=${page}`
    );
  }
  getPoularTVShows() {
    return this.http.get<any>(ApiConfig.apiUrl + ApiConfig.popularTVShows);
  }
  getTVTrailer(id: number) {
    return this.http.get<any>(ApiConfig.apiUrl + id + ApiConfig.tvTrailer);
  }
  getMovieCasts(id: number) {
    return this.http.get<any>(
      `${ApiConfig.apiUrl}movie/${id}${ApiConfig.credits}`
    );
  }
  getTVCasts(id: number) {
    return this.http.get<any>(
      `${ApiConfig.apiUrl}tv/${id}${ApiConfig.credits}`
    );
  }
  getSimilarMovies(id: number) {
    return this.http.get<any>(
      `${ApiConfig.apiUrl}movie/${id}${ApiConfig.similarMedia}`
    );
  }
  getSimilarTVShows(id: number) {
    return this.http.get<any>(
      `${ApiConfig.apiUrl}tv/${id}${ApiConfig.similarMedia}`
    );
  }
}

// @Injectable()
// export class MyList {
//   myList: any[] = [];
// }

// Observable<Array<IMediaBox>>

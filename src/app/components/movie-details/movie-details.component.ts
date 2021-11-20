import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ApiConfig } from './../../shared/apiConfig';
import { HttpClient } from '@angular/common/http';
import { DomSanitizer } from '@angular/platform-browser';
import { Movies } from 'src/app/shared/media.service';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.scss'],
})
export class MovieDetailsComponent implements OnInit {
  constructor(
    private route: ActivatedRoute,
    private http: HttpClient,
    private sanitiz: DomSanitizer,
    private movies: Movies,
    private routePath: Router
  ) {}

  movie_title = '';
  movie_trailer_url: any = '';
  itemDetails: any[] = [];
  // imgLink = 'https://image.tmdb.org/t/p/w500/';
  imgLink = 'https://image.tmdb.org/t/p/original/';
  voteAverageValue: any = '';
  similar: any[] = [];
  casts: any[] = [];
  movieId = this.route.snapshot.paramMap.get('id');
  itemName = this.route.snapshot.paramMap.get('name');

  ngOnInit(): void {
    this.movies.isUserLoggedIn();
    this.getTrailer();
    this.itemDetails.push(...this.movies.itemDetails);
    console.log(...this.itemDetails);
    this.calcPercentageOfVoteAverage(this.itemDetails[0].vote_average);
    this.getSimilarMedia();
    this.getCasts();
  }

  routeById(id: number, item: any) {
    // console.log(item);
    const Item = this.movies.itemDetails;
    if (Item.length === 0) {
      this.movies.itemDetails.push(item);
      this.routePath.navigate([`/details/${id}/movie`]);
    } else {
      Item.length = 0;
      this.movies.itemDetails.push(item);
      this.routePath.navigate([`/details/${id}/movie`]);
    }
  }

  getTrailer() {
    const trailerApi = ApiConfig.trailer;
    // console.log(`${ApiConfig.apiUrl}/movie/${this.movieId}/${trailerApi}`);
    let result: any;
    if (this.itemName === 'movie') {
      result = this.http.get<any>(
        `${ApiConfig.apiUrl}movie/${this.movieId}/${trailerApi}`
      );
    } else {
      result = this.http.get<any>(
        `${ApiConfig.apiUrl}tv/${this.movieId}/${ApiConfig.tvTrailer}`
      );
    }
    result.subscribe((data: any) => {
      // console.log(data.results.length == 0 ? 'true' : 'false');
      console.log(data.results);
      if (data.results.length != 0) {
        this.movie_title = data.results[0].name ?? data.results[0].title;
        console.log(this.movie_title);
        this.movie_trailer_url = this.sanitiz.bypassSecurityTrustResourceUrl(
          `https://www.youtube.com/embed/${data.results[0].key}`
        );
        console.log(this.movie_trailer_url);
      } else {
        // document.write(`<p>No Movie Trailer Available</p>`);
        this.movie_title = '❌ No Movie Trailer Available';
      }
    });
  }

  getMovieBackgroundImg() {
    const movieId = this.route.snapshot.paramMap.get('id');
  }

  calcPercentageOfVoteAverage(vote_average: any) {
    // alert(vote_average / 10).tofixed(2);
    this.voteAverageValue = (vote_average / 10)
      .toFixed(2)
      .toString()
      .split('.')[1];
  }

  getSimilarMedia() {
    if (this.itemName === 'movie') {
      this.getSimilarMovies();
    } else {
      this.getSimilarTVShows();
    }
  }

  getSimilarMovies() {
    this.movies
      .getSimilarMovies(Number(this.movieId))
      .subscribe((data: any) => {
        // Check if similar array is empty or not. If not, we will empty it to avoid redundancy
        if (this.similar.length !== 0) {
          this.similar.length = 0;
        } else {
          this.similar.push(...data.results);
        }
      });
    console.log(this.similar);
  }

  getSimilarTVShows() {
    this.movies
      .getSimilarTVShows(Number(this.movieId))
      // Check if similar array is empty or not. If not, we will empty it to avoid redundancy
      .subscribe((data: any) => {
        if (this.similar.length !== 0) {
          this.similar.length = 0;
        } else {
          this.similar.push(...data.results);
        }
      });
    console.log(this.similar);
  }

  getCasts() {
    if (this.itemName === 'movie') {
      this.getMoviesCasts();
    } else {
      this.getTVCasts();
    }
  }

  getMoviesCasts() {
    this.movies.getMovieCasts(Number(this.movieId)).subscribe((data: any) => {
      if (this.casts.length !== 0) {
        this.casts.length = 0;
      } else {
        this.casts.push(...data.cast);
      }
      console.log(this.casts);
    });
  }
  getTVCasts() {
    this.movies.getTVCasts(Number(this.movieId)).subscribe((data: any) => {
      if (this.casts.length !== 0) {
        this.casts.length = 0;
      } else {
        this.casts.push(...data.cast);
      }
      console.log(this.casts);
    });
  }

  addToFav(item: any, imgLink: string) {
    this.movies.favMedia.push({
      poster: imgLink + item.poster_path,
      title: item.title,
    });
  }
}

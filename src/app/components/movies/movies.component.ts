import {
  Component,
  OnInit,
  Output,
  ElementRef,
  ViewChild,
} from '@angular/core';
import { Router } from '@angular/router';
import { Movies } from 'src/app/shared/media.service';
import { IAllMovies } from './../../shared/generalObjects';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss'],
})
export class MoviesComponent implements OnInit {
  comedyMovies: any[] = [];
  horrorMovies: any[] = [];
  theMovies: any[] = [];
  genres: any[] = [];
  genresIDs: any[] = [];
  defaultGenre = 'Action';
  defaultSelectedValue = '28';
  imgLink = 'https://image.tmdb.org/t/p/w500';
  selectedGenres: any[] = [];
  searchBtnIsHidden = true;
  genresBtnClassSelected = false;
  moviesPage = 1;
  loadMoreState = true;
  durationInSeconds = 2;
  isItemAddedToFavs = false;

  constructor(
    private movies: Movies,
    private route: Router,
    private elRef: ElementRef,
    private _snackBar: MatSnackBar
  ) {}

  ngOnInit(): void {
    this.movies.isUserLoggedIn();
    this.getGenres();
    this.getPopularOnNetflix();
    this.loadDataOnScroll();
  }

  // routeById(id: number) {
  //   this.route.navigate([`/details/${id}/movie`]);
  // }

  openSnackBar() {
    if (this.isItemAddedToFavs === false) {
      this._snackBar.openFromComponent(PizzaPartyComponent, {
        duration: this.durationInSeconds * 1000,
      });
    }
  }

  getGenres() {
    this.movies.getGenres().subscribe((data: any) => {
      data.genres.map((genre: any) => {
        this.genres.push(genre);
        this.genresIDs.push(genre.id);
      });
      console.log(this.genres);
      console.log(this.genresIDs);
    });
  }

  selectGenre(genre: any) {
    this.searchBtnIsHidden = false;
    if (genre.selectedClass === true) {
      genre.selectedClass = false;
    } else {
      genre.selectedClass = true;
    }
    if (this.selectedGenres.length >= 0) {
      if (this.selectedGenres.includes(genre.id)) {
        let index = this.selectedGenres.indexOf(+genre.id);
        index > -1 ? this.selectedGenres.splice(index, 1) : '';
      } else {
        this.selectedGenres.push(genre.id);
      }
    }
    console.log(this.selectedGenres);
  }

  changeGenre() {
    this.loadMoreState = false;
    console.log(this.selectedGenres);
    // I worte this line below to empty 'theMovies' array so, every time I change the selected genres
    // to filter movies I will remove the previous movies I selected their genres
    this.theMovies.length = 0;
    for (let i = 0; i < this.selectedGenres.length; i++) {
      this.movies
        .getSpecificGenre(this.selectedGenres[i], this.moviesPage)
        .subscribe((data: any) => {
          console.log('specific', data.results);
          // this.theMovies = [...this.theMovies, ...data.results];
          this.theMovies.push(...data.results);
          console.log(this.theMovies);
        });
    }
  }

  loadDataOnScroll() {
    window.onscroll = () => {
      if (
        window.innerHeight + window.scrollY >=
          document.body.offsetHeight - 30 &&
        this.searchBtnIsHidden !== true
      ) {
        // this.loadMore();
        // setTimeout(() => {
        // }, 2000);
        console.log('done');
      }
    };
  }

  addToFav(item: any, imgLink: string) {
    // debugger;
    if (this.movies.favMedia.length === 0) {
      this.movies.favMedia.push({
        id: item.id,
        poster: imgLink + item.poster_path,
        title: item.title || item.original_name,
      });
      console.log('can added');
    } else {
      for (let i = 0; i < this.movies.favMedia.length; i++) {
        if (item.id !== this.movies.favMedia[i].id) {
          this.isItemAddedToFavs = false;
        } else {
          this.isItemAddedToFavs = true;
          break;
        }
      }
      if (this.isItemAddedToFavs == false) {
        this.movies.favMedia.push({
          id: item.id,
          poster: imgLink + item.poster_path,
          title: item.title,
        });
      } else {
        alert('Item alread exists');
      }
    }
  }

  loadMore() {
    this.moviesPage++;
    // this.changeGenre();
    for (let i = 0; i < this.selectedGenres.length; i++) {
      this.movies
        .getSpecificGenre(this.selectedGenres[i], this.moviesPage)
        .subscribe((data: any) => {
          console.log('specific', data.results);
          // this.theMovies = [...this.theMovies, ...data.results];
          this.theMovies.push(...data.results);
          console.log(this.theMovies);
        });
    }
  }

  getPopularOnNetflix() {
    this.movies.getPopularOnNetflix().subscribe((data: any) => {
      this.theMovies.push(...data.results);
    });
  }
}

@Component({
  selector: 'snack-bar-component-example-snack',
  templateUrl: 'snack-bar-component-example-snack.html',
  styles: [
    `
      .example-pizza-party {
        transition: all 0.5s ease-in-out;
      }
    `,
  ],
})
export class PizzaPartyComponent {}

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Movies } from './../../shared/media.service';
@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss'],
})
export class HomepageComponent implements OnInit {
  constructor(private movies: Movies, private route: Router) {}

  trendingMovies: any[] = [];
  topRatedMovies: any[] = [];

  mainCategories: any[] = [];
  mainCategoriesText = '';

  imgLink = 'https://image.tmdb.org/t/p/w500';

  isItemAddedToFavs = false;

  ngOnInit(): void {
    this.movies.isUserLoggedIn();
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.getTrends();
  }

  routeById(id: number, item: any) {
    // console.log(item);
    const Item = this.movies.itemDetails;
    if (Item.length === 0) {
      this.movies.itemDetails.push(item);
      this.route.navigate([`/details/${id}/movie`]);
      // console.log(this.movies.itemDetails);
    } else {
      Item.length = 0;
      this.movies.itemDetails.push(item);
      this.route.navigate([`/details/${id}/movie`]);
    }
  }

  onChangeMainCategoty(
    myMainCategoryValue: any,
    myMainCategoryText: any = 'Trendings'
  ) {
    this.mainCategoriesText =
      myMainCategoryText[myMainCategoryText.selectedIndex].innerText;
    this.mainCategories = [];
    if (myMainCategoryValue === 'trendings') {
      this.getTrends();
    } else if (myMainCategoryValue === 'topRated') {
      this.getTopRated();
    } else if (myMainCategoryValue === 'popular') {
      this.getPopularOnNetflix();
    }
    console.log(myMainCategoryValue, myMainCategoryText);
  }

  //#region Get Main Category Functions
  getTrends() {
    this.movies.getTrendingMovies().subscribe((data: any) => {
      this.mainCategories.push(...data.results);
      console.log(this.mainCategories);
    });
  }

  getTopRated() {
    this.movies.getTopRated().subscribe((data: any) => {
      this.mainCategories.push(...data.results);
      console.log(this.mainCategories);
    });
  }

  getPopularOnNetflix() {
    this.movies.getPopularOnNetflix().subscribe((data: any) => {
      this.mainCategories.push(...data.results);
    });
  }
  //#endregion

  addToFav(item: any, imgLink: string) {
    // debugger;
    if (this.movies.favMedia.length === 0) {
      this.movies.favMedia.push({
        id: item.id,
        poster: imgLink + item.poster_path,
        title: item.name,
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
}

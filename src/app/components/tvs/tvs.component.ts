import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Movies } from 'src/app/shared/media.service';

@Component({
  selector: 'app-tvs',
  templateUrl: './tvs.component.html',
  styleUrls: ['./tvs.component.scss'],
})
export class TvsComponent implements OnInit {
  tvs: any[] = [];
  item: any;
  // @Input() imgLink = '';
  imgLink = 'https://image.tmdb.org/t/p/w500';
  isItemAddedToFavs = false;
  // @Output() clickEvent = new EventEmitter();

  constructor(private movies: Movies, private route: Router) {}

  ngOnInit(): void {
    this.movies.isUserLoggedIn();
    this.getTVs();
    console.log(this.tvs);
  }
  routeById(id: number, item: any) {
    // console.log(item);
    const Item = this.movies.itemDetails;
    if (Item.length === 0) {
      this.movies.itemDetails.push(item);
      this.route.navigate([`/details/${id}/tv`]);
      // console.log(this.movies.itemDetails);
    } else {
      Item.length = 0;
      this.movies.itemDetails.push(item);
      this.route.navigate([`/details/${id}/tv`]);
    }
  }

  getTVs() {
    this.movies.getPoularTVShows().subscribe((data: any) => {
      this.tvs.push(...data.results);
      console.log(this.tvs);
    });
  }

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

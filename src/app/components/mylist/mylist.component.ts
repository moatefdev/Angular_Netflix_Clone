import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Movies } from './../../shared/media.service';

@Component({
  selector: 'app-mylist',
  templateUrl: './mylist.component.html',
  styleUrls: ['./mylist.component.scss'],
})
export class MylistComponent implements OnInit {
  theList: any[] = [];
  gridLayout = false;
  constructor(private movies: Movies, private route: Router) {}

  ngOnInit(): void {
    this.movies.isUserLoggedIn();
    console.log(this.theList);
    this.getFavMedia();
  }

  changeLayoutToGrid() {
    this.gridLayout = !this.gridLayout;
  }

  getFavMedia() {
    this.theList.push(...this.movies.favMedia);
    console.log('list', this.theList);
  }

  deleteFav(item: any) {
    console.log(item);
    console.log(this.theList);
    const items = this.theList.filter((arrItem) => {
      console.log(arrItem.id != item.id);
      return item.id !== arrItem.id;
    });
    this.theList = items;
    this.movies.favMedia = items;
  }
}

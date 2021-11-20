import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Movies } from 'src/app/shared/media.service';

@Component({
  selector: 'app-movies-item-box',
  templateUrl: './movies-item-box.component.html',
  styleUrls: ['./movies-item-box.component.scss'],
})
export class MoviesItemBoxComponent implements OnInit {
  @Input() item: any;
  @Input() imgLink = '';
  @Output() clickEvent = new EventEmitter();

  constructor(private route: Router, private movies: Movies) {}

  ngOnInit(): void {}

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

  addToFav(item: any) {
    this.clickEvent.emit(item);
  }
}

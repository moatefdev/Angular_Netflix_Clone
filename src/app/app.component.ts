import { Component, ViewEncapsulation } from '@angular/core';
import { IMediaBox } from './shared/generalObjects';
import { Movies } from './shared/media.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class AppComponent {
  constructor(private trend: Movies) {}

  title = 'netflix-clone';

  ngOnInit(): void {}
}

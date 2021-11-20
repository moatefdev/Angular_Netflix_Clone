import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  hidden = true;

  constructor(private route: Router) {}

  ngOnInit(): void {}

  toggleUserMenu() {
    this.hidden = !this.hidden;
    console.log(this.hidden);
  }

  logout() {
    window.sessionStorage.removeItem('current_user');
    this.route.navigate(['/']);
  }
}

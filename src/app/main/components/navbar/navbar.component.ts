import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  showModal = false;

  constructor() {
  }

  ngOnInit(): void {
  }

  toggleModal(): void {
    this.showModal = !this.showModal;
  }
}

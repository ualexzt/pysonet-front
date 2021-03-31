import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {
  showModal = false;
  constructor() {
  }

  ngOnInit(): void {
  }

  toggleModal(): void {
    this.showModal = !this.showModal;
  }

}

import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-cours-page',
  templateUrl: './cours-page.component.html',
  styleUrls: ['./cours-page.component.scss']
})
export class CoursPageComponent implements OnInit {
  openTab = 1;

  constructor() {
  }

  ngOnInit(): void {
  }

  toggleTabs($tabNumber: number): void {
    this.openTab = $tabNumber;
  }
}

import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Task} from '../../dashboard-page/dashboard-page.component';

@Component({
  selector: 'app-board-menu',
  templateUrl: './board-menu.component.html',
  styleUrls: ['./board-menu.component.scss']
})
export class BoardMenuComponent implements OnInit {
  showModal = false;
  task = '';

  ngOnInit(): void {
  }

  toggleModal(): void {
    this.showModal = !this.showModal;
  }

  addTask(): void {
    this.showModal = !this.showModal;
    if (this.task.trim()) {
      const task: Task = {
        name: 'John Dou',
        task: this.task
      };

    }
  }
}

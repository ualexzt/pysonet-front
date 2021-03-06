import {Component, Input, OnInit} from '@angular/core';
import {CdkDragDrop, CdkDropList, moveItemInArray, transferArrayItem} from '@angular/cdk/drag-drop';

export interface Task {
  name: string;
  task: string;
  id?: number;
}

@Component({
  selector: 'app-dashboard-page',
  templateUrl: './dashboard-page.component.html',
  styleUrls: ['./dashboard-page.component.scss']
})
export class DashboardPageComponent implements OnInit {

  todo: Task[] = [
    {name: 'John Dou', task: 'Get to work'},
    {name: 'Alex Smith', task: 'Pick up groceries'},
    {name: 'Sara Conor', task: 'Go home'}
  ];
  dev: Task[] = [
    {name: 'Alex Smith', task: 'Pick up groceries'},
    {name: 'Sara Conor', task: 'Go home'}
  ];
  process: Task[] = [
    {name: 'John Dou', task: 'Get to work'},
  ];
  done: Task[] = [];
  list = [
    {head: 'To do', items: this.todo},
    {head: 'Development', items: this.dev},
    {head: 'In progress', items: this.process},
    {head: 'Done', items: this.done}
  ];

  constructor() {
  }

  ngOnInit(): void {
  }

  dropColumns(event: CdkDragDrop<string[]>): void {
    console.log(event.previousIndex, event.currentIndex);
    moveItemInArray(this.list, event.previousIndex, event.currentIndex);
  }

  drop(event: CdkDragDrop<any>): void {
    if (event.previousContainer === event.container) {
      moveItemInArray(
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
      console.log(event);
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
      console.log(event);
    }
  }

}

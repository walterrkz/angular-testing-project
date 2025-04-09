import { Component, Input } from '@angular/core';
import { AppComponent } from '../app.component';
import { TaskItemComponent } from '../task-item/task-item.component';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css'],
  imports: [TaskItemComponent],
})
export class TaskListComponent {
  tasks: string[] = [];
  toggleBtn:boolean=true;
  taskIndex=0;

  constructor(public appComponent: AppComponent) {
    console.log('TaskListComponent initialized');
    this.tasks = appComponent.getTasks();
  }

  addTask(task: string) {
    console.log('Adding task:', task);
    this.appComponent.addTask(task);
    this.tasks = this.appComponent.getTasks();
  }

  updateTaskActive(taskIndex: number) {
    console.log('Updating task:', this.tasks[taskIndex]);
    this.toggleBtn=false;
    this.taskIndex=taskIndex;
  }

  updateTask(newValue:string):void{
    this.tasks[this.taskIndex]=newValue;
    this.toggleBtn=true;
    this.taskIndex=0;
  }

  deleteTask(task: string) {
    console.log('Deleting task:', task);
    this.appComponent.deleteTask(task);
    this.tasks = this.appComponent.getTasks();
  }
}

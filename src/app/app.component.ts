import { Component } from '@angular/core';
import { TaskListComponent } from "./task-list/task-list.component";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  imports: [TaskListComponent],
})
export class AppComponent {
  title = 'angular-testing-project';

  addTask(task: string) {
    const tasks = this.getTasks();
    tasks.push(task);
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }

  deleteTask(task: string) {
    const tasks = this.getTasks();
    const updateTasks = tasks.filter((t) => t !== task);
    localStorage.setItem('tasks', JSON.stringify(updateTasks));
  }

  getTasks(): string[] {
    const tasks = localStorage.getItem('tasks')
      ? localStorage.getItem('tasks')
      : '';
    return tasks ? JSON.parse(tasks) : [];
  }
}

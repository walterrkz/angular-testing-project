import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-task-item',
  imports: [],
  templateUrl: './task-item.component.html',
  styleUrl: './task-item.component.css'
})
export class TaskItemComponent {

  @Input() tasks:string[]=[];
  @Output() taskDeleted:EventEmitter<string>= new EventEmitter<string>();
  @Output() taskEdited:EventEmitter<number>= new EventEmitter<number>();

  deleteTask(index:number):void{
    this.taskDeleted.emit(this.tasks[index]);
  }

  editTask(index:number):void{
    this.taskEdited.emit(index);
  }

}

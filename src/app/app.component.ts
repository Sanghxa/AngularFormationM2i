import { Component, Output } from '@angular/core';
import { Task } from './class/task.model';


const intialTasks: Task[] = [
  new Task(1, 'Nourir le chat', false, 'nourrir le pachat', new Date()),
  new Task(2, 'Caresser le chat', false, 'ceci est une tâche', new Date(Date.now())),
  new Task(3, 'Divertir le chat', false, 'ceci est une tâche', new Date('06/20/2006')),
  new Task(4, 'Servir le chat', false, 'ceci est une tâche', new Date('10 jan 2023'))
]
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  public tasks: Task[] = [];

  constructor(){
    this.tasks=intialTasks;
  }

  public get counter(): number {
    return this.tasks.filter(task => task.status === true).length;
  }

  public get percent(): number {
    //nombre de tâches status true / nb de tâches (tasks.length)
    return this.tasks.length === 0 ? 0 : (this.tasks.filter(task => task.status === true).length / this.tasks.length)*100 ;
  }

  public trackByFunction(index: number, item: any): string {
    return item.id;
  }
}

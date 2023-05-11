import { Component, OnInit , Input, Output, EventEmitter} from '@angular/core';
import { Task } from 'src/app/class/task.model';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss']
})
export class TaskComponent implements OnInit {
  @Input() public task!: Task;
  //on peut initialiser ces variables ici ou dans le constructeur comme on vient de faire
  //le point ! c'est pour dire "tinquiètes je sais ce que je fais" - mais faut faire gaffe avec ça


  constructor() {}


  ngOnInit(): void {
  }

  public getStatus():string { //retourne un string
    return this.task.status ? "Terminée" : "En cours"; //en cours si c'est false, terminé si c'est true
  }

  public getBadgeVariant():string{
    return this.task.status ? "d-inline float-right badge text-bg-success" : "d-inline float-right badge text-bg-warning";
  }

  public geItemVariant():string{
    return this.task.status ? "list-group-item list-group-item-success" : "list-group-item list-group-item-warning";
  }

  public toggleStatus():void{
    this.task.status = !this.task.status;
  }

  public getButtonText():string{
    return this.task.status ? "Annuler" : "Terminer";
  }

  public getButtonColor():string{
    return this.task.status ? "basic" : "primary";
  }


}

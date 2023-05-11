import { SlicePipe } from '@angular/common';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'apercuDescription'
})
export class ApercuDescriptionPipe implements PipeTransform {

  constructor(){}

  transform(value: string, ...args: any[]): string {
    let end: number = args[0] as number; //on récupère le premier argument de notre pipe + on précise as numbers parce que args est défini comme any
    let slicePipe = new SlicePipe();
    value = slicePipe.transform(value,0,end);
    value += " ...";
    return value;
  }

}

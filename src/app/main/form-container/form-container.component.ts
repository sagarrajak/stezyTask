import { Component, OnInit } from '@angular/core';
import { MainService, IFormObject } from 'src/app/main.service';

@Component({
  selector: 'task-form-container',
  templateUrl: './form-container.component.html',
  styleUrls: ['./form-container.component.scss']
})
export class FormContainerComponent {

  private drag_index: number = -1;

  constructor(
    public mainService: MainService
  ) { }

  public deleteAtIndex(index: number): void {
    this.mainService.deleteAtIndex(index);
  }

  public dragStart(_event: any, index: number): void {
    this.drag_index = index;
  }

  public dragEnd(_event: any): void {
    this.drag_index = -1;
  }

  public drop(_event: any, drop_index: number) {
    if (this.drag_index >= 0 && drop_index >= 0) {
      let tem_arr: IFormObject[] = [...this.mainService.formParameterArray];
      let arr_to_return = [];
      if (drop_index <= this.drag_index) {
          arr_to_return = [
            ...tem_arr.slice(0, drop_index),
            ...[tem_arr[this.drag_index]],
            ...tem_arr.slice(drop_index, tem_arr.length)
          ];
      }
      else {
        if (drop_index + 1 <= tem_arr.length) {
          arr_to_return = [
            ...tem_arr.slice(0, drop_index + 1),
            ...[tem_arr[this.drag_index]],
            ...tem_arr.slice(drop_index + 1, tem_arr.length)
          ];
        }
        else {
          arr_to_return.push(tem_arr[this.drag_index]);
        }
      }


      if (drop_index <= this.drag_index)
        arr_to_return.splice(this.drag_index + 1, 1);
      else
        arr_to_return.splice(this.drag_index, 1);
      this.mainService.formParameterArray = [...arr_to_return];
    }

  }
}

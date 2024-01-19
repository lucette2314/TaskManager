import { Component, Input} from '@angular/core';
import { DatePipe } from '@angular/common';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss'],
  providers: [DatePipe],

})
export class TaskComponent{
  @Input() task: any;

}  
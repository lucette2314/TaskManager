import { Component } from '@angular/core';
import { Itask } from 'src/app/interfaces/itask';
import { ServiceService } from 'src/app/services/service.service';
import { CommonModule } from '@angular/common';
import { TaskComponent } from '../task/task.component';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css'],
})

export class TasksComponent {
  tasks!: Itask[];

  constructor(private serviceService: ServiceService) {}

  ngOnInit(): void {
    this.serviceService.getTasks().subscribe((results) => {
      this.tasks = results;
    });
  }
}
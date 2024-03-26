import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { DataService } from '../data.service';
import { Record } from '../interfaces/record.interface';

@Component({
  selector: 'app-grid',
  standalone: true,
  imports: [NgFor],
  templateUrl: './grid.component.html',
  styleUrl: './grid.component.scss',
})
export class GridComponent {
  records: Record[] = [];
  constructor(private dataService: DataService) {}

  ngOnInit() {
    this.records = this.dataService.getRecords();
    console.log(this.records);
  }
}

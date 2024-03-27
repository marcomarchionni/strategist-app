import { Component } from '@angular/core';
import { DataService } from '../../services/data/data.service';
import { Record } from '../../interfaces/record.interface';
import { MatTableModule } from '@angular/material/table';

@Component({
  selector: 'app-content',
  standalone: true,
  imports: [MatTableModule],
  templateUrl: './content.component.html',
  styleUrl: './content.component.scss',
})
export class ContentComponent {
  dataSource: Record[] = [];
  displayedColumns: string[] = ['symbol', 'quantity', 'price'];

  constructor(private dataService: DataService) {}

  ngOnInit() {
    this.dataSource = this.dataService.getRecords();
    console.log(this.dataSource);
  }
}

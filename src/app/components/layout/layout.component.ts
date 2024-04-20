import { Component, ViewChild } from '@angular/core';
import {
  SidebarComponent,
  SidebarModule,
  TreeViewModule,
} from '@syncfusion/ej2-angular-navigations';
import { RouterModule, Router } from '@angular/router';
import { HeaderComponent } from '../header/header.component';

@Component({
  selector: 'app-layout',
  standalone: true,
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.scss',
  imports: [SidebarModule, HeaderComponent, TreeViewModule, RouterModule],
})
export class LayoutComponent {
  @ViewChild('sidebar')
  public sidebar?: SidebarComponent;

  constructor(private router: Router) {}

  public data: Object[] = [
    {
      nodeId: '01',
      nodeText: 'Dashboard',
    },
    {
      nodeId: '02',
      nodeText: 'Portfolios',
    },
    { nodeId: '03', nodeText: 'Strategies' },

    {
      nodeId: '04',
      nodeText: 'Trades',
      nodeChild: [
        { nodeId: '04-01', nodeText: 'All Trades' },
        { nodeId: '04-02', nodeText: 'Untagged' },
      ],
    },

    {
      nodeId: '05',
      nodeText: 'Positions',
    },
    {
      nodeId: '06',
      nodeText: 'Dividends',
    },
  ];

  public fields: Object = {
    dataSource: this.data,
    id: 'nodeId',
    text: 'nodeText',
    child: 'nodeChild',
  };

  onNodeSelect(args: any) {
    console.log(args);
    const nodeText = args.nodeData.text || '';
    switch (nodeText) {
      case 'Dashboard':
        console.log('Navigate to Dashboard');
        break;
      case 'Portfolios':
        console.log('Navigate to Portfolios');
        break;
      case 'Strategies':
        console.log('Navigate to Strategies');
        break;
      case 'All Trades':
        this.router.navigate(['/trades']);
        break;
      case 'Positions':
        this.router.navigate(['/positions']);
        break;
      // add more cases as needed
    }
  }

  toggleSidenav() {
    console.log('toggleSidenav');
    console.log(this.sidebar);
    (this.sidebar as SidebarComponent).toggle();
  }
}

import { Component, Input, ViewChild } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import {
  SidebarModule,
  TreeViewModule,
} from '@syncfusion/ej2-angular-navigations';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [RouterLink, SidebarModule, TreeViewModule],
  templateUrl: './sidenav.component.html',
  styleUrl: './sidenav.component.scss',
})
export class SidenavComponent {
  @Input() target?: string;
  @ViewChild('ejsSidebar') public ejsSidebar?: SidenavComponent;

  toggle() {
    if (this.ejsSidebar) {
      this.ejsSidebar.toggle();
    }
  }

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

  constructor(private router: Router) {}

  onNodeSelect(args: any) {
    const nodeText = args.nodeData.text || '';
    this.navigateToRoute(nodeText);
  }

  private navigateToRoute(nodeText: string) {
    switch (nodeText) {
      case 'Dashboard':
        // this.router.navigate(['/dashboard']);
        console.log('Dashboard route not implemented');
        break;
      case 'Portfolios':
        //this.router.navigate(['/portfolios']);
        console.log('Portfolios route not implemented');
        break;
      case 'Strategies':
        // this.router.navigate(['/strategies']);
        console.log('Strategies route not implemented');
        break;
      case 'All Trades':
        this.router.navigate(['/trades']);
        break;
      case 'Untagged':
        // this.router.navigate(['/trades/untagged']);
        console.log('Untagged route not implemented');
        break;
      case 'Positions':
        this.router.navigate(['/positions']);
        break;
      case 'Dividends':
        // this.router.navigate(['/dividends']);
        console.log('Dividends route not implemented');
        break;
      default:
        console.log('Route does not exist for:', nodeText);
    }
  }
}
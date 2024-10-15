import { CommonModule } from '@angular/common';
import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import {
  SidebarModule,
  TreeViewModule,
} from '@syncfusion/ej2-angular-navigations';
import { User } from '../../interfaces/entities';
import { AuthService } from '../../services/auth-service/auth.service';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [RouterLink, SidebarModule, TreeViewModule, CommonModule],
  templateUrl: './sidenav.component.html',
  styleUrl: './sidenav.component.scss',
})
export class SidenavComponent implements OnInit {
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

  user: User | null = null;

  constructor(private router: Router, private authService: AuthService) {}

  ngOnInit(): void {
    this.authService.user$.subscribe((user) => {
      this.user = user;
      console.log('User:', user);
    });
  }

  onNodeSelect(args: any) {
    const nodeText = args.nodeData.text || '';
    this.navigateToRoute(nodeText);
  }

  private navigateToRoute(nodeText: string) {
    switch (nodeText) {
      case 'Dashboard':
        this.router.navigate(['/dashboard']);
        break;
      case 'Portfolios':
        this.router.navigate(['/portfolios']);
        break;
      case 'Strategies':
        this.router.navigate(['/strategies']);
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

  onSignOut() {
    this.authService.signOut();
    this.router.navigate(['/auth']);
  }
}

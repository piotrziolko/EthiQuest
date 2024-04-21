import { Component, OnInit } from '@angular/core';
import { MenuItem } from './core/models/interfaces/menu-item';
import { selectToken } from '../store/login/login.selectors';
import { Store } from '@ngrx/store';
import { tap } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
  selectToken$ = this.store.select(selectToken);
  public title = 'EthiQuest';
  public menuItems: MenuItem[] = [];
  private isLogged: boolean = false;

  constructor(private store: Store) {}

  ngOnInit() {
    this.selectToken$
      .pipe(
        tap((token) => {
          this.isLogged = !!token;
          this.loadHeaderMenuItems();
        }),
      )
      .subscribe();
  }

  private loadHeaderMenuItems() {
    this.menuItems = [
      ...[
        {
          name: 'Home',
          routerLink: '/',
        },
        {
          name: 'About',
          routerLink: '/about',
        },
        {
          name: 'Contact',
          routerLink: '/contact',
        },
        ...(this.isLogged
          ? []
          : [
              {
                name: 'Login',
                routerLink: '/auth/login',
              },
            ]),
        ...(this.isLogged
          ? [
              {
                name: 'My profile',
                routerLink: '/profile',
                children: [
                  {
                    name: 'My account',
                    routerLink: '/profile',
                    description: 'View your account',
                  },
                  {
                    name: 'Settings',
                    routerLink: '/profile/settings',
                    description: 'Change your settings',
                  },
                  {
                    name: 'Logout',
                    routerLink: '/profile/logout',
                    description: 'Logout from your account',
                  },
                ],
              },
            ]
          : []),
      ],
    ];
  }
}

import { Component } from '@angular/core';
import { MenuItem } from './core/models/interfaces/menu-item';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  public isLogged = false;
  public title = 'EthiQuest';

  get headerMenuItems(): MenuItem[] {
    return [
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
                  routerLink: '/profile/account',
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
    ];
  }
}

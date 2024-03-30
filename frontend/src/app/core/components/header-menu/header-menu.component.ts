import { Component, Input } from '@angular/core';
import { MenuItem } from '../../models/interfaces/menu-item';

@Component({
  selector: 'app-header-menu',
  templateUrl: './header-menu.component.html',
  styleUrl: './header-menu.component.scss',
})
export class HeaderMenuComponent {
  @Input() title = 'Header Menu';

  @Input() titleUrl = '/';

  @Input() menuItems: MenuItem[] = [];

  toggledMenu: boolean = false;

  public toggleMenuItem(menuItem: MenuItem): void {
    menuItem.expanded = !menuItem.expanded;
  }

  public toggleMenu() {
    this.toggledMenu = !this.toggledMenu;
  }
}

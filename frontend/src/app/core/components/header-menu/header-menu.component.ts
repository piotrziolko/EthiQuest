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

  @Input() set items(value: MenuItem[]) {
    this.menuItems = value.map((item) => ({ ...item, expanded: false }));
  }
  menuItems: MenuItem[] = [];

  public toggledMenu: boolean = false;

  public toggleMenuItem(menuItem: MenuItem): void {
    this.menuItems = this.menuItems.map((item) => {
      if (item === menuItem) {
        return {
          ...item,
          expanded: !item.expanded,
        };
      }

      return item;
    });
  }

  public toggleMenu() {
    this.toggledMenu = !this.toggledMenu;
  }
}

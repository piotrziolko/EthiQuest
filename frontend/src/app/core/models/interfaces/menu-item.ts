export interface MenuItem {
  name: string;
  description?: string;
  url?: string;
  routerLink?: string;
  expanded?: boolean;
  children?: MenuItem[];
}

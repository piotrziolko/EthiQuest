export interface MenuItem {
  title: string;
  description?: string;
  url: string;
  expanded?: boolean;
  children?: MenuItem[];
}

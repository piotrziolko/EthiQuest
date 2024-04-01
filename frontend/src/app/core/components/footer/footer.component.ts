import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss',
})
export class FooterComponent {
  @Input() mainUrl: string = '/';

  @Input() title: string = 'Home';

  @Input() socialLinks: {
    name: string;
    url: string;
    logo: 'facebook' | 'discord' | 'twitter' | 'github';
  }[] = [];

  @Input() footerLinks: {
    title: string;
    links: {
      name: string;
      url: string;
    }[];
  }[] = [];
}

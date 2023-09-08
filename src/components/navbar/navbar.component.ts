import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent {
  listMenu = [
    {
      class: 'container-nav--menu-navbar__items',

      items: [
        { title: 'Projects', route: '/projects', class: '' },
        { title: 'Contact', route: '', class: '' },
        { title: 'About', route: '', class: '' },
      ],
    },
  ];
}

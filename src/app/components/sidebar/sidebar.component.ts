import { Component, OnInit } from '@angular/core';

declare const $: any;
declare interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
}
export const ROUTES: RouteInfo[] = [
    { path: '/dashboard', title: 'Dashboard',  icon: 'dashboard', class: '' },
    { path: '/user-profile', title: 'User Profile',  icon:'person', class: '' },
    { path: '/new-account', title: 'New Account',  icon:'account_box', class: '' },
    { path: '/account-list', title: 'Account List',  icon:'content_paste', class: '' },
    { path: '/deposit-account', title: 'Deposit Account',  icon:'bubble_chart', class: '' },
    { path: '/withdraw-account', title: 'Withdraw Account',  icon:'content_paste', class: '' },
    { path: '/transfer-account', title: 'Transfer Account',  icon:'content_paste', class: '' },
    { path: '/customer-list', title: 'Customer List',  icon:'library_books', class: '' },
    { path: '/notifications', title: 'Notifications',  icon:'notifications', class: '' },
    //  { path: '/upgrade', title: 'Upgrade to PRO',  icon:'unarchive', class: 'active-pro' },
];

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  menuItems: any[];

  constructor() { }

  ngOnInit() {
    this.menuItems = ROUTES.filter(menuItem => menuItem);
  }
  isMobileMenu() {
      if ($(window).width() > 991) {
          return false;
      }
      return true;
  };
}

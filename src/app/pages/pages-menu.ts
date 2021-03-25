import {NbMenuItem} from '@nebular/theme';

export const MENU_ITEMS: NbMenuItem[] = [
  {
    title: 'Dashboard',
    icon: 'shopping-cart-outline',
    link: '/pages/dashboard',
    home: true,
  },
  {
    title: 'Companies',
    icon: 'layout-outline',
    children: [
      {
        title: 'Companies-List',
        link: '/pages/layout/infinite-list',
      },
    ],
  },
  {
    title: 'Profile',
    icon: 'shopping-cart-outline',
    link: '/pages/profile',
  },
  {
    title: 'Feedback',
    icon: 'edit-2-outline',
    link: '/pages/forms/layouts',
  },
  {
    title: 'Miscellaneous',
    icon: 'shuffle-2-outline',
    children: [
      {
        title: '404',
        link: '/pages/miscellaneous/404',
      },
    ],
  },
];

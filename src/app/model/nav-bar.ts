export interface INavItem {
  title: string;
  icon: string;
  url: string;
  klass: string;
  children?: [
      {
        subTitle: string;
        title: string;
        url: string;
      }
    ];
}

export const NavItem: INavItem[] = [
  {
    title: 'Dashboard',
    icon: 'dashboard',
    url: '/dashboard',
    klass: ''
  },
  {
    title: 'Hotel',
    icon: 'store',
    url: '/hotel',
    klass: ''
  },
  {
    title: 'Room',
    icon: 'weekend',
    url: '/room',
    klass: ''
  },
  // {
  //   title: 'Setting',
  //   icon: 'build',
  //   url: '/setting',
  //   klass: '',
  //   navId: 'setting',
  //   children: [
  //     {
  //       title: 'Staff',
  //       subTitle: 'S',
  //       url: '/setting/account'
  //     },
  //     {
  //       title: 'Room',
  //       subTitle: 'R',
  //       url: '/setting/room'
  //     },
  //     {
  //       title: 'Hotel',
  //       subTitle: 'H',
  //       url: '/setting/hotel'
  //     },
  //   ]
  // },
];

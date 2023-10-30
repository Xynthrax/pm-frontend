import { Injectable } from '@angular/core';

export interface NavigationItem {
  id: string;
  title: string;
  type: 'item' | 'collapse' | 'group';
  icon?: string;
  url?: string;
  classes?: string;
  external?: boolean;
  target?: boolean;
  breadcrumbs?: boolean;
  children?: Navigation[];
  hidden?: boolean
}

export interface Navigation extends NavigationItem {
  children?: NavigationItem[];
}
const NavigationItems = [
  {
    id: 'patient',
    title: 'Patient',
    type: 'group',
    icon: 'icon-navigation',
    hidden: true,
    children: [
      {
        id: 'home',
        title: 'Home',
        type: 'item',
        classes: 'nav-item',
        url: 'default',
        icon: 'ti ti-dashboard',
        breadcrumbs: false
      },
      {
        id: 'appointment',
        title: 'Make appointment',
        type: 'item',
        classes: 'nav-item',
        url: 'appointment',
        icon: 'ti ti-plus',
        breadcrumbs: false
      },
    ]
  },
  {
    id: 'doctor',
    title: 'Doctor',
    type: 'group',
    icon: 'icon-navigation',
    hidden: true,
    children: [
      {
        id: 'default',
        title: 'Checkup',
        type: 'item',
        classes: 'nav-item',
        url: 'checkup',
        icon: 'ti ti-dashboard',
        breadcrumbs: false
      },
    ]
  },
  {
    id: 'pharmacist',
    title: 'Pharmacist',
    type: 'group',
    icon: 'icon-navigation',
    hidden: true,
    children: [
      {
        id: 'default',
        title: 'Prescription List',
        type: 'item',
        classes: 'nav-item',
        url: 'pharmacist',
        icon: 'ti ti-dashboard',
        breadcrumbs: false
      },
    ]
  },
  // {
  //   id: 'elements',
  //   title: 'Elements',
  //   type: 'group',
  //   icon: 'icon-navigation',
  //   children: [
  //     {
  //       id: 'typography',
  //       title: 'Typography',
  //       type: 'item',
  //       classes: 'nav-item',
  //       url: '/typography',
  //       icon: 'ti ti-typography'
  //     },
  //     {
  //       id: 'color',
  //       title: 'Colors',
  //       type: 'item',
  //       classes: 'nav-item',
  //       url: '/color',
  //       icon: 'ti ti-brush'
  //     },
  //     {
  //       id: 'tabler',
  //       title: 'Tabler',
  //       type: 'item',
  //       classes: 'nav-item',
  //       url: 'https://tabler-icons.io/',
  //       icon: 'ti ti-plant-2',
  //       target: true,
  //       external: true
  //     }
  //   ]
  // },
  // {
  //   id: 'other',
  //   title: 'Other',
  //   type: 'group',
  //   icon: 'icon-navigation',
  //   children: [
  //     {
  //       id: 'sample-page',
  //       title: 'Sample Page',
  //       type: 'item',
  //       url: 'sample-page',
  //       classes: 'nav-item',
  //       icon: 'ti ti-brand-chrome'
  //     },
  //     {
  //       id: 'document',
  //       title: 'Document',
  //       type: 'item',
  //       classes: 'nav-item',
  //       url: 'https://codedthemes.gitbook.io/berry-angular/',
  //       icon: 'ti ti-vocabulary',
  //       target: true,
  //       external: true
  //     }
  //   ]
  // }
];

@Injectable()
export class NavigationItem {
  get() {
    return NavigationItems;
  }
}

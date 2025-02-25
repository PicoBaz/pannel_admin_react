// assets
import { IconKey } from '@tabler/icons-react';

// constant
const icons = {
  IconKey
};

// ==============================|| EXTRA PAGES MENU ITEMS ||============================== //

const pages = {
  id: 'pages',
  title: 'صفحه ها',
  caption: 'توضیحات صفحه ها',
  icon: icons.IconKey,
  type: 'group',
  children: [
    {
      id: 'authentication',
      title: 'احراز هویت',
      type: 'collapse',
      icon: icons.IconKey,
      children: [
        {
          id: 'login',
          title: 'ورود',
          type: 'item',
          url: '/pages/login',
          target: true
        },
        {
          id: 'register',
          title: 'ثبت نام',
          type: 'item',
          url: '/pages/register',
          target: true
        }
      ]
    }
  ]
};

export default pages;

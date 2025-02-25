// assets
import { IconBrandChrome, IconHelp } from '@tabler/icons-react';

// constant
const icons = { IconBrandChrome, IconHelp };

// ==============================|| SAMPLE PAGE & DOCUMENTATION MENU ITEMS ||============================== //

const other = {
  id: 'sample-docs-roadmap',
  type: 'group',
  children: [
    {
      id: 'sample-page',
      title: 'صفحه نمونه',
      type: 'item',
      url: '/sample-page',
      icon: icons.IconBrandChrome,
      breadcrumbs: false
    },
    {
      id: 'documentation',
      title: 'مستندات',
      type: 'item',
      url: 'https://codedthemes.gitbook.io/berry/',
      icon: icons.IconHelp,
      external: true,
      target: true
    }
  ]
};

export default other;

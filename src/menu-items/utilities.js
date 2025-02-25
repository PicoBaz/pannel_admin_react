// assets
import { IconTypography, IconPalette, IconShadow, IconWindmill } from '@tabler/icons-react';

// constant
const icons = {
  IconTypography,
  IconPalette,
  IconShadow,
  IconWindmill
};

// ==============================|| UTILITIES MENU ITEMS ||============================== //

const utilities = {
  id: 'utilities',
  title: 'ابزار ها',
  type: 'group',
  children: [
    {
      id: 'util-typography',
      title: 'تایپوگرافی',
      type: 'item',
      url: '/typography',
      icon: icons.IconTypography,
      breadcrumbs: false
    },
    {
      id: 'util-color',
      title: 'رنگ',
      type: 'item',
      url: '/color',
      icon: icons.IconPalette,
      breadcrumbs: false
    },
    {
      id: 'util-shadow',
      title: 'سایه',
      type: 'item',
      url: '/shadow',
      icon: icons.IconShadow,
      breadcrumbs: false
    }
  ]
};

export default utilities;

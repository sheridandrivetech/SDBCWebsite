import { getPermalink, getBlogPermalink, getAsset } from './utils/permalinks';

export const headerData = {
  links: [
    {
      text: 'About',
      href: getPermalink('#')
    },
    {
      text: 'Sermons',
      href: getPermalink('#')
    },
    {
      text: 'Contact Us',
      href: getPermalink('#')
    }
  ],
};

export const footerData = {
  socialLinks: [
    { ariaLabel: 'YouTube', icon: 'tabler:brand-youtube', href: 'https://www.youtube.com/@sheridandrivebaptistchurch5652' },
    { ariaLabel: 'Facebook', icon: 'tabler:brand-facebook', href: 'https://www.facebook.com/sheridandrivebaptist' },
  ]
};

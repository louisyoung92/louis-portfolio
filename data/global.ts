type Route = {
  title: string;
  path: string;
  leavesWebsite: boolean;
};

type FooterCol = {
  title: string;
  links: {
    name: string;
    link: string;
    icon?: string;
    leavesWebsite: boolean;
  }[];
};

type Footer = {
  columns: FooterCol[];
  contact: {
    email: string;
    address: string;
    phone: string;
    discord: string;
  };
};

export const routes: Route[] = [
  {
    title: 'Home',
    path: '/',
    leavesWebsite: false,
  },
  {
    title: 'Projects',
    path: '/projects',
    leavesWebsite: false,
  },
  {
    title: 'Resume',
    path: '/louis.pdf',
    leavesWebsite: true,
  },
];

export const footer: Footer = {
  columns: [
    {
      title: 'Pages',
      links: [
        {
          name: 'Home',
          link: '/',
          leavesWebsite: false,
        },
        {
          name: 'Projects',
          link: '/projects',
          leavesWebsite: false,
        },
        {
          name: 'Resume',
          link: '/louis.pdf',
          leavesWebsite: true,
        },
      ],
    },
    {
      title: 'Social',
      links: [
        {
          name: 'GitHub',
          link: 'https://github.com/louisyoung92',
          icon: '/static/icons/github-f.svg',
          leavesWebsite: true,
        },
        {
          name: 'LinkedIn',
          link: 'https://www.linkedin.com/in/louis-young-30965325a/',
          icon: '/static/icons/linkedin-f.svg',
          leavesWebsite: true,
        },
        {
          name: 'Skype',
          link: 'https://join.skype.com/invite/y7MlWEV16vze',
          icon: '/static/icons/skype-line.png',
          leavesWebsite: true,
        },
      ],
    },
  ],
  contact: {
    email: 'louis.young0420@gmail.com',
    address: 'Rue du Maupas 33, 1004, Lausanne, Vaud, Switzerland',
    phone: '+41 22 548 01 93',
    discord: 'Louis#8871',
  },
};

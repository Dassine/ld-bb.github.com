const randomString = (length) => {
  const x = 36 ** (length + 1);
  const y = 36 ** length;
  return Math.round(x - Math.random() * y)
    .toString(36)
    .slice(1);
};

const pages = [
  {
    route: '/',
    title: 'Lilia Dassine Belaïd Bründler',
    heading: 'ABOUT THIS SITE',
  },
  {
    route: '/about',
    title: 'About | Lilia Dassine Belaïd Bründler',
    heading: 'ABOUT ME',
  },
  // {
  //   route: '/projects',
  //   title: 'Projects | Lilia Dassine Belaïd Bründler',
  //   heading: 'PROJECTS'
  // },
  {
    route: '/contact',
    title: 'Contact | Lilia Dassine Belaïd Bründler',
    heading: 'CONTACT',
  },
];

export { pages, randomString };

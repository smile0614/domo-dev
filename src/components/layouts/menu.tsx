import Link from 'next/link';

const navigationMenu = [
  {
    id: 1,
    title: 'ABOUT',
    url: 'about',
  },
  {
    id: 2,
    title: 'TOKENOMICS',
    url: 'tokenomics',
  },
  {
    id: 3,
    title: 'ROADMAP',
    url: 'roadmap',
  },
  {
    id: 4,
    title: 'APP',
    url: 'docs',
  },
  {
    id: 5,
    title: 'CONTACT',
    url: 'contact',
  },
];

const NavigationMenu = () => {
  return (
    <nav data-aos='zoom-in' className='xs:hidden md:flex gap-x-6 text-yellow'>
      {navigationMenu.map((item, index) => (
        <Link
          key={index}
          href={item.url}
          className='font-normal text-xl leading-6 uppercase cursor-pointer link-menu'
        >
          {item.title}
        </Link>
      ))}
    </nav>
  );
};

export default NavigationMenu;

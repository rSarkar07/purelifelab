// NavbarLayout.js
import { useEffect } from 'react';

const NavbarLayout = () => {
  useEffect(() => {
    var lastScrollTop;
    var navbar = document.getElementById('navbar');

    const handleScroll = () => {
      var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      if (scrollTop > lastScrollTop) {
        navbar.style.top = '-80px';
      } else {
        navbar.style.top = '0';
      }
      lastScrollTop = scrollTop;
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      // Remove the event listener when the component unmounts
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return null; // This component doesn't render anything
};

export default NavbarLayout;

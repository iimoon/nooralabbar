import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToTop = () => {
  const location = useLocation();

  useEffect(() => {
    setTimeout(() => {
      window.scrollTo(0, 0);  // Force scroll to top with a slight delay
    }, 100);  // Adjust delay time as needed
  }, [location]);

  return null;
};

export default ScrollToTop;

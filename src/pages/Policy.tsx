import { useEffect, useState } from 'react';
import { Navbar2 } from '../components/Navbar2';
import { Footer2 } from '../components/Footer2';
import { PolicyText } from '../components/PolicyText';
import '../global.css';

export function Policy() {
  const [animateFooter, setAnimateFooter] = useState(false);

  useEffect(() => {
    setAnimateFooter(true);
  }, []);

  return (
    <div className={`policy-page ${animateFooter ? 'animate-footer' : ''}`}>
      <Navbar2 />
      <PolicyText />
      <Footer2 />
    </div>
  );
}


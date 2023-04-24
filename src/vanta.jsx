import { useEffect, useState, useRef } from 'react';
import WAVES from 'vanta/dist/vanta.waves.min.js'

export const useVantaGlobe = () => {
  const [vantaEffect, setVantaEffect] = useState();
  const myRef = useRef(null);
  useEffect(() => {
    if (!vantaEffect && window.innerWidth >= 768) {
      setVantaEffect(
        WAVES({
          el: myRef.current,
          mouseControls: true,
          touchControls: true,
          gyroControls: false,
          minHeight: 200.00,
          minWidth: 200.00,
          scale: 1.00,
          scaleMobile: 1.00,
          color: 0x0F0F12,

        })
      );
    }
    return () => {
      if (vantaEffect) vantaEffect.destroy();
    };
  }, [vantaEffect]);
  return myRef;
};
import { useEffect } from 'react';

const Background = () => {
  useEffect(() => {
    const pos = document.documentElement;

    const handleMouseMove = (e) => {
      pos.style.setProperty('--x', `${e.clientX}px`);
      pos.style.setProperty('--y', `${e.clientY}px`);
    };

    document.addEventListener('mousemove', handleMouseMove);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div className="back">
      <section className="section">
        <h1 className="title text-[3em] md:text-[7em] lg:text-[7em] font-bruno hidden md:block">
          TECKZITE
        </h1>
        <h1 className="title text-[3em] md:text-[7em] lg:text-[7em] font-bruno hidden md:block">
          2K25
        </h1>
      </section>
      <div className="light-effect"></div>
    </div>
  );
};

export default Background;

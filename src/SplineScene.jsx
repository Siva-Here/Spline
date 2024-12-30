import Spline from '@splinetool/react-spline';
import { useEffect, useRef, useState, useMemo } from 'react';
import './App.css';

function SplineScene() {
  const splineRef = useRef(null);
  const [isLoading, setIsLoading] = useState(true); // Track loading state
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768); // Detect mobile

  // Use useMemo to cache the Spline scene URL
  const splineSceneUrl = useMemo(
    () => 'https://prod.spline.design/vBkH7f54MF83U183/scene.splinecode',
    []
  );

  useEffect(() => {
    const adjustCameraForScreen = () => {
      if (splineRef.current) {
        if (isMobile) {
          splineRef.current.emit('setZoom', 0.5); // Adjust zoom level for mobile
          splineRef.current.emit('setPosition', { x: 0, y: 1, z: 10 }); // Move the camera for visibility
        } else {
          splineRef.current.emit('setZoom', 1.0); // Default zoom for desktop
          splineRef.current.emit('setPosition', { x: 0, y: 0, z: 6 }); // Default position for desktop
        }
      }
    };

    // Debounce resize event listener
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
      adjustCameraForScreen();
    };

    const debouncedResize = debounce(handleResize, 200);

    window.addEventListener('resize', debouncedResize);

    adjustCameraForScreen();

    return () => {
      window.removeEventListener('resize', debouncedResize);
    };
  }, [isMobile]);

  const debounce = (func, delay) => {
    let timer;
    return (...args) => {
      clearTimeout(timer);
      timer = setTimeout(() => func(...args), delay);
    };
  };

  return (
    <div className="spline-container z-1 relative">
      {isLoading && (
        <div className="absolute md:transform md:-translate-x-1/2 md:-translate-y-1/2 text-[1.5rem] text-white">
          <div className="loading-spinner"></div> {/* Optional spinner */}
          Loading...
        </div>
      )}
      { !isLoading ? (
        <Spline
          scene={splineSceneUrl}
          onLoad={(spline) => {
            splineRef.current = spline;
            setIsLoading(false); // Stop loading when the scene is fully loaded
          }}
          style={{
            zIndex: '2',
          }}
        />
      ) : (
        <div className="mobile-placeholder">
          <p>3D experience is simplified for mobile.</p>
        </div>
      )}
    </div>
  );
}

export default SplineScene;

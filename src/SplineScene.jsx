import Spline from '@splinetool/react-spline';
import { useEffect, useRef, useState } from 'react';
import './App.css';

function SplineScene() {
  const splineRef = useRef(null);
  const [isLoading, setIsLoading] = useState(true); // Track loading state

  useEffect(() => {
    const adjustCameraForScreen = () => {
      if (splineRef.current) {
        const isMobile = window.innerWidth < 768;

        if (isMobile) {
          splineRef.current.emit('setZoom', 0.5); // Adjust zoom level for mobile
          splineRef.current.emit('setPosition', { x: 0, y: 1, z: 10 }); // Move the camera for visibility
        } else {
          splineRef.current.emit('setZoom', 1.0); // Default zoom for desktop
          splineRef.current.emit('setPosition', { x: 0, y: 0, z: 6 }); // Default position for desktop
        }
      }
    };

    adjustCameraForScreen();

    window.addEventListener('resize', adjustCameraForScreen);

    return () => {
      window.removeEventListener('resize', adjustCameraForScreen);
    };
  }, []);

  return (
    <div className="spline-container z-1 relative"  >

      {isLoading && (
        <div
          style={{
            position: 'absolute',
           
            transform: 'translate(-50%, -50%)',
            fontSize: '1.5rem',
            color: '#ffffff',
          }}
        >
          <div className="loading-spinner"></div> {/* Optional spinner */}
          Loading...
        </div>
      )}
      <Spline
        scene="https://prod.spline.design/vBkH7f54MF83U183/scene.splinecode"
        onLoad={(spline) => {
          splineRef.current = spline;
          setIsLoading(false); // Stop loading when the scene is fully loaded
        }} style={{
          zIndex:"2"
        }}
      />
    </div>
  );
}

export default SplineScene;

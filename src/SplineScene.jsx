import Spline from '@splinetool/react-spline';
import { useEffect, useRef } from 'react';

function SplineScene() {
  const splineRef = useRef(null);

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
    <div className="spline-container">
      <Spline
        scene="https://prod.spline.design/vBkH7f54MF83U183/scene.splinecode"
        onLoad={(spline) => (splineRef.current = spline)}
      />
    </div>
  );
}

export default SplineScene;

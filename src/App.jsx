// import Spline from '@splinetool/react-spline';
// import './App.css';
// import { useEffect, useRef } from 'react';

// function App() {
//   const splineRef = useRef(null);

//   useEffect(() => {
//     const adjustCameraForMobile = () => {
//       if (splineRef.current) {
//         const isMobile = window.innerWidth < 768;

//         // Adjust camera settings for mobile and desktop
//         if (isMobile) {
//           splineRef.current.emit('setZoom', 0.1); // Zoom out further to fit the full object
//           splineRef.current.emit('setPosition', { x: 0, y: 1, z: 10 }); // Move the camera back for full visibility
//         } else {
//           splineRef.current.emit('setZoom', 1.0); // Default zoom for desktop
//           splineRef.current.emit('setPosition', { x: 0, y: 0, z: 6 }); // Default position for desktop
//         }
//       }
//     };

//     adjustCameraForMobile();

//     // Recalculate on window resize
//     window.addEventListener('resize', adjustCameraForMobile);

//     return () => {
//       window.removeEventListener('resize', adjustCameraForMobile);
//     };
//   }, []);

//   return (
//     <div className="spline-container">
//       {/* <Spline
//         scene="https://prod.spline.design/wUmPtyTB37ttOf71/scene.splinecode"
//         onLoad={(spline) => (splineRef.current = spline)}
//       /> */}
//     {/* <Spline scene="https://prod.spline.design/vBkH7f54MF83U183/scene.splinecode" /> */}
//     <Spline
//         scene="https://prod.spline.design/vBkH7f54MF83U183/scene.splinecode"
//         onLoad={(spline) => (splineRef.current = spline)}
//       />

//     </div>
//   );
// }

// export default App;




// import Spline from '@splinetool/react-spline';
// import './App.css';
// import { useEffect, useRef } from 'react';

// function App() {
//   const splineRef = useRef(null);

//   useEffect(() => {
//     const adjustCameraForScreen = () => {
//       if (splineRef.current) {
//         const isMobile = window.innerWidth < 768;

//         if (isMobile) {
//           // Set appropriate zoom and position for mobile screens
//           splineRef.current.emit('setZoom', 0.5); // Adjust zoom level for mobile
//           splineRef.current.emit('setPosition', { x: 0, y: 1, z: 10 }); // Move the camera for visibility
//         } else {
//           // Restore default settings for desktop
//           splineRef.current.emit('setZoom', 1.0); // Default zoom for desktop
//           splineRef.current.emit('setPosition', { x: 0, y: 0, z: 6 }); // Default position for desktop
//         }
//       }
//     };

//     adjustCameraForScreen();

//     // Recalculate on window resize
//     window.addEventListener('resize', adjustCameraForScreen);

//     return () => {
//       window.removeEventListener('resize', adjustCameraForScreen);
//     };
//   }, []);

//   return (
//     <div className="spline-container">
//       <Spline
//         scene="https://prod.spline.design/vBkH7f54MF83U183/scene.splinecode"
//         onLoad={(spline) => (splineRef.current = spline)}
//       />
//     </div>
//   );
// }

// export default App;
import  { lazy, Suspense } from 'react';
import './App.css';

// Lazy load components
const SplineScene = lazy(() => import('./SplineScene'));
const ParticlesComponent = lazy(() => import('./Particlejs'));
const Backgound = lazy(() => import('./Backgound'));

function App() {
  return (
    <div className="app">
      <Suspense fallback={<div className="loading">Loading background...</div>}>
        <Backgound id="back" />
      </Suspense>

      <Suspense fallback={<div className="loading">Loading scene...</div>}>
        <SplineScene />
      </Suspense>

      <Suspense fallback={<div className="loading">Loading particles...</div>}>
        <ParticlesComponent id="particles" />
      </Suspense>
    </div>
  );
}

export default App;

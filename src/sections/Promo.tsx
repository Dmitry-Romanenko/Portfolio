import { Canvas } from '@react-three/fiber';
import Character from '../components/Character';
import Navbar from '../components/Navbar';
import { Suspense } from 'react';
import Loader from '../components/Loader';

const Promo = () => {
  return (
    <section id="promo" className="relative min-h-screen w-full">
      <Navbar />
      <div className="absolute left-1/2 top-[65px] z-40 max-w-[230px] translate-x-[-50%] text-center sm:top-[90px] sm:max-w-[500px]">
        <p className="text-base font-bold text-white sm:text-xl lg:text-2xl">Hi! I’m Dmitry</p>
        <p className="glow-text mt-1 bg-gradient-to-r from-gradientStart to-gradientEnd bg-clip-text text-xl font-black capitalize text-transparent sm:text-2xl lg:text-4xl">
          Welcome to My Portfolio!
        </p>
      </div>
      <a
        href="#projects"
        className="absolute bottom-5 left-1/2 z-40 flex w-[200px] -translate-x-1/2 items-center justify-center gap-1 rounded-lg bg-surface-twilight px-6 py-2 text-white shadow-glow transition duration-300 hover:shadow-[0_0_30px_10px_rgba(236,108,192,0.8)]"
      >
        <span className="mr-2 h-2.5 w-2.5 rounded-full bg-white shadow-circle-glow"></span>
        <span className="glow-text">Explore Projects</span>
      </a>

      <Canvas style={{ height: '100vh' }} camera={{ position: [1, 1.5, 2.5], fov: 40 }}>
        <Suspense fallback={<Loader />}>
          <directionalLight position={[0, 5, 5]} intensity={2} />
          <group position={[0, -1, 0]}>
            <Character scale={0.9} />
          </group>
        </Suspense>
      </Canvas>
    </section>
  );
};

export default Promo;

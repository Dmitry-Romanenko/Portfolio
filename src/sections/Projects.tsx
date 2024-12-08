import { Canvas, useFrame } from '@react-three/fiber';
import Laptop from '../components/Laptop';
import git from '../assets/icons/Git.svg';
import live from '../assets/icons/live.svg';
import { projects } from '../constants';
import { MutableRefObject, ReactNode, Suspense, useEffect, useRef, useState } from 'react';
import classNames from 'classnames';
import { useMediaQuery } from 'react-responsive';
import Loader from '../components/Loader';
import { Group } from 'three';

const RotatingGroup = ({ children }: { children: ReactNode }) => {
  const groupRef: MutableRefObject<Group | null> = useRef(null);
  useFrame(() => {
    if (groupRef.current) {
      const { rotation } = groupRef.current;
      rotation.y = Math.sin(Date.now() * 0.001) * 0.2;
    }
  });
  return <group ref={groupRef}>{children}</group>;
};

const Projects = () => {
  const projectsCount = projects.length;
  const [currentIdx, setCurrentIdx] = useState(0);
  const [currentProject, setCurrentProject] = useState(projects[currentIdx]);
  const pathRef = useRef<null | HTMLDivElement>(null);
  const handRef = useRef<null | HTMLDivElement>(null);
  const isMobile = useMediaQuery({ query: '(max-width: 768px)' });
  const sectionRef = useRef<HTMLDivElement | null>(null);

  const scrollToSection = () => {
    if (sectionRef.current && isMobile) {
      sectionRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const onClickNext = () => {
    if (projects.length - 1 === currentIdx) {
      setCurrentIdx(0);
    } else {
      setCurrentIdx((prev) => prev + 1);
    }
    scrollToSection();
  };

  const onClickPrev = () => {
    if (currentIdx <= 0) {
      setCurrentIdx(projectsCount - 1);
    } else {
      setCurrentIdx((prev) => prev - 1);
    }
    scrollToSection();
  };

  const onClickToIndx = (idx: number) => {
    setCurrentIdx(idx);
    scrollToSection();
  };

  useEffect(() => {
    setCurrentProject(projects[currentIdx]);
  }, [currentIdx]);

  useEffect(() => {
    if (pathRef.current && handRef.current) {
      pathRef.current.style.animation = 'swipe-dot 2s 0.5s infinite';
      handRef.current.style.animation = 'swipe-hand 2s infinite';
    }
  }, []);

  return (
    <section
      ref={sectionRef}
      id="projects"
      className="section-padding bg-[url('./assets/ornaments/proj-section-ornament.svg')] bg-cover bg-[center_65%] bg-no-repeat"
    >
      <div className="container">
        <h2 className="section-title">My Projects</h2>

        <div className="grid grid-cols-1 gap-4 xl:grid-cols-2">
          <div className="relative flex min-h-[300px] overflow-hidden rounded-[2rem] bg-surface-nightfall p-5 text-white before:absolute before:left-0 before:right-0 before:top-0 before:z-[1] before:h-full before:w-full before:bg-transparent before:bg-[url('./assets/textures/noise.svg')] before:bg-repeat before:opacity-[0.12] before:content-[''] md:p-8 xl:min-h-[500px] xl:items-center">
            <div className="z-10 w-full">
              <div className="glow-text mb-5 text-center text-2xl font-bold md:text-left">
                {currentProject.title}
              </div>
              <div className="mb-5 text-left text-base font-normal">{currentProject.text}</div>
              <div className="mb-6 flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
                <div className="m-auto flex w-[250px] flex-wrap justify-center gap-2 md:m-0 md:justify-normal">
                  {currentProject.stack.map((logo, idx) => {
                    return (
                      <div
                        key={idx}
                        className="flex h-10 w-10 items-center justify-center rounded-lg bg-surface-nightfall-deep"
                      >
                        <img className="z-2 relative h-5 w-5 object-contain" src={logo} alt="" />
                      </div>
                    );
                  })}
                </div>
                <div className="glow-text flex justify-center gap-3">
                  {currentProject.github && (
                    <a
                      href={currentProject.github}
                      className="flex items-center justify-center gap-2"
                    >
                      <span>Github</span>
                      <img className="z-2 relative h-5 w-5 object-contain" src={git} alt="" />
                    </a>
                  )}
                  {currentProject.github && currentProject.live && <span>/</span>}
                  {currentProject.live && (
                    <a
                      href={currentProject.live}
                      className="flex items-center justify-center gap-2"
                    >
                      <span>Live</span>
                      <img className="z-2 relative h-5 w-5 object-contain" src={live} alt="" />
                    </a>
                  )}
                </div>
              </div>

              <div className="m-auto flex items-center justify-center gap-4">
                <button
                  onClick={onClickPrev}
                  className="glow-text flex h-8 w-8 items-center justify-center rounded-full bg-black bg-opacity-50 text-sm text-white hover:bg-surface-nightfall-deep"
                >
                  &#10094;
                </button>
                <div className="flex max-w-[150px] flex-wrap justify-center gap-2" id="dots">
                  {[...new Array(projectsCount)].map((_, idx) => (
                    <button
                      onClick={() => onClickToIndx(idx)}
                      key={idx}
                      className={classNames(
                        { 'bg-opacity-70': idx === currentIdx },
                        { 'bg-opacity-30': idx !== currentIdx },
                        'h-3 w-3 cursor-pointer rounded-full bg-white transition-colors duration-300'
                      )}
                    ></button>
                  ))}
                </div>
                <button
                  onClick={onClickNext}
                  className="glow-text flex h-8 w-8 items-center justify-center rounded-full bg-black bg-opacity-50 text-sm text-white hover:bg-surface-nightfall-deep"
                >
                  &#10095;
                </button>
              </div>
            </div>
          </div>
          <div className="relative row-start-1 h-[250px] overflow-hidden rounded-[2rem] sm-576:h-[350px] sm:min-h-[400px] xl:row-auto xl:min-h-[500px]">
            <Canvas style={{ width: '100%' }} camera={{ position: [3, 7, 10], fov: 30 }}>
              <Suspense fallback={<Loader />}>
                <directionalLight position={[0, 10, 0]} intensity={5} />
                <RotatingGroup>
                  <group scale={1.5} position={[0, -1.5, 0]}>
                    <Laptop texture={currentProject.img} />
                  </group>
                </RotatingGroup>
              </Suspense>
            </Canvas>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;

import { useEffect, useRef } from 'react';
import Globe, { GlobeMethods } from 'react-globe.gl';
import { getGlobeArcs } from '../constants';
import classNames from 'classnames';

export type AboutCardProps = {
  hue1?: number;
  hue2?: number;
  title: string;
  icon: string;
  text: string;
  globe?: boolean;
};

const AboutCard = ({
  hue1 = 210,
  hue2 = 238,
  title,
  icon,
  text,
  globe = false,
}: AboutCardProps) => {
  const ref = useRef<undefined | GlobeMethods>(undefined);

  useEffect(() => {
    if (ref.current) {
      ref.current.controls().enableZoom = false;
    }
  }, [ref]);

  return (
    <div
      style={{
        background: `
                linear-gradient(40deg, #121212, #121212) padding-box,
                linear-gradient(135deg, hsl(${hue1}, 85%, 70%) 0%, #251a20, #251a20, hsl(${hue2}, 70%, 55%) 100%) border-box
            `,
      }}
      className={classNames(
        {
          'md:col-start-1 md:col-end-3 md:row-start-2 lg:col-start-2 lg:row-start-1 lg:row-end-3 xl:col-start-3 xl:row-start-1 xl:row-end-3':
            globe,
        },
        'relative overflow-hidden rounded-[1.25rem] border-2 border-solid border-transparent px-8 py-4 text-center text-white'
      )}
    >
      <div
        style={{
          background: `linear-gradient(140deg, hsl(${hue1}, 70%, 50%) 3%, hsl(${hue2}, 95%, 45%) 100%)`,
        }}
        className="absolute h-[60px] w-[60px] rounded-[2rem] blur-lg"
      ></div>
      <div className="absolute h-[40px] w-[40px] rounded-3xl blur-lg"></div>
      <div
        style={{
          background: `linear-gradient(50deg, hsl(${hue1}, 70%, 10%) 5%, hsl(${hue2}, 68%, 40%) 100%)`,
        }}
        className="absolute left-[20px] top-[10px] z-[1] h-[40px] w-[28px] scale-[12] blur-lg"
      ></div>
      <div className="z-25 relative left-0 flex items-center gap-2.5">
        <div
          style={{
            background: `linear-gradient(140deg, hsl(${hue1}, 75%, 20%) 3%, hsl(${hue2}, 65%, 45%) 100%)`,
          }}
          className="relative z-[2] h-[60px] w-[60px] rounded-[2rem]"
        >
          <div
            style={{
              background: `linear-gradient(140deg, hsl(${hue1}, 70%, 40%) 3%, hsl(${hue2}, 95%, 45%) 100%)`,
            }}
            className="absolute inset-0 z-[2] m-auto h-[40px] w-[40px] rounded-[2rem]"
          ></div>
          <span className="icon absolute left-1/2 top-1/2 z-20 -translate-x-1/2 -translate-y-1/2 transform text-lg">
            {icon}
          </span>
        </div>
        <p className="relative z-10 text-base font-bold">{title}</p>
      </div>
      {globe && (
        <div className="relative z-40 flex w-full justify-center">
          <Globe
            ref={ref}
            width={290}
            height={290}
            backgroundColor="rgba(0,0,0,0)"
            globeImageUrl="//unpkg.com/three-globe/example/img/earth-dark.jpg"
            arcsData={getGlobeArcs(10)}
            arcColor={'color'}
            arcDashLength={() => Math.random()}
            arcDashGap={() => Math.random()}
            arcDashAnimateTime={() => Math.random() * 4000 + 500}
          />
        </div>
      )}
      <div className="relative z-[3] my-3 text-left text-sm font-normal md:text-base">{text}</div>

      {globe && (
        <a
          href="#contacts"
          className="relative z-10 flex w-[145px] items-center justify-center gap-1 rounded-lg bg-surface-twilight px-1 py-1 text-white transition duration-300"
        >
          <span className="mr-2 h-2.5 w-2.5 rounded-full bg-white shadow-circle-glow"></span>
          <span className="glow-text text-sm md:text-base">Contact me</span>
        </a>
      )}
    </div>
  );
};

export default AboutCard;

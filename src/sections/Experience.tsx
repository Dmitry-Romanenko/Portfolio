import { experiences } from '../constants';

const Experience = () => {
  return (
    <section id="experience" className="section-padding">
      <div className="container">
        <h2 className="section-title">Experience</h2>
        <ol className="relative max-w-[900px] border-s border-surface-cloudy">
          {experiences.map((item, idx) => {
            return (
              <li key={idx} className="mb-10 ms-4">
                <div className="absolute -start-1.5 mt-1.5 h-3 w-3 rounded-full bg-white shadow-circle-glow"></div>
                <time className="mb-1 text-sm font-normal leading-none text-gray-300">
                  {item.time}
                </time>
                <h3 className="glow-text text-lg font-bold text-white">{item.title}</h3>
                <p className="mb-4 font-normal text-gray-300">{item.text}</p>
              </li>
            );
          })}
        </ol>
      </div>
    </section>
  );
};

export default Experience;

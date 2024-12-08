import AboutCard from '../components/AboutCard';
import { aboutCards } from '../constants';
const About = () => {
  return (
    <>
      <section
        id="about"
        className="section-padding bg-[url('./assets/ornaments/about-section-ornament.svg')] bg-cover bg-center bg-no-repeat"
      >
        <div className="container">
          <h2 className="section-title">About me</h2>
          <div className="grid grid-cols-[minmax(300px,_440px)] justify-center gap-5 md:grid-cols-2 xl:grid-cols-3">
            {aboutCards.map((card, index) => (
              <AboutCard key={index} {...card} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default About;

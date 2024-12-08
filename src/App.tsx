import About from './sections/About';
import Contacts from './sections/Contacts';
import Experience from './sections/Experience';
import Projects from './sections/Projects';
import Promo from './sections/Promo';

const App = () => {
  return (
    <main>
      <Promo />
      <About />
      <Experience />
      <Projects />
      <Contacts />
    </main>
  );
};

export default App;

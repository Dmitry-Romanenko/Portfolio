import { useState } from 'react';
import classNames from 'classnames';

const Navbar = () => {
  const [isClosed, setIsClosed] = useState(true);

  const toggleMenu = () => setIsClosed((prev) => !prev);

  return (
    <menu className="absolute top-0 z-50 w-full">
      <nav className="flex h-16 items-center justify-between bg-surface-nightfall-deep px-5">
        <div className="text-xl font-black text-white">Dmitry Dev</div>
        <button
          onClick={toggleMenu}
          className={classNames(
            { 'shadow-burger-glow': !isClosed },
            'flex h-10 w-10 flex-col gap-2 rounded-lg border-[1px] border-primary-blossom-dark p-2 sm:hidden'
          )}
        >
          <span className="block h-[2px] w-full bg-white"></span>
          <span className="block h-[2px] w-full bg-white"></span>
          <span className="block h-[2px] w-full bg-white"></span>
        </button>

        <ul className="glow-text hidden gap-9 text-base font-normal text-white sm:flex">
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#experience">Experience</a>
          </li>
          <li>
            <a href="#projects">Projects</a>
          </li>
          <li>
            <a href="#contacts">Contacts</a>
          </li>
        </ul>
      </nav>

      <nav
        className={classNames(
          'w-full overflow-hidden bg-surface-nightfall-deep transition-all duration-500 ease-in-out sm:hidden',
          {
            'max-h-0': isClosed,
            'max-h-screen': !isClosed,
          }
        )}
      >
        <ul className="glow-text mx-3 mb-4 mt-2 flex flex-col gap-1 rounded-md bg-surface-twilight p-2 text-base font-bold text-white">
          <li className="rounded-md bg-primary-blossom-dark p-2 shadow-glow">
            <a href="#promo">Home</a>
          </li>
          <li className="rounded-md p-2">
            <a href="#about">About</a>
          </li>
          <li className="rounded-md p-2">
            <a href="#experience">Experience</a>
          </li>
          <li className="rounded-md p-2">
            <a href="#projects">Projects</a>
          </li>
          <li className="rounded-md p-2">
            <a href="#contacts">Contacts</a>
          </li>
        </ul>
      </nav>
    </menu>
  );
};

export default Navbar;

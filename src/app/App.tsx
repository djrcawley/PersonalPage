import { useEffect, useState } from 'react';
import { BsLinkedin, BsInstagram, BsGithub, BsMoon, BsSun } from 'react-icons/bs';
import BackgroundSVG from '../components/BackgroundSVG';

type Theme = 'light' | 'dark';

function App() {
  const getInitialTheme = (): Theme => {
    if (typeof window === 'undefined') {
      return 'dark';
    }

    const storedTheme = window.localStorage.getItem('theme');
    if (storedTheme === 'light' || storedTheme === 'dark') {
      return storedTheme;
    }

    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  };

  const [theme, setTheme] = useState<Theme>(getInitialTheme);

  useEffect(() => {
    const root = document.documentElement;
    if (theme === 'dark') {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
    window.localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((current) => (current === 'dark' ? 'light' : 'dark'));
  };

  return (
    <main
      className="relative flex min-h-screen flex-col items-center justify-center bg-transparent text-slate-900 transition-colors duration-300 dark:text-white bg-cover bg-center bg-no-repeat"
    >
      <BackgroundSVG className="absolute inset-0 z-0 w-full h-full pointer-events-none" />
      <button
        type="button"
        onClick={toggleTheme}
        aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
        title={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
        className="absolute top-6 right-6 z-100 flex cursor-default items-center justify-center h-12 w-12 rounded-full border border-slate-300 bg-white/60 text-slate-900 shadow-sm hover:cursor-pointer hover:bg-white dark:border-slate-700 dark:bg-slate-900/60 dark:text-slate-100 dark:hover:bg-slate-800"
      >
        {theme === 'dark' ? <BsSun className="h-5 w-5" /> : <BsMoon className="h-5 w-5" />}
        <span className="sr-only">{theme === 'dark' ? 'Light Mode' : 'Dark Mode'}</span>
      </button>

      <div className='relative z-10 flex flex-col justify-center items-center flex-1'>
        <span className="mb-1 text-2xl font-jost font-bold text-slate-600 dark:text-[#D9D9D9]">Hello, my name is</span>
        <div className='mb-1.5 h-1 w-64 bg-slate-300 dark:bg-slate-600'></div>
        <span className='text-slate-900 md:text-7xl text-6xl font-jost font-bold mb-1.5 text-center dark:text-white'>Dennis Cawley</span>
        <span className="text-2xl font-jost font-bold text-slate-600 dark:text-[#D9D9D9]">Software Engineer</span>
      </div>
      <div className="relative z-10 flex flex-row items-center justify-center w-screen h-20">
        <a
          href="https://github.com/djrcawley"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
          className="mx-6 flex cursor-default h-12 w-12 items-center justify-center rounded-full text-slate-700 hover:cursor-pointer hover:bg-slate-800 hover:text-white"
        >
          <BsGithub className="text-3xl" />
        </a>

        <a
          href="https://www.linkedin.com/in/dennis-cawley/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
          className="mx-6 flex cursor-default h-12 w-12 items-center justify-center rounded-full text-slate-700 hover:cursor-pointer hover:bg-[#0A66C2] hover:text-white"
        >
          <BsLinkedin className="text-3xl" />
        </a>

        <a
          href="https://www.instagram.com/djrcawley/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Instagram"
          className="mx-6 flex cursor-default h-12 w-12 items-center justify-center rounded-full text-slate-700 hover:cursor-pointer hover:bg-pink-500 hover:text-white"
        >
          <BsInstagram className="text-3xl" />
        </a>
      </div>
    </main>
  );
}

export default App;

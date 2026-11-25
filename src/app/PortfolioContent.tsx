import { useLayoutEffect, useRef, type FocusEvent } from 'react';
import { BsArrowUp } from 'react-icons/bs';
import type { Entry, Section } from './portfolio';

function Entries({ items }: { items: Entry[] }) {
  return (
    <div className="grid content-start gap-6">
      {items.map((item, index) => (
        <div key={index}>
          {item.title && <h3 className="mb-2 text-lg font-bold">{item.title}</h3>}
          {item.dates && <p className="mb-2 text-sm font-medium text-slate-700 dark:text-slate-300">{item.dates}</p>}
          {item.description && <p className="max-w-prose leading-7 text-slate-800 dark:text-slate-200">{item.description}</p>}
          {item.bullets && (
            <ul className="max-w-prose list-disc space-y-1 pl-5 leading-7 text-slate-800 dark:text-slate-200">
              {item.bullets.map(bullet => <li key={bullet}>{bullet}</li>)}
            </ul>
          )}
          {item.credentials && (
            <ul className="space-y-3">
              {item.credentials.map(credential => (
                <li key={credential.href}>
                  <a href={credential.href} target="_blank" rel="noopener noreferrer" className="text-sm font-semibold underline decoration-current/50 underline-offset-4 hover:decoration-current">
                    {credential.name}
                  </a>
                  <p className="mt-1 text-xs text-slate-700 dark:text-slate-300">Issued {credential.issued}</p>
                </li>
              ))}
            </ul>
          )}
          {item.tags?.length ? <ul className="mt-4 flex flex-wrap gap-2">
            {item.tags.map(tag => <li key={tag} className="rounded-full border border-slate-900/15 bg-white/30 px-3 py-1 text-xs font-medium dark:border-white/20 dark:bg-white/10">{tag}</li>)}
          </ul> : null}
          {item.links?.map(link => <a key={link.href} href={link.href} className="mr-4 mt-4 inline-block font-semibold underline decoration-current/50 underline-offset-4 hover:decoration-current">{link.label}</a>)}
        </div>
      ))}
    </div>
  );
}

export default function PortfolioContent({ sections }: { sections: Section[] }) {
  const portfolioRef = useRef<HTMLDivElement>(null);
  const navigationRef = useRef<HTMLElement>(null);

  useLayoutEffect(() => {
    const portfolio = portfolioRef.current;
    const navigation = navigationRef.current;
    if (!portfolio || !navigation) return;

    const sidebars = portfolio.querySelectorAll<HTMLElement>('.portfolio-sidebar');

    // Paint the same slice of the opaque gradient that the navigation covers.
    const syncGradientOffset = () => {
      const offset = portfolio.getBoundingClientRect().top - navigation.getBoundingClientRect().top;
      navigation.style.setProperty('--portfolio-gradient-offset', `${offset}px`);
    };

    const syncLayout = () => {
      const navHeight = navigation.getBoundingClientRect().height;
      portfolio.style.setProperty('--portfolio-nav-height', `${navHeight}px`);
      navigation.style.setProperty('--portfolio-gradient-height', `${portfolio.getBoundingClientRect().height}px`);
      sidebars.forEach(sidebar => {
        const stickyTop = parseFloat(getComputedStyle(sidebar).top);
        const fits = stickyTop + sidebar.getBoundingClientRect().height <= document.documentElement.clientHeight;
        sidebar.toggleAttribute('data-sticky', fits);
      });
      syncGradientOffset();
    };

    syncLayout();
    const observer = new ResizeObserver(syncLayout);
    observer.observe(portfolio);
    observer.observe(navigation);
    sidebars.forEach(sidebar => observer.observe(sidebar));
    window.addEventListener('resize', syncLayout);
    window.addEventListener('scroll', syncGradientOffset, { passive: true });
    return () => {
      observer.disconnect();
      window.removeEventListener('resize', syncLayout);
      window.removeEventListener('scroll', syncGradientOffset);
    };
  }, [sections]);

  const keepFocusVisible = ({ target, currentTarget }: FocusEvent<HTMLDivElement>) => {
    const navigation = navigationRef.current;
    if (!navigation || target === currentTarget || navigation.contains(target) || target.matches('.portfolio-section')) return;

    // Check after the browser has applied its own focus scrolling.
    window.requestAnimationFrame(() => {
      if (document.activeElement !== target || !navigation.isConnected) return;

      const navBounds = navigation.getBoundingClientRect();
      if (navBounds.top > 1 || navBounds.bottom <= 0) return;

      const top = target.getBoundingClientRect().top;
      const safeTop = navBounds.bottom + 8;
      if (top < safeTop) {
        window.scrollBy({ top: top - safeTop, behavior: 'instant' });
      }
    });
  };

  return (
    <div ref={portfolioRef} id="portfolio" tabIndex={-1} onFocusCapture={keepFocusVisible} className="portfolio-content px-6 pb-16">
      <div className="mx-auto max-w-4xl">
        <nav ref={navigationRef} aria-label="Portfolio sections" className="portfolio-nav sticky top-0 z-20 grid grid-cols-2 content-center gap-1 border-b border-slate-900/20 px-1 py-2 md:flex md:items-center md:justify-center md:gap-2 md:py-3 dark:border-white/20">
          {sections.map(section => (
            <a key={section.id} href={'#' + section.id} className="flex min-h-10 items-center justify-center rounded-full px-2 text-center text-xs font-semibold hover:bg-white/40 sm:px-3 sm:text-sm dark:hover:bg-white/10">{section.title}</a>
          ))}
        </nav>
        {sections.map(section => (
          <section key={section.id} id={section.id} tabIndex={-1} aria-labelledby={section.id + '-heading'}
            className={`portfolio-section grid gap-6 border-b border-slate-900/20 py-10 last:border-b-0 md:py-12 dark:border-white/20 ${section.supportingItems?.length ? '' : 'md:grid-cols-[1fr_2fr]'}`}>
            <h2 id={section.id + '-heading'} className="font-jost text-2xl font-bold after:mt-3 after:block after:h-1 after:w-12 after:bg-slate-700/35 dark:after:bg-slate-400/45">{section.title}</h2>
            {section.supportingItems?.length ? (
              <div className="grid items-start gap-8 md:grid-cols-[minmax(0,2fr)_minmax(0,1fr)]">
                <Entries items={section.items} />
                <div className="portfolio-sidebar rounded-2xl border border-slate-900/15 bg-white/20 p-5 dark:border-white/15 dark:bg-white/5">
                  <Entries items={section.supportingItems} />
                </div>
              </div>
            ) : <Entries items={section.items} />}
          </section>
        ))}
        <footer className="flex justify-center border-t border-slate-900/20 pt-6 dark:border-white/20">
          <a href="#top"
            className="inline-flex items-center gap-3 rounded-full px-4 py-3 text-sm font-semibold underline underline-offset-4 hover:bg-white/40 focus-visible:outline-2 focus-visible:outline-offset-4 dark:hover:bg-white/10">
            Back to top
            <BsArrowUp aria-hidden="true" />
          </a>
        </footer>
      </div>
    </div>
  );
}

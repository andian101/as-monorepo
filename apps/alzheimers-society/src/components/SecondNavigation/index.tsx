import "./secondNavigation.css";

export const SecondNavigation = () => {
  return (
    <div className='col-lg-4 col-xl-3'>
      <nav
        role='navigation'
        aria-labelledby='block-alzheimer-sectionnavigation-menu'
        id='block-alzheimer-sectionnavigation'
      >
        <div
          className='visually-hidden section-navigation__level-1'
          id='block-alzheimer-sectionnavigation-menu'
        >
          <a
            href='/about-dementia/worried-about-memory-problems'
            data-once='navigation'
          >
            Worried about memory problems
          </a>
        </div>

        <ul className='section-navigation'>
          <li className='section-navigation__item'>
            <a
              href='/about-dementia/worried-about-memory-problems'
              className='section-navigation__link section-navigation__link--active section-navigation__link--with-sub'
              data-drupal-link-system-path='node/1001'
              data-once='navigation sectionNavItem'
            >
              Worried about memory problems
            </a>

            <ul className='section-navigation section-navigation--sub section-navigation--sub-1'>
              <li className='section-navigation__item'>
                <a
                  href='/about-dementia/worried-about-memory-problems/causes-of-memory-problems'
                  className='section-navigation__link section-navigation__link--sub section-navigation__link--sub-1'
                  data-drupal-link-system-path='node/896'
                  data-once='navigation sectionNavItem'
                >
                  Causes of memory problems
                </a>
              </li>

              <li className='section-navigation__item'>
                <a
                  href='/about-dementia/worried-about-memory-problems/do-i-have-dementia-signs'
                  className='section-navigation__link section-navigation__link--active section-navigation__link--sub section-navigation__link--sub-1 is-active'
                  data-drupal-link-system-path='node/961'
                  data-once='navigation sectionNavItem'
                  aria-current='page'
                >
                  Do I have dementia?
                </a>
              </li>

              <li className='section-navigation__item'>
                <a
                  href='/about-dementia/worried-about-memory-problems/talking-someone-about-memory-problems'
                  className='section-navigation__link section-navigation__link--sub section-navigation__link--sub-1'
                  data-drupal-link-system-path='node/996'
                  data-once='navigation sectionNavItem'
                >
                  Talking to someone about their memory problems
                </a>
              </li>
            </ul>
          </li>
        </ul>
      </nav>
    </div>
  );
};

"use client";

export const Subsection = ({ data, open }) => {
  const d1 = data.articleCollection.items;
  const d2 = data.list1Collection.items;
  const d3 = data.list2Collection.items;
  const [first, ...rest] = d1;
  const [first2, ...rest2] = d2;
  const [first3, ...rest3] = d3;

  return (
    <ul
      className={
        "menu menu--desktop menu--sub menu--sub-1 list--inline " +
        (open ? "menu--sub--expanded" : "")
      }
    >
      <div className='row menu--desktop__submenu-container'>
        <div className='col'>
          <li className='menu__item'>
            <a
              className='menu__link menu__link--with-sub menu__link--sub menu__link--sub-1'
              href={`/about-dementia/${first.slug}`}
              data-once='header'
            >
              {first.descriptionTitle}
            </a>
            <ul className='menu menu--desktop menu--sub menu--sub-1 menu--sub-2 list--inline'>
              {rest.map((el) => (
                <li key={el.descriptionTitle} className='menu__item'>
                  <a
                    className='menu__link menu__link--with-sub menu__link--sub menu__link--sub-1 menu__link--sub-2'
                    href={`/about-dementia/${el.slug}`}
                    data-once='header'
                  >
                    {el.descriptionTitle}
                  </a>
                </li>
              ))}
            </ul>
          </li>
        </div>
        <div className='col'>
          <li className='menu__item'>
            <a
              className='menu__link menu__link--with-sub menu__link--sub menu__link--sub-1'
              href={`/about-dementia/${first2.slug}`}
              data-once='header'
            >
              {first2.descriptionTitle}
            </a>
            <ul className='menu menu--desktop menu--sub menu--sub-1 menu--sub-2 list--inline'>
              {rest2.map((el) => (
                <li key={el.descriptionTitle} className='menu__item'>
                  <a
                    className='menu__link menu__link--with-sub menu__link--sub menu__link--sub-1 menu__link--sub-2'
                    href={`/about-dementia/${el.slug}`}
                    data-once='header'
                  >
                    {el.descriptionTitle}
                  </a>
                </li>
              ))}
            </ul>
          </li>
        </div>
        <div className='col'>
          <li className='menu__item'>
            <a
              className='menu__link menu__link--with-sub menu__link--sub menu__link--sub-1'
              href={`/about-dementia/${first3.slug}`}
              data-once='header'
            >
              {first3.descriptionTitle}
            </a>
            <ul className='menu menu--desktop menu--sub menu--sub-1 menu--sub-2 list--inline'>
              {rest3.map((el) => (
                <li key={el.descriptionTitle} className='menu__item'>
                  <a
                    className='menu__link menu__link--with-sub menu__link--sub menu__link--sub-1 menu__link--sub-2'
                    href={`/about-dementia/${el.slug}`}
                    data-once='header'
                  >
                    {el.descriptionTitle}
                  </a>
                </li>
              ))}
            </ul>
          </li>
        </div>
      </div>
    </ul>
  );
};

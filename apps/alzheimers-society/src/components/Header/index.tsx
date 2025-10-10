"use client";

import Link from "next/link";
import "./header.css";
import "./base.css";
import "./tiles-grid.css";
import { DesktopHeader } from "./DesktopHeader";
import { Button } from "../../../../../packages/components/Button";

export const Header = ({ data, subNavData }) => {
  return (
    <header className='header' id='header'>
      <div className='header__top'>
        <div className='container'>
          <div className='row'>
            <div className='header__left-col col-6 col-md-2'>
              <div className='header__logo'>
                <Link href='/' className='header__logo-link' data-once='header'>
                  <picture>
                    <source
                      srcSet='https://www.alzheimers.org.uk/cc/themes/custom/alzheimer/images/logo.png'
                      media='(min-width: 1048px)'
                    />
                    <img
                      src='https://cc.alzheimers.org.uk/themes/custom/alzheimer/images/logo-mobile.png'
                      alt="Alzheimer's Society logo"
                    />
                  </picture>
                </Link>
              </div>
            </div>
            <div className='header__right-col col-6 col-md-10'>
              <nav
                role='navigation'
                aria-labelledby='block-alzheimer-headerlinks-menu'
                id='block-alzheimer-headerlinks'
              >
                <h2
                  className='visually-hidden'
                  id='block-alzheimer-headerlinks-menu'
                >
                  Header links
                </h2>

                <ul
                  id='block-alzheimer-headerlinks'
                  className='menu list--inline'
                >
                  <li className='menu__item'>
                    <a
                      className='menu__link'
                      href='https://shop.alzheimers.org.uk/?_adal_sd=www.alzheimers.org.uk.1753780253042&amp;_adal_ca=so%3Dalzheimers.okta.com%26me%3Dreferral%26ca%3Dreferral%26co%3Dhttps%253A%252F%252Falzheimers.okta.com%252F%26ke%3D(not%2520set).1753780253042&amp;_adal_cw=1750689353262.1753780253042&amp;_adal_id=19fdbad3-2bfd-4463-b949-6b15a5d70118.1750689353.30.1753779563.1753366594.33458ff4-3cd7-4249-acba-3ebdc1624c23.1753780253042&amp;_gl=1*1gskq73*_gcl_au*MTU5ODI2NzExOC4xNzUwNjg5Mjc0LjQzOTIwOTk3NS4xNzUyODM2Njk5LjE3NTI4MzcxMDQ.*FPAU*MTU5ODI2NzExOC4xNzUwNjg5Mjc0*_ga*ODgxNjE3NjMxLjE3NTA2ODkyNzQ.*_ga_48QXEDBFR0*czE3NTM3NzkwNjckbzMxJGcxJHQxNzUzNzc5NTYyJGo2MCRsMCRoNTI4NTE2NTUz*_fplc*UlhtRDlwaHVGNlJCMHRDMExldjE1V1R3cE1jTiUyQmdIYWhvRTZ5a283d05Wejc1dmwxb1cwRDJtdlZ4UTVwaXBsRjNIcXZFNGp3JTJCTWJPVklLVXR2b0olMkJrZ3lsWVNpNHhoa2prZThaVzNtRUVNUjRHN0w0UUtta2NES09EOFJRJTNEJTNE'
                      data-once='header'
                    >
                      Shop
                    </a>
                  </li>

                  <li className='menu__item'>
                    <a
                      className='menu__link'
                      href='https://www.alzheimers.org.uk/about-us/contact-us'
                      data-once='header'
                    >
                      Contact us
                    </a>
                  </li>

                  <li className='menu__item'>
                    <a
                      className='menu__link'
                      href='https://www.alzheimers.org.uk/dementia-professionals'
                      data-once='header'
                    >
                      Dementia professionals
                    </a>
                  </li>
                </ul>
              </nav>

              <div className='header__right-col__bottom'>
                <div className='header__support-line'>
                  <div id='block-alzheimer-supportline' className='block'>
                    <div className='text-long'>
                      <p>
                        <a
                          className='link'
                          href='https://www.alzheimers.org.uk/get-support/dementia-support-line'
                          data-once='header'
                        >
                          Dementia Support Line
                        </a>
                      </p>
                    </div>
                  </div>
                </div>
                <div className='header__search'>
                  <div
                    id='block-alzheimer-customsearchredirectblock'
                    className='block custom-search-redirect-form'
                  >
                    <form
                      action='/about-dementia/worried-about-memory-problems/do-i-have-dementia-signs'
                      method='post'
                      id='custom-search-redirect-form'
                      acceptCharset='UTF-8'
                    >
                      <div className='js-form-item form-item form-item--textfield__item'>
                        <label
                          htmlFor='edit-keywords'
                          className='visually-hidden js-form-required form-required form-item__label'
                        >
                          Search
                        </label>
                        <input
                          data-drupal-selector='edit-keywords'
                          type='text'
                          id='edit-keywords'
                          name='keywords'
                          value=''
                          onChange={() => {}}
                          size={60}
                          maxLength={128}
                          className='form-text required form-item__textfield'
                          required
                          aria-required='true'
                        />
                      </div>
                      <button
                        data-drupal-selector='edit-submit'
                        type='submit'
                        id='edit-submit'
                        name='op'
                        value='Search'
                        className='button js-form-submit form-submit'
                        data-once='header'
                      >
                        Search
                      </button>
                    </form>
                  </div>
                </div>

                <div className='header__donate-button'>
                  <div id='block-alzheimer-donate' className='block'>
                    <div className='text-long'>
                      <p style={{ marginLeft: "1em" }}>
                        <Button
                          link='https://www.alzheimers.org.uk/get-involved/donate'
                          title='Donate'
                          onClick={() => {}}
                          large
                          square
                        />
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <DesktopHeader data={data} subNavData={subNavData} />
    </header>
  );
};

"use client";

import Link from "next/link";
import "./footer.css";
import FacebookIcon from "@/images/svg/facebook";
import XIcon from "@/images/svg/x";

export const Footer = () => {
  return (
    <footer className='footer'>
      <div className='footer__main container'>
        <div className='footer__branding'>
          <Link href='/'>
            <img
              src='https://cc.alzheimers.org.uk/themes/custom/alzheimer/images/logo.png'
              alt="Alzheimer's Society logo"
            />
          </Link>
        </div>
        <div className='footer__menu'>
          <nav className='menu--footer-nav' aria-labelledby='menu-footer-title'>
            <h2
              className='heading heading--main heading--xsmall'
              id='menu-footer-title'
            >
              Useful links
            </h2>

            <ul className='menu menu--footer list--inline'>
              <li className='menu__item'>
                <a
                  className='menu__link'
                  href='https://www.alzheimers.org.uk/about-us/contact-us'
                  data-once='footer'
                >
                  Contact us
                </a>
              </li>

              <li className='menu__item'>
                <a
                  className='menu__link'
                  href='https://www.alzheimers.org.uk/about-us/working-us'
                  data-once='footer'
                >
                  Working for us
                </a>
              </li>

              <li className='menu__item'>
                <a
                  className='menu__link'
                  href='https://www.alzheimers.org.uk/about-us/news-and-media'
                  data-once='footer'
                >
                  Dementia news
                </a>
              </li>

              <li className='menu__item'>
                <a
                  className='menu__link'
                  href='https://www.alzheimers.org.uk/get-support'
                  data-once='footer'
                >
                  Dementia support services
                </a>
              </li>

              <li className='menu__item'>
                <a
                  className='menu__link'
                  href='https://www.alzheimers.org.uk/get-support/publications-factsheets'
                  data-once='footer'
                >
                  Publications and factsheets
                </a>
              </li>

              <li className='menu__item'>
                <a
                  className='menu__link'
                  href='https://www.alzheimers.org.uk/get-support/publications-factsheets/accessible-resources/information-in-your-language'
                  data-once='footer'
                >
                  Information in your language
                </a>
              </li>

              <li className='menu__item'>
                <a
                  className='menu__link'
                  href='https://www.alzheimers.org.uk/legal-information'
                  data-once='footer'
                >
                  Legal information
                </a>
              </li>

              <li className='menu__item'>
                <a
                  className='menu__link'
                  href='https://www.alzheimers.org.uk/legal-information/cookies'
                  data-once='footer'
                >
                  Cookies
                </a>
              </li>

              <li className='menu__item'>
                <a
                  className='menu__link'
                  href='https://www.alzheimers.org.uk/accessibility-statement'
                  data-once='footer'
                >
                  Accessibility statement
                </a>
              </li>
            </ul>
          </nav>
        </div>
        <div className='footer__social'>
          <nav className='social-menu' aria-label='Connect with us on'>
            <ul className='social-menu list--inline'>
              <li className='social-menu__item'>
                <a
                  className='social-menu__link'
                  href='https://en-gb.facebook.com/alzheimerssocietyuk/'
                  data-once='footer'
                >
                  <svg
                    className='social-menu__icon'
                    aria-hidden='true'
                    role='presentation'
                  >
                    <use xlinkHref='https://www.alzheimers.org.uk/cc/themes/custom/alzheimer/dist/icons.svg#facebook'></use>
                  </svg>
                  <span className='social-menu__text sr-only'>Facebook</span>
                </a>
              </li>

              <li className='social-menu__item'>
                <a
                  className='social-menu__link'
                  href='https://twitter.com/alzheimerssoc'
                  data-once='footer'
                >
                  <svg
                    className='social-menu__icon'
                    aria-hidden='true'
                    role='presentation'
                  >
                    <use xlinkHref='../../images/icons/x.svg'></use>
                  </svg>
                  <img src='../../images/icons/x.svg' alt='' />
                  <span className='social-menu__text sr-only'>X</span>
                </a>
              </li>

              <li className='social-menu__item'>
                <a
                  className='social-menu__link'
                  href='https://www.instagram.com/alzheimerssoc/'
                  data-once='footer'
                >
                  <FacebookIcon color='white' />
                  <span className='social-menu__text sr-only'>Instagram</span>
                </a>
              </li>

              <li className='social-menu__item'>
                <a
                  className='social-menu__link'
                  href='https://www.youtube.com/user/AlzheimersSociety'
                  data-once='footer'
                >
                  <XIcon color='white' width={20} height={20} />
                  <span className='social-menu__text sr-only'>Youtube</span>
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
      <div className='footer__bottom'>
        <div className='container'>
          <div className='footer__bottom__logo'>
            <img
              src='https://cc.alzheimers.org.uk/themes/custom/alzheimer/images/fundraising-regulator-logo.png'
              alt='Registered with the Fundraising Regulator'
            />
          </div>
          <div className='footer__bottom__text'>
            <p>All content © 2025 Alzheimer&apos;s Society.</p>
            <p>
              Registered office at Alzheimer&apos;s Society, 43-44 Crutched
              Friars, London, EC3N 2AE
            </p>
            <p>
              Alzheimer&apos;s Society is a registered Charity No. 296645.
              Registered as a company limited by guarantee and registered in
              England No. 2115499
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

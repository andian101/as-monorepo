"use client";

import { useState } from "react";
import "./desktopHeader.css";
import { Subsection } from "./SubSection";

export const DesktopHeader = ({ data, subNavData }) => {
  const [a, setA] = useState(false);
  const [b, setB] = useState(false);
  const [c, setC] = useState(false);
  const [d, setD] = useState(false);
  const [e, setE] = useState(false);

  const isOpen = (num: number) => {
    if (num === 0 && a) return true;
    if (num === 1 && b) return true;
    if (num === 2 && c) return true;
    if (num === 3 && d) return true;
    if (num === 4 && e) return true;
    return false;
  };

  const handleClick = (num: number) => {
    let target;
    if (num === 0) target = "a";
    if (num === 1) target = "b";
    if (num === 2) target = "c";
    if (num === 3) target = "d";
    if (num === 4) target = "e";

    setA(false);
    setB(false);
    setC(false);
    setD(false);
    setE(false);

    switch (target) {
      case "a":
        setA(!a);
        break;
      case "b":
        setB(!b);
        break;
      case "c":
        setC(!c);
        break;
      case "d":
        setD(!d);
        break;
      case "e":
        setE(!e);
        break;
      default:
        break;
    }
  };

  return (
    <div className='header__desktop-menu'>
      <div className='container'>
        <nav
          role='navigation'
          aria-labelledby='block-alzheimer-mainnavigation-menu'
          id='block-alzheimer-mainnavigation'
        >
          <h2
            className='visually-hidden'
            id='block-alzheimer-mainnavigation-menu'
          >
            Main navigation
          </h2>

          <ul
            id='block-alzheimer-mainnavigation'
            className='menu menu--desktop list--inline'
            data-js-processed='true'
          >
            {data.map((navItem, index) => {
              return (
                <li
                  key={navItem.title}
                  className={
                    "menu__item menu__item--first-level " +
                    (a ? "menu__item--expanded" : "")
                  }
                >
                  <a
                    className='menu__link menu__link--with-sub expander-toggle'
                    aria-expanded='false'
                    aria-haspopup='true'
                    onClick={() => handleClick(index)}
                    data-once='header'
                    style={{ cursor: "pointer" }}
                  >
                    {navItem.title}*
                  </a>
                  <Subsection
                    data={subNavData.find((e) => e._id === navItem.subNavs[0])}
                    open={isOpen(index)}
                  />
                </li>
              );
            })}

            <li
              className={
                "menu__item menu__item--first-level " +
                (b ? "menu__item--expanded" : "")
              }
            >
              <a
                className='menu__link menu__link--with-sub expander-toggle'
                aria-expanded='false'
                aria-haspopup='true'
                onClick={() => handleClick(1)}
                data-once='header'
                style={{ cursor: "pointer" }}
              >
                Dementia support
              </a>

              <ul
                className={
                  "menu menu--desktop menu--sub menu--sub-1 list--inline " +
                  (b ? "menu--sub--expanded" : "")
                }
              >
                <div className='row menu--desktop__submenu-container'>
                  <div className='col'>
                    <li className='menu__item'>
                      <a
                        className='menu__link menu__link--with-sub menu__link--sub menu__link--sub-1'
                        href='https://www.alzheimers.org.uk/get-support/dementia-support-services'
                        data-once='header'
                      >
                        Our dementia services
                      </a>

                      <ul className='menu menu--desktop menu--sub menu--sub-1 menu--sub-2 list--inline'>
                        <li className='menu__item'>
                          <a
                            className='menu__link menu__link--with-sub menu__link--sub menu__link--sub-1 menu__link--sub-2'
                            href='https://www.alzheimers.org.uk/find-support-near-you'
                            data-once='header'
                          >
                            Find support near you
                          </a>
                        </li>

                        <li className='menu__item'>
                          <a
                            className='menu__link menu__link--with-sub menu__link--sub menu__link--sub-1 menu__link--sub-2'
                            href='https://www.alzheimers.org.uk/get-support/dementia-support-line'
                            data-once='header'
                          >
                            Dementia support line
                          </a>
                        </li>

                        <li className='menu__item'>
                          <a
                            className='menu__link menu__link--with-sub menu__link--sub menu__link--sub-1 menu__link--sub-2'
                            href='https://www.alzheimers.org.uk/get-support/dementia-support-forum'
                            data-once='header'
                          >
                            Join our online community
                          </a>
                        </li>

                        <li className='menu__item'>
                          <a
                            className='menu__link menu__link--with-sub menu__link--sub menu__link--sub-1 menu__link--sub-2'
                            href='https://www.alzheimers.org.uk/get-support/publications-factsheets'
                            data-once='header'
                          >
                            Publications and factsheets
                          </a>
                        </li>

                        <li className='menu__item'>
                          <a
                            className='menu__link menu__link--with-sub menu__link--sub menu__link--sub-1 menu__link--sub-2'
                            href='https://www.alzheimers.org.uk/dementia-professionals'
                            data-once='header'
                          >
                            Support for professionals
                          </a>
                        </li>
                      </ul>
                    </li>
                  </div>

                  <div className='col'>
                    <li className='menu__item'>
                      <a
                        className='menu__link menu__link--with-sub menu__link--sub menu__link--sub-1'
                        href='https://www.alzheimers.org.uk/get-support/living-with-dementia'
                        data-once='header'
                      >
                        Living with dementia
                      </a>

                      <ul className='menu menu--desktop menu--sub menu--sub-1 menu--sub-2 list--inline'>
                        <li className='menu__item'>
                          <a
                            className='menu__link menu__link--with-sub menu__link--sub menu__link--sub-1 menu__link--sub-2'
                            href='https://www.alzheimers.org.uk/get-support/living-with-dementia/eating-drinking'
                            data-once='header'
                          >
                            Eating and drinking
                          </a>
                        </li>

                        <li className='menu__item'>
                          <a
                            className='menu__link menu__link--with-sub menu__link--sub menu__link--sub-1 menu__link--sub-2'
                            href='https://www.alzheimers.org.uk/get-support/living-with-dementia/toilet-problems-continence'
                            data-once='header'
                          >
                            Toilet problems and continence
                          </a>
                        </li>

                        <li className='menu__item'>
                          <a
                            className='menu__link menu__link--with-sub menu__link--sub menu__link--sub-1 menu__link--sub-2'
                            href='https://www.alzheimers.org.uk/get-support/living-with-dementia/driving-dementia'
                            data-once='header'
                          >
                            Driving
                          </a>
                        </li>

                        <li className='menu__item'>
                          <a
                            className='menu__link menu__link--with-sub menu__link--sub menu__link--sub-1 menu__link--sub-2'
                            href='https://www.alzheimers.org.uk/get-support/living-with-dementia/washing-dressing'
                            data-once='header'
                          >
                            Washing and dressing
                          </a>
                        </li>

                        <li className='menu__item'>
                          <a
                            className='menu__link menu__link--with-sub menu__link--sub menu__link--sub-1 menu__link--sub-2'
                            href='https://www.alzheimers.org.uk/get-support/daily-living/challenging-sexual-behaviour-dementia'
                            data-once='header'
                          >
                            Sex and sexual behaviour
                          </a>
                        </li>
                      </ul>
                    </li>
                  </div>

                  <div className='col'>
                    <li className='menu__item'>
                      <a
                        className='menu__link menu__link--with-sub menu__link--sub menu__link--sub-1'
                        href='https://www.alzheimers.org.uk/get-support/help-dementia-care'
                        data-once='header'
                      >
                        Support for carers
                      </a>

                      <ul className='menu menu--desktop menu--sub menu--sub-1 menu--sub-2 list--inline'>
                        <li className='menu__item'>
                          <a
                            className='menu__link menu__link--with-sub menu__link--sub menu__link--sub-1 menu__link--sub-2'
                            href='https://www.alzheimers.org.uk/get-support/help-dementia-care/looking-after-yourself'
                            data-once='header'
                          >
                            Looking after yourself
                          </a>
                        </li>

                        <li className='menu__item'>
                          <a
                            className='menu__link menu__link--with-sub menu__link--sub menu__link--sub-1 menu__link--sub-2'
                            href='https://www.alzheimers.org.uk/get-support/help-dementia-care/understanding-supporting-person-dementia'
                            data-once='header'
                          >
                            Supporting a person with dementia
                          </a>
                        </li>

                        <li className='menu__item'>
                          <a
                            className='menu__link menu__link--with-sub menu__link--sub menu__link--sub-1 menu__link--sub-2'
                            href='https://www.alzheimers.org.uk/get-support/help-dementia-care/care-homes-who-decides-when'
                            data-once='header'
                          >
                            Considering care homes
                          </a>
                        </li>

                        <li className='menu__item'>
                          <a
                            className='menu__link menu__link--with-sub menu__link--sub menu__link--sub-1 menu__link--sub-2'
                            href='https://www.alzheimers.org.uk/get-support/staying-independent/what-equipment-improve-adapt-home-person-dementia'
                            data-once='header'
                          >
                            Adapting the home
                          </a>
                        </li>

                        <li className='menu__item'>
                          <a
                            className='menu__link menu__link--with-sub menu__link--sub menu__link--sub-1 menu__link--sub-2'
                            href='https://www.alzheimers.org.uk/get-support/help-dementia-care/end-life-care-making-decisions'
                            data-once='header'
                          >
                            End of life care
                          </a>
                        </li>
                      </ul>
                    </li>
                  </div>

                  <div className='col'>
                    <li className='menu__item'>
                      <a
                        className='menu__link menu__link--with-sub menu__link--sub menu__link--sub-1'
                        href='https://www.alzheimers.org.uk/get-support/legal-financial'
                        data-once='header'
                      >
                        Legal and financial
                      </a>

                      <ul className='menu menu--desktop menu--sub menu--sub-1 menu--sub-2 list--inline'>
                        <li className='menu__item'>
                          <a
                            className='menu__link menu__link--with-sub menu__link--sub menu__link--sub-1 menu__link--sub-2'
                            href='https://www.alzheimers.org.uk/get-support/legal-financial/paying-for-care'
                            data-once='header'
                          >
                            Paying for dementia care
                          </a>
                        </li>

                        <li className='menu__item'>
                          <a
                            className='menu__link menu__link--with-sub menu__link--sub menu__link--sub-1 menu__link--sub-2'
                            href='https://www.alzheimers.org.uk/get-support/legal-financial/dementia-care-needs-assessment'
                            data-once='header'
                          >
                            Care assessments
                          </a>
                        </li>

                        <li className='menu__item'>
                          <a
                            className='menu__link menu__link--with-sub menu__link--sub menu__link--sub-1 menu__link--sub-2'
                            href='https://www.alzheimers.org.uk/get-support/legal-financial/deprivation-liberty-safeguards-dols'
                            data-once='header'
                          >
                            Deprivation of Liberty Safeguards
                          </a>
                        </li>

                        <li className='menu__item'>
                          <a
                            className='menu__link menu__link--with-sub menu__link--sub menu__link--sub-1 menu__link--sub-2'
                            href='https://www.alzheimers.org.uk/get-support/legal-financial/lasting-power-attorney'
                            data-once='header'
                          >
                            Lasting power of attorney
                          </a>
                        </li>

                        <li className='menu__item'>
                          <a
                            className='menu__link menu__link--with-sub menu__link--sub menu__link--sub-1 menu__link--sub-2'
                            href='https://www.alzheimers.org.uk/get-support/legal-financial/benefits-dementia'
                            data-once='header'
                          >
                            Benefits and exemptions
                          </a>
                        </li>
                      </ul>
                    </li>
                  </div>
                </div>
              </ul>
            </li>

            <li
              className={
                "menu__item menu__item--first-level " +
                (c ? "menu__item--expanded" : "")
              }
            >
              <a
                className='menu__link menu__link--with-sub expander-toggle'
                aria-expanded='false'
                aria-haspopup='true'
                onClick={() => handleClick(2)}
                data-once='header'
              >
                Get involved
              </a>

              <ul
                className={
                  "menu menu--desktop menu--sub menu--sub-1 list--inline " +
                  (d ? "menu--sub--expanded" : "")
                }
              >
                <div className='row menu--desktop__submenu-container'>
                  <div className='col'>
                    <li className='menu__item'>
                      <a
                        className='menu__link menu__link--with-sub menu__link--sub menu__link--sub-1'
                        href='https://www.alzheimers.org.uk/get-involved/donate'
                        data-once='header'
                      >
                        Donate
                      </a>

                      <ul className='menu menu--desktop menu--sub menu--sub-1 menu--sub-2 list--inline'>
                        <li className='menu__item'>
                          <a
                            className='menu__link menu__link--with-sub menu__link--sub menu__link--sub-1 menu__link--sub-2'
                            href='https://www.alzheimers.org.uk/get-involved/donate/regular-giving'
                            data-once='header'
                          >
                            Make a monthly donation
                          </a>
                        </li>

                        <li className='menu__item'>
                          <a
                            className='menu__link menu__link--with-sub menu__link--sub menu__link--sub-1 menu__link--sub-2'
                            href='https://www.alzheimers.org.uk/get-involved/make-donation/leave-gift-your-will'
                            data-once='header'
                          >
                            Leave a gift in your Will
                          </a>
                        </li>

                        <li className='menu__item'>
                          <a
                            className='menu__link menu__link--with-sub menu__link--sub menu__link--sub-1 menu__link--sub-2'
                            href='https://www.alzheimers.org.uk/get-involved/make-donation/ways-to-give-in-memory'
                            data-once='header'
                          >
                            Ways to give in memory
                          </a>
                        </li>

                        <li className='menu__item'>
                          <a
                            className='menu__link menu__link--with-sub menu__link--sub menu__link--sub-1 menu__link--sub-2'
                            href='https://www.alzheimers.org.uk/get-involved/make-donation/lottery'
                            data-once='header'
                          >
                            Play the Lottery
                          </a>
                        </li>

                        <li className='menu__item'>
                          <a
                            className='menu__link menu__link--with-sub menu__link--sub menu__link--sub-1 menu__link--sub-2'
                            href='https://www.alzheimers.org.uk/get-involved/make-donation/philanthropy-major-gifts'
                            data-once='header'
                          >
                            Philanthropy
                          </a>
                        </li>

                        <li className='menu__item'>
                          <a
                            className='menu__link menu__link--with-sub menu__link--sub menu__link--sub-1 menu__link--sub-2'
                            href='https://www.alzheimers.org.uk/get-involved/make-donation/other-ways-donate'
                            data-once='header'
                          >
                            Other ways to donate
                          </a>
                        </li>
                      </ul>
                    </li>
                  </div>

                  <div className='col'>
                    <li className='menu__item'>
                      <a
                        className='menu__link menu__link--with-sub menu__link--sub menu__link--sub-1'
                        href='https://www.alzheimers.org.uk/get-involved/events-and-fundraising'
                        data-once='header'
                      >
                        Events and fundraising
                      </a>

                      <ul className='menu menu--desktop menu--sub menu--sub-1 menu--sub-2 list--inline'>
                        <li className='menu__item'>
                          <a
                            className='menu__link menu__link--with-sub menu__link--sub menu__link--sub-1 menu__link--sub-2'
                            href='https://www.alzheimers.org.uk/get-involved/events-and-fundraising/join-event'
                            data-once='header'
                          >
                            Join an event
                          </a>
                        </li>

                        <li className='menu__item'>
                          <a
                            className='menu__link menu__link--with-sub menu__link--sub menu__link--sub-1 menu__link--sub-2'
                            href='https://www.alzheimers.org.uk/get-involved/events-and-fundraising/organise-your-own-fundraising'
                            data-once='header'
                          >
                            Organise your own fundraising
                          </a>
                        </li>

                        <li className='menu__item'>
                          <a
                            className='menu__link menu__link--with-sub menu__link--sub menu__link--sub-1 menu__link--sub-2'
                            href='https://www.alzheimers.org.uk/get-involved/events-and-fundraising/fundraising-support'
                            data-once='header'
                          >
                            Fundraising support
                          </a>
                        </li>

                        <li className='menu__item'>
                          <a
                            className='menu__link menu__link--with-sub menu__link--sub menu__link--sub-1 menu__link--sub-2'
                            href='https://www.alzheimers.org.uk/about-us/our-people/our-corporate-partnerships'
                            data-once='header'
                          >
                            Corporate partnerships
                          </a>
                        </li>
                      </ul>
                    </li>
                  </div>

                  <div className='col'>
                    <li className='menu__item'>
                      <a
                        className='menu__link menu__link--with-sub menu__link--sub menu__link--sub-1'
                        href='https://www.alzheimers.org.uk/get-involved/support-our-work'
                        data-once='header'
                      >
                        Support our work
                      </a>

                      <ul className='menu menu--desktop menu--sub menu--sub-1 menu--sub-2 list--inline'>
                        <li className='menu__item'>
                          <a
                            className='menu__link menu__link--with-sub menu__link--sub menu__link--sub-1 menu__link--sub-2'
                            href='https://www.alzheimers.org.uk/get-involved/our-campaigns'
                            data-once='header'
                          >
                            Campaign with us
                          </a>
                        </li>

                        <li className='menu__item'>
                          <a
                            className='menu__link menu__link--with-sub menu__link--sub menu__link--sub-1 menu__link--sub-2'
                            href='https://www.alzheimers.org.uk/get-involved/dementia-friends'
                            data-once='header'
                          >
                            Become a Dementia Friend
                          </a>
                        </li>

                        <li className='menu__item'>
                          <a
                            className='menu__link menu__link--with-sub menu__link--sub menu__link--sub-1 menu__link--sub-2'
                            href='https://www.alzheimers.org.uk/research/our-research/take-part-dementia-research'
                            data-once='header'
                          >
                            Take part in our research
                          </a>
                        </li>

                        <li className='menu__item'>
                          <a
                            className='menu__link menu__link--with-sub menu__link--sub menu__link--sub-1 menu__link--sub-2'
                            href='https://www.alzheimers.org.uk/get-involved/donate/forget-me-not-appeal'
                            data-once='header'
                          >
                            The Forget Me Not Appeal
                          </a>
                        </li>
                      </ul>
                    </li>
                  </div>

                  <div className='col'>
                    <li className='menu__item'>
                      <a
                        className='menu__link menu__link--with-sub menu__link--sub menu__link--sub-1'
                        href='https://www.alzheimers.org.uk/get-involved/volunteering'
                        data-once='header'
                      >
                        Volunteer
                      </a>

                      <ul className='menu menu--desktop menu--sub menu--sub-1 menu--sub-2 list--inline'>
                        <li className='menu__item'>
                          <a
                            className='menu__link menu__link--with-sub menu__link--sub menu__link--sub-1 menu__link--sub-2'
                            href='https://www.alzheimers.org.uk/get-involved/volunteering/ways-volunteer'
                            data-once='header'
                          >
                            Ways to volunteer
                          </a>
                        </li>

                        <li className='menu__item'>
                          <a
                            className='menu__link menu__link--with-sub menu__link--sub menu__link--sub-1 menu__link--sub-2'
                            href='https://www.alzheimers.org.uk/get-involved/volunteering/ways-volunteer/support-dementia-services'
                            data-once='header'
                          >
                            Join our dementia services
                          </a>
                        </li>

                        <li className='menu__item'>
                          <a
                            className='menu__link menu__link--with-sub menu__link--sub menu__link--sub-1 menu__link--sub-2'
                            href='https://www.alzheimers.org.uk/get-involved/lived-experience-dementia'
                            data-once='header'
                          >
                            Share your lived experience
                          </a>
                        </li>
                      </ul>
                    </li>
                  </div>
                </div>
              </ul>
            </li>

            <li
              className={
                "menu__item menu__item--first-level " +
                (d ? "menu__item--expanded" : "")
              }
            >
              <a
                className='menu__link menu__link--with-sub expander-toggle'
                aria-expanded='false'
                aria-haspopup='true'
                onClick={() => handleClick(3)}
                data-once='header'
                style={{ cursor: "pointer" }}
              >
                Research
              </a>

              <ul
                className={
                  "menu menu--desktop menu--sub menu--sub-1 list--inline " +
                  (e ? "menu--sub--expanded" : "")
                }
              >
                <div className='row menu--desktop__submenu-container'>
                  <div className='col'>
                    <li className='menu__item'>
                      <a
                        className='menu__link menu__link--with-sub menu__link--sub menu__link--sub-1'
                        href='https://www.alzheimers.org.uk/research/our-research'
                        data-once='header'
                      >
                        Our research
                      </a>

                      <ul className='menu menu--desktop menu--sub menu--sub-1 menu--sub-2 list--inline'>
                        <li className='menu__item'>
                          <a
                            className='menu__link menu__link--with-sub menu__link--sub menu__link--sub-1 menu__link--sub-2'
                            href='https://www.alzheimers.org.uk/research/our-research/take-part-dementia-research'
                            data-once='header'
                          >
                            Take part in dementia research
                          </a>
                        </li>

                        <li className='menu__item'>
                          <a
                            className='menu__link menu__link--with-sub menu__link--sub menu__link--sub-1 menu__link--sub-2'
                            href='https://www.alzheimers.org.uk/research/our-research/what-research-are-we-supporting'
                            data-once='header'
                          >
                            Research we are funding
                          </a>
                        </li>

                        <li className='menu__item'>
                          <a
                            className='menu__link menu__link--with-sub menu__link--sub menu__link--sub-1 menu__link--sub-2'
                            href='https://www.alzheimers.org.uk/research/our-research/dementia-research-news'
                            data-once='header'
                          >
                            Dementia research news
                          </a>
                        </li>
                      </ul>
                    </li>
                  </div>

                  <div className='col'>
                    <li className='menu__item'>
                      <a
                        className='menu__link menu__link--with-sub menu__link--sub menu__link--sub-1'
                        href='https://www.alzheimers.org.uk/research/researchers'
                        data-once='header'
                      >
                        For researchers
                      </a>

                      <ul className='menu menu--desktop menu--sub menu--sub-1 menu--sub-2 list--inline'>
                        <li className='menu__item'>
                          <a
                            className='menu__link menu__link--with-sub menu__link--sub menu__link--sub-1 menu__link--sub-2'
                            href='https://www.alzheimers.org.uk/research/researchers/our-funding-schemes'
                            data-once='header'
                          >
                            Our research grants
                          </a>
                        </li>

                        <li className='menu__item'>
                          <a
                            className='menu__link menu__link--with-sub menu__link--sub menu__link--sub-1 menu__link--sub-2'
                            href='https://www.alzheimers.org.uk/research/researchers/why-dementia-researchers-should-apply-our-grants-funding-schemes'
                            data-once='header'
                          >
                            Why apply to us
                          </a>
                        </li>

                        <li className='menu__item'>
                          <a
                            className='menu__link menu__link--with-sub menu__link--sub menu__link--sub-1 menu__link--sub-2'
                            href='https://www.alzheimers.org.uk/research/researchers/manage-your-grant'
                            data-once='header'
                          >
                            Manage your grant
                          </a>
                        </li>

                        <li className='menu__item'>
                          <a
                            className='menu__link menu__link--with-sub menu__link--sub menu__link--sub-1 menu__link--sub-2'
                            href='https://www.alzheimers.org.uk/research/news-for-researchers'
                            data-once='header'
                          >
                            News for researchers
                          </a>
                        </li>
                      </ul>
                    </li>
                  </div>

                  <div className='col'>
                    <li className='menu__item'>
                      <a
                        className='menu__link menu__link--with-sub menu__link--sub menu__link--sub-1'
                        href='https://www.alzheimers.org.uk/research/our-research/dementia-innovation'
                        data-once='header'
                      >
                        Dementia innovation
                      </a>

                      <ul className='menu menu--desktop menu--sub menu--sub-1 menu--sub-2 list--inline'>
                        <li className='menu__item'>
                          <a
                            className='menu__link menu__link--with-sub menu__link--sub menu__link--sub-1 menu__link--sub-2'
                            href='https://www.alzheimers.org.uk/research/our-research/dementia-innovation/accelerator-programme'
                            data-once='header'
                          >
                            Accelerator Programme
                          </a>
                        </li>

                        <li className='menu__item'>
                          <a
                            className='menu__link menu__link--with-sub menu__link--sub menu__link--sub-1 menu__link--sub-2'
                            href='https://www.alzheimers.org.uk/research/our-research/dementia-innovation/longitude-prize'
                            data-once='header'
                          >
                            Longitude Prize on Dementia
                          </a>
                        </li>

                        <li className='menu__item'>
                          <a
                            className='menu__link menu__link--with-sub menu__link--sub menu__link--sub-1 menu__link--sub-2'
                            href='https://www.alzheimers.org.uk/research/our-research/dementia-innovation/innovation-product-portfolio'
                            data-once='header'
                          >
                            Innovation product portfolio
                          </a>
                        </li>
                      </ul>
                    </li>
                  </div>
                </div>
              </ul>
            </li>

            <li
              className={
                "menu__item menu__item--first-level " +
                (e ? "menu__item--expanded" : "")
              }
            >
              <a
                className='menu__link menu__link--with-sub expander-toggle'
                aria-expanded='false'
                aria-haspopup='true'
                onClick={() => handleClick(4)}
                data-once='header'
                style={{ cursor: "pointer" }}
              >
                About us
              </a>

              <ul
                className={
                  "menu menu--desktop menu--sub menu--sub-1 list--inline " +
                  (e ? "menu--sub--expanded" : "")
                }
              >
                <div className='row menu--desktop__submenu-container'>
                  <div className='col'>
                    <li className='menu__item'>
                      <a
                        className='menu__link menu__link--with-sub menu__link--sub menu__link--sub-1'
                        href='https://www.alzheimers.org.uk/about-us/who-we-are'
                        data-once='header'
                      >
                        Who we are
                      </a>

                      <ul className='menu menu--desktop menu--sub menu--sub-1 menu--sub-2 list--inline'>
                        <li className='menu__item'>
                          <a
                            className='menu__link menu__link--with-sub menu__link--sub menu__link--sub-1 menu__link--sub-2'
                            href='https://www.alzheimers.org.uk/about-us/our-help-and-hope-strategy'
                            data-once='header'
                          >
                            Our strategy
                          </a>
                        </li>

                        <li className='menu__item'>
                          <a
                            className='menu__link menu__link--with-sub menu__link--sub menu__link--sub-1 menu__link--sub-2'
                            href='https://www.alzheimers.org.uk/about-us/how-your-money-helps'
                            data-once='header'
                          >
                            How your money helps
                          </a>
                        </li>

                        <li className='menu__item'>
                          <a
                            className='menu__link menu__link--with-sub menu__link--sub menu__link--sub-1 menu__link--sub-2'
                            href='https://www.alzheimers.org.uk/about-us/working-us'
                            data-once='header'
                          >
                            Working for us
                          </a>
                        </li>
                      </ul>
                    </li>
                  </div>

                  <div className='col'>
                    <li className='menu__item'>
                      <a
                        className='menu__link menu__link--with-sub menu__link--sub menu__link--sub-1'
                        href='https://www.alzheimers.org.uk/about-us/our-people'
                        data-once='header'
                      >
                        Our people
                      </a>

                      <ul className='menu menu--desktop menu--sub menu--sub-1 menu--sub-2 list--inline'>
                        <li className='menu__item'>
                          <a
                            className='menu__link menu__link--with-sub menu__link--sub menu__link--sub-1 menu__link--sub-2'
                            href='https://www.alzheimers.org.uk/about-us/our-people/ambassadors'
                            data-once='header'
                          >
                            Ambassadors
                          </a>
                        </li>

                        <li className='menu__item'>
                          <a
                            className='menu__link menu__link--with-sub menu__link--sub menu__link--sub-1 menu__link--sub-2'
                            href='https://www.alzheimers.org.uk/about-us/our-people/vice-presidents-patrons'
                            data-once='header'
                          >
                            Vice-Presidents and Patrons
                          </a>
                        </li>

                        <li className='menu__item'>
                          <a
                            className='menu__link menu__link--with-sub menu__link--sub menu__link--sub-1 menu__link--sub-2'
                            href='https://www.alzheimers.org.uk/about-us/our-people/trustees'
                            data-once='header'
                          >
                            Trustees
                          </a>
                        </li>
                      </ul>
                    </li>
                  </div>

                  <div className='col'>
                    <li className='menu__item'>
                      <a
                        className='menu__link menu__link--with-sub menu__link--sub menu__link--sub-1'
                        href='https://www.alzheimers.org.uk/about-us/policy-and-influencing'
                        data-once='header'
                      >
                        Policy and influencing
                      </a>

                      <ul className='menu menu--desktop menu--sub menu--sub-1 menu--sub-2 list--inline'>
                        <li className='menu__item'>
                          <a
                            className='menu__link menu__link--with-sub menu__link--sub menu__link--sub-1 menu__link--sub-2'
                            href='https://www.alzheimers.org.uk/about-us/policy-and-influencing/our-position-key-dementia-challenges'
                            data-once='header'
                          >
                            Our position on key issues
                          </a>
                        </li>

                        <li className='menu__item'>
                          <a
                            className='menu__link menu__link--with-sub menu__link--sub menu__link--sub-1 menu__link--sub-2'
                            href='https://www.alzheimers.org.uk/about-us/policy-and-influencing/national-influencing'
                            data-once='header'
                          >
                            National Influencing
                          </a>
                        </li>

                        <li className='menu__item'>
                          <a
                            className='menu__link menu__link--with-sub menu__link--sub menu__link--sub-1 menu__link--sub-2'
                            href='https://www.alzheimers.org.uk/about-us/policy-and-influencing/local-dementia-statistics'
                            data-once='header'
                          >
                            Local dementia statistics
                          </a>
                        </li>
                      </ul>
                    </li>
                  </div>

                  <div className='col'>
                    <li className='menu__item'>
                      <a
                        className='menu__link menu__link--with-sub menu__link--sub menu__link--sub-1'
                        href='https://www.alzheimers.org.uk/about-us/news-and-media'
                        data-once='header'
                      >
                        News and media
                      </a>

                      <ul className='menu menu--desktop menu--sub menu--sub-1 menu--sub-2 list--inline'>
                        <li className='menu__item'>
                          <a
                            className='menu__link menu__link--with-sub menu__link--sub menu__link--sub-1 menu__link--sub-2'
                            href='https://www.alzheimers.org.uk/blog'
                            data-once='header'
                          >
                            Read our blog
                          </a>
                        </li>

                        <li className='menu__item'>
                          <a
                            className='menu__link menu__link--with-sub menu__link--sub menu__link--sub-1 menu__link--sub-2'
                            href='https://www.alzheimers.org.uk/get-support/publications-and-factsheets/dementia-together'
                            data-once='header'
                          >
                            Dementia together magazine
                          </a>
                        </li>

                        <li className='menu__item'>
                          <a
                            className='menu__link menu__link--with-sub menu__link--sub menu__link--sub-1 menu__link--sub-2'
                            href='https://www.alzheimers.org.uk/about-us/news-and-media/latest-news'
                            data-once='header'
                          >
                            Latest news
                          </a>
                        </li>

                        <li className='menu__item'>
                          <a
                            className='menu__link menu__link--with-sub menu__link--sub menu__link--sub-1 menu__link--sub-2'
                            href='https://www.alzheimers.org.uk/about-us/news-and-media/audio-and-video'
                            data-once='header'
                          >
                            Video and podcast
                          </a>
                        </li>
                      </ul>
                    </li>
                  </div>
                </div>
              </ul>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

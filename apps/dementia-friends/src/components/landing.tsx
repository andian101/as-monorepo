"use client";
import { Arima } from "next/font/google";
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
/* eslint-disable @next/next/no-html-link-for-pages */
import { Button } from "../../../../packages/components/Button";
import { Card } from "../../../../packages/components/Card";

export const Landing = ({ articles }) => {
  // const client = getClient();
  // const { data } = await client.query({
  //   query: GET_ARTICLE,
  //   variables: { id: "5dXCCTWpiaRLlaPJal5WTi" }
  //   // variables: { id: "RK80bbYMMKn4NosfBGqA7" }
  // });

  return (
    <div className='container'>
      <div className='header row'>
        <div className='col-xs-6 col-sm-6 col-md-6 col-12 mb-4'>
          <a href='/'>
            <img
              alt='Dementia Friends'
              className='img-fluid'
              src='https://www.dementiafriends.org.uk/resource/1678700939000/DF_WEBR_Assets/img/logo.png'
              width='250'
            />
          </a>
        </div>
        <div className='col-xs-6 col-sm-6 col-md-6 col- 12 mb-2'>
          <div className='register'>
            <a className='btn btn-default' href='/login'>
              Sign in
            </a>
          </div>
        </div>
      </div>

      <div className='row' id='newsletter-subscribe'>
        <div className='newsletter-subscribe col-xs-12 col-sm-12 col-md-12 m-0'>
          <p id='webheader-subscribe-link'>
            <i className='fa fa-envelope'></i>{" "}
            <a href='/subscribe' title='Subscribe to Dementia Friends updates'>
              Subscribe to our updates
            </a>
          </p>
          <span
            id='j_id0:j_id41:j_id42:j_id58'
            style={{ display: "none" }}
          ></span>
        </div>
      </div>
      <span id='j_id0:j_id41:j_id42:j_id61'>
        <nav className='navbar navbar-expand-lg navbar navbar-default p-0 mb-4'>
          <div className='container-fluid p-0 d-flex justify-content-end'>
            <button
              aria-controls='navbarSupportedContent'
              aria-expanded='false'
              aria-label='Toggle navigation'
              className='navbar-toggler'
              data-bs-target='#navbarSupportedContent'
              data-bs-toggle='collapse'
              type='button'
            >
              Menu
              <span className='navbar-toggler-icon'></span>
            </button>
            <div
              className='collapse navbar-collapse'
              id='navbarSupportedContent'
            >
              <ul className='navbar-nav me-auto mb-2 mb-lg-0'>
                <li className='nav-item'>
                  <a className='nav-link' href='/'>
                    Home
                  </a>
                </li>
                <li className='nav-item dropdown'>
                  <a
                    aria-expanded='false'
                    className='nav-link dropdown-toggle'
                    data-bs-toggle='dropdown'
                    href='#'
                    id='navbarDropdown'
                    role='button'
                  >
                    Join
                  </a>
                  <ul
                    aria-labelledby='navbarDropdown'
                    className='dropdown-menu mt-0'
                  >
                    <li>
                      <a
                        className='dropdown-item'
                        href='WEBArticle?page=become-dementia-friend'
                      >
                        Dementia Friend
                      </a>
                    </li>
                    <li>
                      <a
                        className='dropdown-item'
                        href='WEBArticle?page=what-is-a-ambassador'
                      >
                        Dementia Friends Ambassador
                      </a>
                    </li>
                    <li>
                      <a
                        className='dropdown-item'
                        href='WEBArticle?page=about-partner-organisations'
                      >
                        Organisations
                      </a>
                    </li>
                    <li>
                      <a
                        className='dropdown-item'
                        href='WEBArticle?page=dementia-friendly-communities'
                      >
                        Dementia Friendly Communities
                      </a>
                    </li>
                  </ul>
                </li>
                <li className='nav-item '>
                  <a
                    className='nav-link'
                    href='WEBArticle?page=what-is-dementia'
                  >
                    What is dementia?...
                  </a>
                </li>
                <li className='nav-item '>
                  <a className='nav-link' href='WEBNews'>
                    Stories
                  </a>
                </li>
                <li className='nav-item '>
                  <a className='nav-link' href='WEBContactForm'>
                    Contact us
                  </a>
                </li>
                <li className='nav-item'>
                  <a
                    className='nav-link twitter external'
                    href='https://twitter.com/dementiafriends'
                  >
                    <i className='bi bi-twitter'></i>
                  </a>
                </li>
                <li className='nav-item px-md-0'>
                  <a
                    className='nav-link facebook external'
                    href='https://www.facebook.com/DementiaFriends'
                  >
                    <i className='bi bi-facebook'></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </span>

      <div id='fb-root' className=' fb_reset'>
        <div
          style={{
            position: "absolute",
            top: "-10000px",
            width: "0px",
            height: "0px"
          }}
        >
          <div></div>
        </div>
      </div>
      <div className='home-about row *.css'>
        <div className='col-md-12 column mb-2'>
          <div className='banner-image'>
            <div className='banner-button'>
              <Button
                link='/WEBArticle?page=become-dementia-friend'
                title='Become a dementia friend'
              />
            </div>

            <img
              alt='Join and b a dementia friend'
              className='img-fluid'
              src='https://www.dementiafriends.org.uk/servlet/servlet.FileDownload?file=00P0J00001hXLTwUAO'
            />
          </div>
        </div>
        <div className='col-sm-12 col-md-12'>
          <div className='row *.css'>
            {articles.map((article, index) => (
              <div
                key={article.title + index}
                className='about col-sm-4 col-md-4 column'
              >
                <Card
                  image={article.image.url}
                  title={article.title}
                  text={article.content}
                  buttonText={article.linkText}
                  link='#'
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className='home-about row *.css'>
        <div className='col-md-12'>
          <div className='row *.css'>
            <div className='col-md-8 column'>
              <h2>About Dementia Friends</h2>

              <p>
                Alzheimer’s Society’s Dementia Friends programme is the biggest
                ever initiative to change people’s perceptions of dementia. It
                aims to transform the way the nation thinks, acts and talks
                about the condition.
              </p>

              <p>
                Whether you attend a face-to-face Information Session or watch
                the online video, Dementia Friends is about learning more about
                dementia and the small ways you can help. From telling friends
                about the Dementia Friends programme to visiting someone you
                know living with dementia, every action counts.
              </p>

              <p>
                <a
                  className='btn btn-primary webarticle-link'
                  href='WEBArticle?page=how-to-get-involved'
                >
                  About the initiative
                </a>
              </p>
            </div>
            <div className='col-md-4 column'>
              <br />
              <br />
              <img
                className='rounded img-fluid'
                src='https://www.dementiafriends.org.uk/resource/1678700939000/DF_WEBR_Assets/img/about-dementia-friends.jpg'
              />
            </div>
          </div>
        </div>
      </div>
      <span id='j_id0:j_id83'>
        <div className='footer row clearfix'>
          <div className='col-md-12'>
            <div className='row'>
              <div className='col-md-4 column'>
                <div className='row'>
                  <div className='col-xs-6 col-md-6'>
                    <a
                      className='external'
                      href='http://www.alzheimers.org.uk/'
                      rel='noopener noreferrer'
                      target='_blank'
                      title='Opens in new window'
                    >
                      <img
                        alt="Alzheimer's Society"
                        src='https://www.dementiafriends.org.uk/resource/1678700939000/DF_WEBR_Assets/img/AS_Logo.png'
                        style={{ position: "relative", top: "-0px" }}
                        width='150'
                      />
                      <span> (external link)</span>
                    </a>
                  </div>
                  <div className='col-xs-6 col-md-6 '></div>
                </div>
              </div>
              <div className='col-md-6 col-md-offset-2 column'>
                <p className='small'>
                  Dementia Friends is an Alzheimer&apos;s Society initiative
                  <br />
                  All content © 2023 Alzheimer&apos;s Society.
                  <br />
                  Alzheimer&apos;s Society is a registered Charity No. 296645
                  <br />
                  <a href='WEBArticle?page=terms-and-conditions'>
                    Terms &amp; conditions
                  </a>{" "}
                  | <a href='WEBArticle?page=privacy-policy'>Privacy policy</a>{" "}
                  | <a href='WEBSiteMap'>Site map</a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </span>
    </div>
  );
};

"use client";

import "./index.css";
import { Button } from "../../../../../packages/components/Button";

export const HomepageHero = () => {
  return (
    <div className='pattern--banner-modal is-fullwidth-extended banner-modal'>
      <div className='container'>
        <div className='banner-modal__inner'>
          <div
            className='banner-modal__image banner-modal__image--desktop'
            style={{
              backgroundImage:
                'url("https://www.alzheimers.org.uk/sites/default/files/media/images/image/2025-07/crop%202_0.png")'
            }}
          >
            <span className='visually-hidden'>Banner modal desktop image</span>
          </div>
          <div className='banner-modal__content column is-4'>
            <div className='banner-modal__title'>
              <h2
                className='title is-2 is-marginless'
                data-content-type='title'
              >
                <div className='field--field-title'>
                  Sign up for Memory Walk
                </div>
              </h2>
            </div>

            <div className='banner-modal__link banner-modal__link--desktop'>
              <Button
                title='Sign up now'
                link='https://www.alzheimers.org.uk/get-involved/events-and-fundraising/join-event/memory-walk'
                onClick={() => {}}
                square
              />
            </div>
          </div>

          <div className='banner-modal__description is-size-5'>
            <div className='field--field-banner-description'>
              Join thousands of others around the UK, helping to stop dementia
              devastating lives. Find your nearest walk....
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

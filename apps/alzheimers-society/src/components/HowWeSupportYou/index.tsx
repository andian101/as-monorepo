import "./howWeSupportYou.css";
import "./supportCta.css";

export const HowWweSupportYou = ({
  title,
  content
}: {
  title: string;
  content: React.ReactNode;
}) => {
  return (
    <div className='how-we-support-you component'>
      <h2 className='heading heading--main how-we-support-you__heading'>
        {title}
      </h2>
      <div className='how-we-support-you__wrapper'>
        <div
          className='how-we-support-you__text text-block'
          data-once='textBlock'
        >
          {content}
        </div>

        <div className='how-we-support-you__ctas'>
          <div className='support-cta-small support-cta-small--support-line'>
            <div className='support-cta-small__icon'>
              <div className='field field--name-field-icon field--type-entity-reference field--label-hidden field__item'>
                <div>
                  <div className='field field--name-field-media-image field--type-image field--label-hidden field__item'>
                    {" "}
                    <img
                      loading='lazy'
                      src='https://cc.alzheimers.org.uk/sites/default/files/styles/support_cta_logo/public/2023-11/telephone-icon-50x50.png?itok=kr9jI-S5'
                      width='50'
                      height='50'
                      alt='Telephone icon'
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className='support-cta-small__content'>
              <a
                className='link link--overlay link--white link--plain link--component--small'
                href='tel:03331503456'
                data-js-processed='true'
              >
                <span>
                  <div className='field field--name-field-heading field--type-string field--label-hidden field__item'>
                    Dementia support line
                  </div>
                </span>
                <span>0333 150 3456</span>
              </a>
            </div>
          </div>

          <div className='support-cta-small support-cta-small--forum'>
            <div className='support-cta-small__icon'>
              <div className='field field--name-field-icon field--type-entity-reference field--label-hidden field__item'>
                <div>
                  <div className='field field--name-field-media-image field--type-image field--label-hidden field__item'>
                    {" "}
                    <img
                      loading='lazy'
                      src='https://cc.alzheimers.org.uk/sites/default/files/styles/support_cta_logo/public/2023-11/forum-icon-50x50.png?itok=oBAAYafZ'
                      width='50'
                      height='50'
                      alt='Forum icon'
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className='support-cta-small__content'>
              <a
                className='link link--overlay link--white link--inline-icon link--plain link--component--small'
                href='https://forum.alzheimers.org.uk/'
                data-js-processed='true'
              >
                <span>
                  <div className='field field--name-field-heading field--type-string field--label-hidden field__item'>
                    Online Support Forum
                  </div>
                </span>
                <span className='link__content link__content--inline-icon link__content--plain'>
                  Visit our forum
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

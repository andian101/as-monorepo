import "./index.css";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";

export const Card = ({ image, title, text, buttonText, link }) => {
  return (
    <article className='pattern--teaser has-image' data-content-type='article'>
      <a href={link} data-once='externalLinkDataLayer linkAndButtonDataLayer'>
        <div className='pattern--teaser--image'>
          <img
            loading='lazy'
            src={image}
            // width='480'
            // height='270'
            alt='Bhagwant and some of the women from her community group, holding hands and singing'
          />
          <span className='visually-hidden'> Tag: .</span>
        </div>

        <div
          className='pattern--teaser--content box has-background-white'
          style={{
            padding: "1rem"
          }}
          data-once='PatternBox'
        >
          <div className='box-header'>
            <h5
              className='title is-5 is-marginless h5-class'
              data-content-type='title'
            >
              <div className='field--field-content-link-header'>{title}</div>
            </h5>
          </div>

          <div className='box-body'>
            <section className='pattern--teaser--summary'>
              <div className='field--field-content-link-body'>
                {documentToReactComponents(text?.json)}
              </div>

              <div className='read-more'>{buttonText}</div>
            </section>
          </div>
        </div>
      </a>
    </article>
  );
};

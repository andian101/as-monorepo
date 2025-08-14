import { ReactNode } from "react";
import "./hero.css";
import Image from "next/image";
export const Hero = ({
  content,
  image
}: {
  content: ReactNode;
  image: string;
}) => {
  return (
    <div
      data-history-node-id='891'
      className='hero component node node--type-landing-page node--view-mode-full'
    >
      <div className='hero__image'>
        <div>
          <div className='field field--name-field-media-image field--type-image field--label-hidden field__item'>
            <img
              loading='eager'
              src={image}
              width='auto'
              height='500px'
              alt='Man outside, standing beside his bike on a path.'
            />
          </div>
        </div>
      </div>
      <div className='hero__content-container container'>
        <h1 className='heading heading--title'>
          <span>Dementia diagnosis</span>
        </h1>
        <div className='paragraph'>{content}</div>
      </div>
    </div>
  );
};

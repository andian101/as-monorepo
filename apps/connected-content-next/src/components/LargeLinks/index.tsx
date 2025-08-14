import { ReactNode } from "react";
import "./largeLinks.css";

export const LargeLinks = ({
  title,
  link,
  content
}: {
  title: string;
  link: string;
  content: ReactNode;
}) => {
  return (
    <div className='link-large component--print-outlined col-md-8 offset-md-2'>
      <div className='link-large__content'>
        <h2 className='heading heading--sub'>
          <a
            className='link link--inline-icon link--plain link--overlay'
            aria-describedby='link-large-886-646'
            href={link}
            data-js-processed='true'
          >
            <span className='link__content link__content--inline-icon link__content--plain'>
              {title}
            </span>
          </a>
        </h2>

        <p className='paragraph'>{content}</p>
      </div>
    </div>
  );
};

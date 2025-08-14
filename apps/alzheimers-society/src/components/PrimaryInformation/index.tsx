import { ReactNode } from "react";
import "./primaryInformation.css";

type PrimaryInformationProps = {
  title: string;
  content: ReactNode;
};

export const PrimaryInformation = ({
  title,
  content
}: PrimaryInformationProps) => {
  return (
    <div className='field field--name-field-fixed-content field--type-entity-reference-revisions field--label-hidden field__items'>
      <div className='field__item'>
        <div className='primary-information-box component--print-outlined component'>
          <h2 className='heading heading--main primary-information-box__heading'>
            {title}
          </h2>
          <div
            className='primary-information-box__text text-block'
            data-once='textBlock'
          >
            {content}
          </div>
        </div>
      </div>
    </div>
  );
};

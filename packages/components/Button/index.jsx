'use client';
import "./index.css";

export const Button = ({title, onClick, link, square = false, large = false}) => {
  if (link) {
    return <a href={link} className={`button  ${square ? 'button--square' : ''} ${large ? 'button--large' : ''}`}>
    <span >
      {title}
    </span>
    </a>
  }
  return  <button onClick={onClick}>
    <span className={`button  ${square ? 'button--square' : ''} ${large ? 'button--large' : ''}`}>
      {title}
    </span>
    </button>
  ;
};

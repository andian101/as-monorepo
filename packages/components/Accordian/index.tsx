"use client";

import ShowHide from "@/images/svg/show-hide";
import "./accordian.css";
import React, { useState } from "react";

type AccordianProps = {
  title: string;
  content: React.ReactNode;
};

export const Accordian = ({ title, content }: AccordianProps) => {
  const [open, setOpen] = useState(false);
  return (
    <div className='accordion component js-accordion'>
      <button
        className='accordion__button js-accordion-button'
        onClick={() => setOpen(!open)}
      >
        <h3 className='heading heading--sub js-accordion-heading accordion__heading'>
          {title}
        </h3>
        <span className='accordion__button-label heading--small'>
          <span
            style={{ marginRight: "0.5rem", rotate: open ? "180deg" : "0deg" }}
          >
            <ShowHide />
          </span>

          <span className='js-accordion-label'>
            {open ? "Hide" : "Show More"}
          </span>
        </span>
      </button>
      {open && content}
    </div>
  );
};

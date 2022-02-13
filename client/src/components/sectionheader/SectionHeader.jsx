import React from "react";

const SectionHeader = (props) => {
  return (
    <div className="section_header_container">
      <div className="section_header_middle">
        <div className='section_header_line left' />
        <div className="section_header_main">
          <p>{props.title}</p>
        </div>
      </div>
    </div>
  );
};

export default SectionHeader;

import React from "react";

const TextArea = (props) => {
  const { onChange, title, type } = props;
  return (
    <div className="input_container">
      <textarea type={type} onChange={onChange} {...props} />
      <span>{title}</span>
    </div>
  );
};
export default TextArea;

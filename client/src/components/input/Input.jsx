import React from "react";

const Input = (props) => {
  const { onChange, title, type, value } = props;
  return (
    <div className="input_container">
      <input type={type} onChange={onChange} value={value} {...props} />
      <span>{title}</span>
    </div>
  );
};
export default Input;

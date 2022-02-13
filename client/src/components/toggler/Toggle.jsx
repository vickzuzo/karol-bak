import React from "react";

const Toggle = (props) => {
  return (
    <label className="custom_toggle_label" aria-label={props.aria_label}>
      <input
        type="checkbox"
        aria-label={props.aria_lable}
        checked={props.checked}
        onChange={props.onChange}
      />
      <span></span>
      <i className="indicator"></i>
    </label>
  );
};

export default Toggle;

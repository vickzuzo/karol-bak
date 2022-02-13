import React from "react";
import Icon from "react-icons-kit";
import { ic_check_circle } from "react-icons-kit/md/ic_check_circle";
import { ic_cancel } from "react-icons-kit/md/ic_cancel";
import { connect } from "react-redux";

const AlertBox = (props) => {
  return (
    <div>
      {props.site.error !== "" && (
        <div className="alert_container error">
          <div className="alert_box_icon_container">
            <Icon icon={ic_cancel} size={24} />
            <p className="message_text">{props.site.error}</p>
          </div>
        </div>
      )}

      {props.site.success !== "" && (
        <div className="alert_container success">
          <div className="alert_box_icon_container">
            <Icon icon={ic_check_circle} size={24} />
            <p className="message_text">{props.site.success}</p>
          </div>
        </div>
      )}
    </div>
  );
};

const mapStateToProps = (state) => ({
  site: state.site,
});

export default connect(mapStateToProps)(AlertBox);

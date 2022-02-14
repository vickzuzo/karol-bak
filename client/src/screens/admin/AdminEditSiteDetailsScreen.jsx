import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import {
  AdminHeader,
  AlertBox,
  Footer,
  Input,
  PageHeader,
} from "../../components";
import apiClient from "../../query/api";
import {
  fetchSiteData,
  setError,
  setSuccess,
  setUser,
  startLoading,
  stopLoading,
} from "../../state/actions";

const AdminEditSiteDetailsScreen = (props) => {
  const [email, setEmail] = useState(props.site.email ? props.site.email : "");
  const [phoneNumber, setPhoneNumber] = useState(
    props.site.phone_number ? props.site.phone_number : ""
  );
  const [facebookLink, setFacebookLink] = useState(
    props.site.facebook_link ? props.site.facebook_link : ""
  );
  const [instagramLink, setInstagramLink] = useState(
    props.site.instagram_link ? props.site.instagram_link : ""
  );
  const [twitterLink, setTwitterLink] = useState(
    props.site.twitter_link ? props.site.twitter_link : ""
  );

  const handleEmailChange = (e) => {
    const { value } = e.target;
    setEmail(value);
  };
  const handlePhoneNumberChange = (e) => {
    const { value } = e.target;
    setPhoneNumber(value);
  };
  const handleFacebookLinkChange = (e) => {
    const { value } = e.target;
    setFacebookLink(value);
  };
  const handleInstagramLinkChange = (e) => {
    const { value } = e.target;
    setInstagramLink(value);
  };
  const handleTwitterLinkChange = (e) => {
    const { value } = e.target;
    setTwitterLink(value);
  };

  useEffect(() => {
    props.fetchSiteData();
  }, []);

  const onSubmit = async (e) => {
    e.preventDefault();
    props.startLoading();
    const updates = {
      email,
      phone_number: phoneNumber,
      facebook_link: facebookLink,
      instagram_link: instagramLink,
      twitter_link: twitterLink,
    };
    try {
      const { data } = await apiClient.post("/api/site/update_site", {
        updates,
        id: props.site._id,
      });

      const user = {
        email: data.user.email,
        _id: data.user._id,
        token: data.token,
      };
      props.setUser(user);
      props.setSuccess("Updated Successfully");
      props.stopLoading();
      setTimeout(() => {
        props.fetchSiteDetails();
        props.setSuccess("");
      }, 3000);
    } catch (error) {
      if (error.response !== undefined) {
        props.setError(error?.response.data.error);
      }
      props.stopLoading();
      setTimeout(() => {
        props.setError("");
        props.setSuccess("");
      }, 5000);
    }
  };

  return (
    <div>
      <AdminHeader />
      <PageHeader title="Edit Site Details" />
      <div className="pageBody_80">
        <div className="admin_card">
          <form onSubmit={onSubmit} className="admin_edit_site_item_container">
            <Input
              type="text"
              title="Email"
              value={email}
              onChange={handleEmailChange}
            />
            <Input
              type="text"
              title="Phone Number"
              value={phoneNumber}
              onChange={handlePhoneNumberChange}
            />
            <Input
              type="text"
              title="Facebook Link"
              value={facebookLink}
              onChange={handleFacebookLinkChange}
            />
            <Input
              type="text"
              title="Instagram Link"
              value={instagramLink}
              onChange={handleInstagramLinkChange}
            />
            <Input
              type="text"
              title="Twitter Link"
              value={twitterLink}
              onChange={handleTwitterLinkChange}
            />
            <AlertBox />
            <div className="input_container">
              <button onClick={onSubmit} className="input_button">
                {props.site.loading ? (
                  <div className="auth_input_loader" />
                ) : (
                  "SAVE UPDATES"
                )}
              </button>
            </div>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
};
const mapStateToProps = (state) => ({
  site: state.site,
  user: state.user,
});

const mapDispatchToProps = (dispatch) => ({
  setSuccess: (text) => dispatch(setSuccess(text)),
  setError: (text) => dispatch(setError(text)),
  setUser: (user) => dispatch(setUser(user)),
  startLoading: () => dispatch(startLoading()),
  stopLoading: () => dispatch(stopLoading()),
  fetchSiteData: () => dispatch(fetchSiteData()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AdminEditSiteDetailsScreen);

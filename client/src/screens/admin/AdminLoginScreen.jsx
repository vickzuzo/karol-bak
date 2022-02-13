import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { AdminHeader, AlertBox, Footer, Input } from "../../components";
import apiClient from "../../query/api";
import { History } from "../../routers/AppRouter";
import {
  setError,
  setSuccess,
  setUser,
  startLoading,
  stopLoading,
} from "../../state/actions";

const AdminLoginScreen = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    if (props.user.token !== "") {
      History.push("/admin/products");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleEmailChange = (e) => {
    const { value } = e.target;
    setEmail(value);
  };

  const handlePasswordChange = (e) => {
    const { value } = e.target;
    setPassword(value);
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    props.startLoading();

    try {
      const { data } = await apiClient.post("/api/auth/login", {
        email,
        password,
      });

      const user = {
        email: data.user.email,
        _id: data.user._id,
        token: data.token,
      };
      props.setUser(user);
      props.setSuccess("login successful");
      props.stopLoading();
      setTimeout(() => {
        History.push("/admin/products");
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
      <AdminHeader space />
      <div className="pageBody_80">
        <div className="admin_card width-60">
          <Input title="Email" onChange={handleEmailChange} value={email} />
          <Input
            title="Password"
            onChange={handlePasswordChange}
            value={password}
          />
          <AlertBox />
          <div className="input_container">
            <button className="input_button" onClick={onSubmit}>
              {props.site.loading ? (
                <div className="auth_input_loader" />
              ) : (
                "LOGIN"
              )}
            </button>
          </div>
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
});

export default connect(mapStateToProps, mapDispatchToProps)(AdminLoginScreen);

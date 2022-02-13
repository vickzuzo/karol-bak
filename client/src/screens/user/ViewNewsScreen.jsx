import React from "react";
import { Header, PageHeader, Footer } from "../../components";

const ViewNewsScreen = (props) => {
  const { state } = props.location;
  return (
    <div>
      <Header />
      <PageHeader title={state.title} />
      <div className="pageBody_80">
        <div className="news_details_container">
          <div className="news_details_image_holder">
            <img src={state.images[0]} alt="news_img" />
          </div>
          <div className="news_details_content">
            <p className="title">{state.title}</p>
            <p className="description">{state.content}</p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ViewNewsScreen;

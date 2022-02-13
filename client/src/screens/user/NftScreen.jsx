import React from "react";
import { Header, PageHeader, Footer } from "../../components";

const NftScreen = () => {
  return (
    <div>
      <Header />
      <PageHeader title="Non Fungible Token (NFT)" />
      <div className="pageBody_80">
        <div className="nft_container">
          <div className="nft_text">
            <p>NFT</p>
          </div>
          <div className="nft_content">
            <h1>COMING SOON!!!</h1>
            <p>Our NFTs section is still under construction.</p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default NftScreen;

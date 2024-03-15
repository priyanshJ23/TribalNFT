import React from "react";

import CommonSection from "../components/ui/Common-section/CommonSection";
import { Container, Row, Col } from "reactstrap";

import "../styles/wallet.css";

const wallet__data = [
  {
    title: "Trust Wallet",
    desc: "Explore our vast collection of NFTs, each with its own distinct value and rarity. From rare collectibles to unique digital art, our NFTs are sure to capture your imagination.",
    icon: "ri-bit-coin-line",
  },

  {
    title: "Phantom",
    desc: "Explore our vast collection of NFTs, each with its own distinct value and rarity. From rare collectibles to unique digital art, our NFTs are sure to capture your imagination.",
    icon: "ri-coin-line",
  },

  {
    title: "Metamask",
    desc: "Explore our vast collection of NFTs, each with its own distinct value and rarity. From rare collectibles to unique digital art, our NFTs are sure to capture your imagination.",
    icon: "ri-money-cny-circle-line",
  },

  {
    title: "Token Pocket",
    desc: "Explore our vast collection of NFTs, each with its own distinct value and rarity. From rare collectibles to unique digital art, our NFTs are sure to capture your imagination.",
    icon: "ri-bit-coin-line",
  },
];

const Wallet = () => {
  return (
    <>
      <CommonSection title="Connect Wallet" />
      <section>
        <Container>
          <Row>
            <Col lg="12" className="mb-5 text-center">
              <div className="w-50 m-auto">
                <h3 className="text-light">Connect your wallet</h3>
                <p>
                Our NFT marketplace is designed to provide a safe and secure environment for buyers and sellers. Our platform utilizes cutting-edge blockchain technology to ensure that each transaction is transparent, verifiable, and secure.
                </p>
              </div>
            </Col>

            {wallet__data.map((item, index) => (
              <Col lg="3" md="4" sm="6" key={index} className="mb-4">
                <div className="wallet__item">
                  <span>
                    <i class={item.icon}></i>
                  </span>
                  <h5>{item.title}</h5>
                  <p>{item.desc}</p>
                </div>
              </Col>
            ))}
          </Row>
        </Container>
      </section>
    </>
  );
};

export default Wallet;

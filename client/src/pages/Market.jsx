import React, { useState, useEffect } from "react";
import CommonSection from "../components/ui/Common-section/CommonSection";
import NftCard from "../components/ui/Nft-card/NftCard";
import { NFT__DATA } from "../assets/data/data"; // Assuming you have NFT data in a separate file
import { Container, Row, Col } from "reactstrap";
import "../styles/market.css";

const Market = () => {
  const [data, setData] = useState([]);
  const [selectedState, setSelectedState] = useState("All States");
  const [selectedcategory, setSelectedcategory] = useState("Categories");

  useEffect(() => {
    // Set initial data on component mount
    setData(NFT__DATA);
  }, []);

  useEffect(() => {
    // Call filterData whenever any filter changes
    filterData(selectedState, selectedcategory);
  }, [selectedState, selectedcategory]);

  const handleState = (e) => {
    setSelectedState(e.target.value);
    setSelectedcategory("Categories"); // Reset category selection when changing state
  };

  const handlecategory = (e) => {
    setSelectedcategory(e.target.value);
  };

  const filterData = (state, category) => {
    let filteredData = NFT__DATA;

    if (state !== "All States") {
      filteredData = filteredData.filter((item) => item.state === state);
    }

    if (category !== "Categories") {
      filteredData = filteredData.filter((item) => item.category === category);
    }

    setData(filteredData);
  };

  return (
    <>
      <CommonSection title={"MarketPlace"} />
      <section>
        <Container>
          <Row>
            <Col lg="12" className="mb-5">
              <div className="market__product__filter d-flex align-items-center justify-content-between">
                <div className="filter__left d-flex align-items-center gap-5">
                  <div className="all__category__filter">
                    <select onChange={handleState} value={selectedState}>
                      <option value="All States">All States</option>
                      <option value="Rajasthan">Rajasthan</option>
                      <option value="MadhyaPradesh">Madhya Pradesh</option>
                    </select>
                  </div>
                  <div className="all__items__filter">
                    {/* Populate categorys based on selected state */}
                    <select onChange={handlecategory} value={selectedcategory}>
                      <option value="Categories">Categories</option>
                      {selectedState === "Rajasthan" && (
                        <>
                          <option value="Photographs">Photographs</option>
                          <option value="Wallart">Wall Art</option>
                          <option value="FramedPrint">Framed Print</option>
                        </>
                      )}
                      {selectedState === "MadhyaPradesh" && (
                        <>
                          <option value="Canvasart">Canvas art</option>
                          <option value="MetalPrint">Metal Print</option>
                          <option value="WoodPrint">Wood Print</option>
                        </>
                      )}
                    </select>
                  </div>
                </div>
              </div>
            </Col>
            {data?.map((item) => (
              <Col lg="3" md="4" sm="6" className="mb-4" key={item.id}>
                <NftCard item={item} />
              </Col>
            ))}
          </Row>
        </Container>
      </section>
    </>
  );
};

export default Market;

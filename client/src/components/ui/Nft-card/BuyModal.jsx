import React from "react";

import "../Modal/modal.css";
import { Link } from "react-router-dom";

const BuyModal = ({ setBuyModal }) => {
  return (
    <div className="modal__wrapper">
      <div className="single__modal">
        <span className="close__modal">
          <i class="ri-close-line" onClick={() => setBuyModal(false)}></i>
        </span>
        <p className="text-center text-light">
         Total Amount <span className="money">9.89 ETH</span>
        </p>

        <div className="input__item mb-4">
         <p style={{color: "white" , fontSize: "1.2rem"}}>To Confirm Your Purchase the wallet must be connected</p>
        </div>

       

        <div className=" d-flex align-items-center justify-content-between">
          <p>You must bid at least</p>
          <span className="money">9.89 ETH</span>
        </div>

        <div className=" d-flex align-items-center justify-content-between">
          <p>Service Fee</p>
          <span className="money">0.129 ETH</span>
        </div>

        <div className=" d-flex align-items-center justify-content-between">
          <p>Total Bid Amount</p>
          <span className="money">0.59 ETH</span>
        </div>
   
     
      <div className="d-flex justify-content-center">
      <Link to ="/Wallet"><button className=" btn btn-success">Purchase</button></Link>
      </div>
      
        <div>
           <p><u>Supported Partners</u> </p> 
            <span>
       <span style={{margin:"1.9rem"}}><img src="https://img.icons8.com/color/52/null/bitcoin--v1.png"/></span>
       <span style={{margin:"1.5rem"}}><img src="https://img.icons8.com/color/48/null/ethereum.png"/></span>
       <span style={{margin:"1.5rem"}}><img src="https://img.icons8.com/external-black-fill-lafs/64/null/external-Solana-cryptocurrency-black-fill-lafs.png"/></span>
       <span style={{margin:"1.5rem"}}><img src="https://img.icons8.com/color/48/null/tether--v1.png"/></span>
       </span>

       </div>
       
        
      </div>
    </div>
  );
};

export default BuyModal;

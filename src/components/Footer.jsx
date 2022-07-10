import React from "react";
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <footer
      style={{
        backgroundColor: "#06ffb0",
        height: "20vh",
        // position: "absolute",
        // bottom: "0",
        width: "100%",
      }}>
      <div
        className='socialMediaIcon'
        style={{
          display: "flex",
          justifyContent: "center",
        }}>
        <div
          className='mediaOne'
          style={{ margin: "10px 20px", fontSize: "30px" }}>
          <FaFacebook />
        </div>
        <div
          className='mediaTwo'
          style={{ margin: "10px 20px", fontSize: "30px" }}>
          <FaInstagram />
        </div>
        <div
          className='mediaThree'
          style={{ margin: "10px 20px", fontSize: "30px" }}>
          <FaTwitter />
        </div>
        <div
          className='mediaFour'
          style={{ margin: "10px 20px", fontSize: "30px" }}>
          <FaYoutube />
        </div>
      </div>
      <div
        className='useFullLinks'
        style={{
          display: "flex",
          justifyContent: "center",
        }}>
        <div className='TandC' style={{ margin: "5px 10px" }}>
          Terms And Condition
        </div>
        <div className='PrivacyPolicy' style={{ margin: "5px 10px" }}>
          Privacy Policy
        </div>
      </div>
    </footer>
  );
};

export default Footer;

import React from "react";
import Image from "next/legacy/image";

import ProfilePic from "../../../assests/ProfilePic.png";
import FloralBg from "../../../assests/FloralBg.png";
import { BiLeftArrowAlt } from "react-icons/bi";
import testimonial from "../../../assests/testimonial.png"

const Testimonials = () => {
  return (
    <div
      style={{
     
        backgroundColor: "#000", // Black background
        padding: "50px",        
      }}
    >
      <h2 className="pl-" style={{ color: "#fff", fontSize: "36px", fontWeight: "bold" }}>
        <span style={{ color: "#ffb800", fontFamily: "cursive" }}>Testimonials</span> <br />
        What our client are saying
      </h2>
      <div
        style={{
          backgroundColor: "#fff",
          margin: "50px auto",
          padding: "30px",
          borderRadius: "20px",
          position: "relative",
          maxWidth: "800px",
          boxShadow: "0 4px 30px rgba(0, 0, 0, 0.3)",
        }}
      >
        <Image
          src={ProfilePic}
          alt="Client Profile"
          style={{
            width: "100px",
            height: "100px",
            borderRadius: "50%",
            margin: "-50px auto 20px auto",
            border: "4px solid #fff",
          }}
        />
        <p style={{ fontSize: "24px", fontStyle: "italic", color: "#000" }}>
          <span style={{ fontSize: "40px", color: "#ffb800" }}>&#8221;</span>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque diam pellentesque
          bibendum non dui volutpat fringilla bibendum. Urna, elit augue urna, vitae feugiat pretium.
        </p>
        <div style={{ marginTop: "20px" }}>
          <span style={{ color: "#ffb800", fontSize: "24px" }}>⭐⭐⭐⭐⭐</span>
        </div>
        <h3 style={{ marginTop: "10px", fontSize: "20px", fontWeight: "bold" }}>Alamin Hasan</h3>
        <p style={{ fontSize: "16px", color: "gray" }}>Food Specialist</p>
      </div>

      {/* Background Floral Image */}
      <div
        style={{
          position: "absolute",
          width: "395.75px",
          height: "500.56px",
          top: "283.49px",
          left: "772px",
          transform: "rotate(13.52deg)",
          opacity: "0.08",
        }}
      >
        <Image
          src={FloralBg}
          alt="Floral Background"
          layout="fill"
          objectFit="contain"
        />
      </div>
    </div>
  );
};

export default Testimonials;

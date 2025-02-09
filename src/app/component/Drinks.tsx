import React from "react";
import Image from "next/legacy/image";
import Drink from "../../../assests/Drinks.png"
const Drinks = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "wrap",
        width: "100%",
        maxWidth: "1320px",
        margin: "0 auto",
        backgroundColor: "#ffffff",
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
        borderRadius: "8px",
        padding: "20px",
        overflow: "hidden",
      }}
    >
      {/* Left Section: Menu */}
      <div
        style={{
          flex: "1",
          padding: "20px",
        }}
      >
        <h2 style={{ fontSize: "2rem", marginBottom: "16px", color: "#333" ,fontWeight:"bold"}}>
          Drinks
        </h2>
        <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
          <li
            style={{
              display: "flex",
              justifyContent: "space-between",
              marginBottom: "12px",
            }}
          >
            <span>
              <strong>Optic Big Breakfast Combo Menu</strong>
              <br />
              <small>Toasted French bread topped with romano, cheddar</small>
              <br />
              <small>560 CAL</small>
            </span>
            <span style={{ color: "#ff6b00", fontWeight: "bold" }}>32$</span>
          </li>
          <li
            style={{
              display: "flex",
              justifyContent: "space-between",
              marginBottom: "12px",
            }}
          >
            <span>
              <strong>Cashew Chicken With Stir-Fry</strong>
              <br />
              <small>Gorgonzola, ricotta, mozzarella, taleggio</small>
              <br />
              <small>700 CAL</small>
            </span>
            <span style={{ color: "#ff6b00", fontWeight: "bold" }}>43$</span>
          </li>
          <li
            style={{
              display: "flex",
              justifyContent: "space-between",
              marginBottom: "12px",
            }}
          >
            <span>
              <strong>Vegetables & Green Salad</strong>
              <br />
              <small>Ground cumin, avocados, peeled and cubed</small>
              <br />
              <small>1000 CAL</small>
            </span>
            <span style={{ color: "#ff6b00", fontWeight: "bold" }}>14$</span>
          </li>
          <li
            style={{
              display: "flex",
              justifyContent: "space-between",
              marginBottom: "12px",
            }}
          >
            <span>
              <strong>Spicy Vegan Potato Curry</strong>
              <br />
              <small>Spreadable cream cheese, crumbled blue cheese</small>
              <br />
              <small>560 CAL</small>
            </span>
            <span style={{ color: "#ff6b00", fontWeight: "bold" }}>35$</span>
          </li>
        </ul>
      </div>

      {/* Right Section: Image */}
      <div
        style={{
          flex: "1",
          padding: "20px",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Image
          src={Drink} // Replace with the actual path in your public folder or a URL
          alt="Main Course Dish"
          width={500}
          height={500}
          style={{
            borderRadius: "8px",
            objectFit: "cover",
          }}
        />
      </div>
    </div>
  );
};

export default Drinks;

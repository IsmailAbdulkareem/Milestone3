import React from "react";
import Image from "next/image";
import TahminaRuml from "../../../assests/TahminaRuml.png"
import JorinaBegum from '../../../assests/JorinaBegum.png'
import MMohammad from '../../../assests/MMohammad.png';
import MunnaKathy from '../../../assests/MunnaKathy.png';
import Tahmina from "../../../assests/Tahmina.png"
import BisnuDevgon from "../../../assests/BisnuDevgon.png";
import MotinMolladsef from "../../../assests/MotinMolladsef.png";
import WilliamRuml from "../../../assests/WilliamRuml.png";
import KetsWilliamRoy from "../../../assests/KetsWilliamRoy.png";
import MahmudKholli from "../../../assests/MahmudKholli.png";
import AtaurRahman from "../../../assests/AtaurRahman.png";
import MonalisaHolly from '../../../assests/MonalisaHolly.png'

const chefs = [
  { name: "TahminaRuml", role: "Chef", img: TahminaRuml },
  { name: "JorinaBegum", role: "Chef", img: JorinaBegum },
  { name: "M.Mohammad", role: "Chef", img: MMohammad },
  { name: "MunnaKathy", role: "Chef", img: MunnaKathy },
  { name: "Tahmina", role: "Chef", img: Tahmina },
  { name: "BisnuDevgon", role: "Chef", img: BisnuDevgon },
  { name: "MotinMolladsef", role: "Chef", img: MotinMolladsef },
  { name: "WilliamRuml", role: "Chef", img: WilliamRuml },
  { name: "KetsWilliamRoy", role: "Chef", img: KetsWilliamRoy },
  { name: "MahmudKholli", role: "Chef", img: MahmudKholli },
  { name: "AtaurRahman", role: "Chef", img: AtaurRahman },
  { name: "MonalisaHolly", role: "Chef", img: MonalisaHolly },
];

const ChefGallery: React.FC = () => {
  return (
    <div
      style={{
        width: "1320px",
        position: "relative", // Changed to relative
        display: "grid",
        gridTemplateColumns: "repeat(4, 1fr)",
        gap: "0px",
        opacity: 1,
        marginTop: "30px", // Add spacing instead of absolute positioning
        marginLeft: "30px", // Optional, if you want padding
      }}
    >
      {chefs.map((chef, index) => (
        <div key={index} style={{ textAlign: "center", color: "white" }}>
          <Image
            src={chef.img}
            alt={chef.name}
            width={320} // Adjusted size for each image
            height={320}
            style={{ borderRadius: "8px" }}
          />
          <h3 style={{ marginTop: "8px",color:"black" , fontSize: "18px" }}>{chef.name}</h3>
          <p style={{ fontSize: "16px",color:"black" , opacity: 0.8 }}>{chef.role}</p>
        </div>
      ))}
    </div>
  );
};

export default ChefGallery;

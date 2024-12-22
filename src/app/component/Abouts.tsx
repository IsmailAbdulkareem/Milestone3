import Image from 'next/image';
import React from 'react';
import tacos from '../../../assests/tacoss.png';
import nuggets from '../../../assests/nuggets.png';
import salad from '../../../assests/salads.png';

const Abouts: React.FC = () => {
  return (
    <div className="about-us-container">
      <div className="images-section">
        <div className="image-wrapper">
          <Image src={tacos} alt="Tacos" width={300} height={300} objectFit="cover" />
        </div>
        <div className="image-wrapper">
          <Image src={nuggets} alt="Chicken Nuggets" width={300} height={300} objectFit="cover" />
        </div>
        <div className="image-wrapper">
          <Image src={salad} alt="Salad" width={300} height={300} objectFit="cover" />
        </div>
      </div>
      <div className="text-section">
        <h2>About us</h2>
        <h3>Food is an important part of a balanced diet</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque diam
          pellentesque bibendum non dui volutpat fringilla bibendum. Urna, elit
          augue urna, vitae feugiat pretium donec id elementum. Ultrices mattis
          vitae mus risus. Lacus nisl, et ac dapibus sit eu velit in consequat.
        </p>
        <div className="buttons">
          <button className="show-more">Show more</button>
          <button className="watch-video">Watch video</button>
        </div>
      </div>
      <style jsx>{`
        .about-us-container {
          display: flex;
          flex-wrap: wrap;
          gap: 20px;
          padding: 20px;
        }
        .images-section {
          display: flex;
          flex-direction: column;
          gap: 20px;
        }
        .image-wrapper {
          width: 100%;
          max-width: 300px;
          height: 300px;
          overflow: hidden;
          border-radius: 10px;
        }
        .text-section {
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          max-width: 600px;
        }
        h2 {
          color: #ff9800;
          font-size: 18px;
          text-transform: uppercase;
          margin: 0;
        }
        h3 {
          font-size: 32px;
          margin: 10px 0;
        }
        p {
          margin: 20px 0;
          line-height: 1.6;
          color: #666;
        }
        .buttons {
          display: flex;
          gap: 10px;
        }
        .show-more,
        .watch-video {
          padding: 10px 20px;
          border: none;
          border-radius: 5px;
          cursor: pointer;
        }
        .show-more {
          background-color: #ff9800;
          color: white;
        }
        .watch-video {
          background-color: transparent;
          color: #ff9800;
          border: 1px solid #ff9800;
        }
      `}</style>
    </div>
  );
};

export default Abouts;

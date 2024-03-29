import React from "react";
import "./FaceRecognition.css";

export default function FaceRecognition({ imageURL, box }) {
  return (
    <div className="center ma">
      <div className="absolute mt2">
        <img id="inputimage" src={imageURL} alt="" className="input-image" />
        <div
          className="bounding-box"
          style={{
            top: box.topRow,
            right: box.rightCol,
            bottom: box.bottomRow,
            left: box.leftCol,
          }}
        ></div>
      </div>
    </div>
  );
}

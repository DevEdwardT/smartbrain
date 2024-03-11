import React from "react";
import Tilt from "react-parallax-tilt";
import "./Logo.css";
import { FaBrain } from "react-icons/fa";
export default function Logo() {
  return (
    <div className="ma4 mt0">
      <Tilt className="Tilt">
        <div>
          <FaBrain className="FaBrain" />
        </div>
      </Tilt>
    </div>
  );
}

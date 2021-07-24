import React from "react";
import "./BarTop.css";
import { Bar } from "react-skills";

const Chart = () => {

  const virsa = {
    width: "50%",
    animation:" Bar 2s",
    backgroundColor:" rgb(198, 136, 83)"
  }
  const virdo = {
    width: "50%",
    animation:" Bar 2s",
    backgroundColor:"rgba(191, 191, 191)"
  }
  const virdar = {
    width: "50%",
    animation:" Bar 2s",
    backgroundColor:"rgba(217, 190, 75)"
  }
  return (
    <>
      <div className="skills">
        <li>
          <div className="text-top-skills">
            <div>
              <h1 className="h1-skills-left2"> 200</h1>
              <h1 className="h1-skills-left3">
                ملیون <br />
                تومن
              </h1>
            </div>
            <div className="text-skills-title">ویرسا</div>
          </div>
          <span className="bar">
            <span className="virsa" style={virsa}> </span>
          </span>
          <span className="text-unit-skills2 text-unit-skills">10</span>
          <span className="text-unit-skills">واحد</span>
        </li>
        <li>
          <div className="text-top-skills">
            <div>
              <h1 className="h1-skills-left2"> 200</h1>
              <h1 className="h1-skills-left3">
                ملیون <br />
                تومن
              </h1>
            </div>
            <div className="text-skills-title">ویردو</div>
          </div>
          <span className="bar">
            <span className="virdor" style={virdo}></span>
          </span>
          <span className="text-unit-skills2 text-unit-skills">10</span>
          <span className="text-unit-skills">واحد</span>
        </li>
        <li>
          <div className="text-top-skills">
            <div>
              <h1 className="h1-skills-left2"> 200</h1>
              <h1 className="h1-skills-left3">
                ملیون <br />
                تومن
              </h1>
            </div>
            <div className="text-skills-title">ویردار</div>
          </div>
          <span className="bar">
            <span className="virdar" style={virdar}></span>
          </span>
          <span className="text-unit-skills2 text-unit-skills">10</span>
          <span className="text-unit-skills">واحد</span>
        </li>
      </div>
    </>
  );
};

export default Chart;

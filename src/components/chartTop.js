import React from "react";
import "./chart.css";
import Doughnutt from "./Doughnut";
import { BsArrowUp } from "react-icons/bs";
import Bar from "./BarTop";
import Loop from "./loopChart"
const ChartTop = () => {
  return (
    <>
   
      <div className="top-chart">
        
        <div className="SkillBars">
          <Bar />
        </div>
        <div className="doughnut-top">
          <Doughnutt />
          <h1 className="h1-chartTop-right">
            <BsArrowUp />
            20%
          </h1>
          <br />
          <h1 className="h1-chartTop-right2"> 500</h1>
          <h1 className="h1-chartTop-right3">
            ملیون <br />
            تومان
          </h1>
          <div>
            <h1 className="h3-title-right1"> 10%</h1>
            <h1 className="h3-title-right2">: محدوده ریسک </h1>
          </div>
        </div>
      </div>

      <div className="bottom-chart">
      <h3 className="h3-bottom">تغیرات ویردار</h3>

        <Loop/>
      </div>
    </>
  );
};
export default ChartTop;

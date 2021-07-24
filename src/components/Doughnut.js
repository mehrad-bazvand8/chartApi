import React, { useEffect, useState } from "react";
import { Doughnut } from "react-chartjs-2";
import "./chart.css";
import axios from "axios";

const Chart = () => {
  const [chartData, setchartData] = useState({});
  const [employeeSalary, setemployeeSalary] = useState([]);
  const [emploteeAge, setemploteeAge] = useState([]);

  const chartt = () => {
  
    setchartData({
      labels: ["40%", "40%", "20%"],
      datasets: [
        {
          borderRadius: 0,
          data: [40, 40, 20],
          borderWidth: 2,
          backgroundColor: [
            "rgba(198, 136, 83 )",
            "rgba(191, 191, 191)",
            "rgba(217, 190, 75)",
          ],
        },
      ],
    });
  };
  useEffect(() => {
    chartt();
  }, []);
  return (
    <div>
      <div>
        <Doughnut
         
          width={200}
          height={150}
          data={chartData}
          options={{
            response: true,
            title: { Text: "THICCNESS SCALE", disply: true },
          }}
        />
        
      </div>
    </div>
  );
};

export default Chart;

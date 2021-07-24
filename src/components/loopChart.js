import React, { useEffect, useState } from "react";
import { Line } from "react-chartjs-2";
import axios from "axios";

const Dankmemes = () => {
  const [chartData, setChartData] = useState({});
  const [employeeSalary, setEmployeeSalary] = useState([]);
  const [employeeAge, setEmployeeAge] = useState([]);

  const chart = () => {
    var config = {
      method: "post",
      url: "https://tc6fcca75e4eca75e4.virdaar.ir/pwa/app_data",
      headers: {
        "API-KEY":
          "hr1uCNM7jEhlD25nrgSEtuBV9QFcuuJIGzjSYxCOwAY364yuBVMrgxKoAIoJbghKhnVTxH8aghfokRHU",
      },
      data: JSON.stringify({
        of: "trends",
      }),
    };

    let empSal = [];
    let empAge = [];
    axios(config)
      .then(function (response) {
        console.log(JSON.stringify(response.data));
        for (const dataObj of response.data) {
          empSal.push(parseInt(dataObj.value));
          const date = new Date(dataObj.create);
          const convertedDate = date.getDate() + "/" + (date.getMonth() + 1) + "/" + date.getFullYear() + ' - ' + date.getHours() + ':' + date.getMinutes()
          empAge.push(convertedDate);
       }

        setChartData({
          labels: empAge,
          datasets: [
            {
              tension: 0.4,
              pointStyle: "rectRot",

              label: "level of thiccness",
              data: empSal,
              borderColor: ["rgba(255, 235, 161)"],
              borderWidth: 1,
              fontSize: 22,
            },
          ],
        });
      })
      .catch(function (error) {
        console.log(error);
      });

    // axios
    //   .get("https://tc6fcca75e4eca75e4.virdaar.ir/pwa/app_data")
    //   .then((res) => {
    //     console.log(res);
    //     for (const dataObj of res.request) {
    //       empSal.push(parseInt(dataObj.name));
    //       empAge.push(parseInt(dataObj.body));
    //     }
    //     setChartData({
    //       labels: empAge,
    //       datasets: [
    //         {
    //           label: "level of thiccness",
    //           data: empSal,
    //           backgroundColor: ["rgba(75, 192, 192, 0.6)"],
    //           borderWidth: 4
    //         }
    //       ]
    //     });
    //   })
    //     .catch((err) => {
    //       console.log(err);
    //     });
    //   console.log(empSal, empAge);
  };

  useEffect(() => {
    chart();
  }, []);
  return (
    <div>
      <div>
        <Line
       
          data={chartData}
          options={{
            plugins: {
              legend: {
                labels: {
                  font: {
                    size: 20,
                    weight: "bold",
                  },
                },
              },
            },
            responsive: true,
            title: { text: "THICCNESS SCALE", display: true },
            // scales: {
            //   yAxes: [
            //     {
            //       ticks: {
            //         autoSkip: true,
            //         maxTicksLimit: 10,
            //         beginAtZero: true,
            //       },
            //       gridLines: {
            //         display: false,
            //       },
            //     },
            //   ],
            //   xAxes: [
            //     {
            //       gridLines: {
            //         display: false,
            //       },
            //     },
            //   ],
            // },
          }}
        />
      </div>
    </div>
  );
};
export default Dankmemes;

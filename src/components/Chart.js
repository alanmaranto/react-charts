import React from "react";
import { Bar, Line, Pie } from "react-chartjs-2";

const Chart = ({ chartData, location, legendPosition }) => {
  return (
    <div className="chart">
      <Bar
        data={chartData}
        /*         width={500}
        height={500} */
        options={{
          //   maintainAspectRatio: false,
          title: {
            display: true,
            text: `Largest Cities in ${location}`,
            fontSize: 25,
          },
          legend: {
            display: true,
            position: legendPosition,
          },
        }}
      />
      <Line
        data={chartData}
        /*         width={500}
        height={500} */
        options={{
          //   maintainAspectRatio: false,
          title: {
            display: true,
            text: `Largest Cities in ${location}`,
            fontSize: 25,
          },
          legend: {
            display: true,
            position: legendPosition,
          },
        }}
      />
      <Pie
        data={chartData}
        /*         width={500}
        height={500} */
        options={{
          //   maintainAspectRatio: false,
          title: {
            display: true,
            text: `Largest Cities in ${location}`,
            fontSize: 25,
          },
          legend: {
            display: true,
            position: legendPosition,
          },
        }}
      />
    </div>
  );
};

export default Chart;

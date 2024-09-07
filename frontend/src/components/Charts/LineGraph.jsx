import React from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  LineElement,
  PointElement,
  CategoryScale,
  LinearScale,
} from "chart.js";

// Register the necessary components
ChartJS.register(
  Title,
  Tooltip,
  Legend,
  LineElement,
  PointElement,
  CategoryScale,
  LinearScale
);

const LineGraph = () => {
  const data = {
    labels: ["January", "February", "March", "April", "May", "June", "July"],
    datasets: [
      {
        label: "Monthly Sales",
        data: [65, 59, 80, 81, 56, 55, 40],
        fill: false,
        borderColor: "rgb(75, 192, 192)",
        tension: 0.1,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      tooltip: {
        callbacks: {
          label: function (tooltipItem) {
            return `Sales: ${tooltipItem.raw}`;
          },
        },
      },
    },
    scales: {
      x: {
        title: {
          display: true,
          text: "Month",
        },
      },
      y: {
        title: {
          display: true,
          text: "Sales",
        },
      },
    },
  };

  return (
    <div>
      <h2>Line Chart Example</h2>
      <div className="w-[500px]  object-fill">
        <Line data={data} options={options} />
      </div>
    </div>
  );
};

export default LineGraph;

// export const FETCH_DATA_REQUEST = 'FETCH_DATA_REQUEST';
// export const FETCH_DATA_SUCCESS = 'FETCH_DATA_SUCCESS';
// export const FETCH_DATA_FAILURE = 'FETCH_DATA_FAILURE';

// const DATA_STATUS = {
//   FETCH_DATA_REQUEST :'FETCH_DATA_REQUEST';
//    FETCH_DATA_SUCCESS : 'FETCH_DATA_SUCCESS';
//  FETCH_DATA_FAILURE : 'FETCH_DATA_FAILURE';
// }
// export default DATA_STATUS;

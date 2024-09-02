import React from 'react'
import { Bar } from 'react-chartjs-2'
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

  ChartJS.register(
    Title,
    Tooltip,
    Legend,
    LineElement,
    PointElement,
    CategoryScale,
    LinearScale
  );




const BarChart = () => {
    
  return (
    <div>
         <p>Reagent Stocks Data</p>        
     <Bar />
    </div>
  )
}

export default BarChart

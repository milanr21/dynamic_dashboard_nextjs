"use client";

import React, { useState, useEffect } from "react";
import { Bar } from "react-chartjs-2";

import {
  Tooltip,
  Legend,
  Title,
  BarElement,
  LinearScale,
  CategoryScale,
  Chart as ChartJS,
} from "chart.js";

ChartJS.register(
  Tooltip,
  Legend,
  Title,
  BarElement,
  LinearScale,
  CategoryScale
);

const BarChart = () => {
  const [chartData, setChartData] = useState({
    datasets: [],
  });

  const [chartOptions, setChartOptions] = useState({});

  useEffect(() => {
    setChartData({
      labels: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
      datasets: [
        {
          label: "Total Sales",
          data: ["1125", "3211", "1325", "2425", "1525", "4625", "3725"],
          backgroundColor: "rgba(77, 217, 137, 0.8)",
          borderColor: "rgba(77, 217, 137, 0.7)",
          borderWidth: 1,
        },
      ],
    });

    setChartOptions({
      responsive: true,
      plugins: {
        legend: {
          position: "top",
        },
        title: {
          display: true,
          title: "Total Sales ",
        },
      },
    });
  }, []);

  return (
    <>
      <div className="w-full md:col-span-2 relative h-[50vh] lg:h-[70vh]  p-4 border-black  m-auto shadow-lg rounded-lg bg-gray-100">
        <Bar data={chartData} options={chartOptions} />
      </div>
    </>
  );
};

export default BarChart;

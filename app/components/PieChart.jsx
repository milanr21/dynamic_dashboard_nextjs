"use client";

import React from "react";

import { useState, useEffect } from "react";

import { Pie } from "react-chartjs-2";

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

const PieChart = () => {
  const [chartData, setData] = useState({
    labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
    datasets: [],
  });

  const [chartOptions, setChartOptions] = useState({});

  return (
    <div className="w-[10rem] h-[10rem]">
      <Pie data={chartData} />
    </div>
  );
};

export default PieChart;

'use client';

import React, { useState, useEffect } from 'react';
import {
  Tooltip,
  Legend,
  Title,
  BarElement,
  LinearScale,
  CategoryScale,
  ArcElement,
  Chart as ChartJS,
} from 'chart.js';
import { Pie } from 'react-chartjs-2';

ChartJS.register(Tooltip, Legend, Title, ArcElement);

const PieChart = () => {
  const data = {
    labels: ['Q1', 'Q2', 'Q3', 'Q4', 'Q5', 'Q6'],

    datasets: [
      {
        data: [10, 20, 15, 25, 30, 10], // Placeholder data, replace with your values
        backgroundColor: [
          'rgba(255, 99, 132, 0.6)',
          'rgba(54, 162, 235, 0.6)',
          'rgba(255, 206, 86, 0.6)',
          'rgba(75, 192, 192, 0.6)',
          'rgba(153, 102, 255, 0.6)',
          'rgba(255, 159, 64, 0.6)',
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)',
        ],
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    title: {
      display: true,
      text: 'Quarterly Data Distribution',
      fontSize: 16,
    },
    legend: {
      display: true,
      position: 'bottom',
    },
  };

  return (
    <div className='w-full md:col-span-2 relative h-[50vh] lg:h-[70vh] p-4 border-black m-auto shadow-lg rounded-lg bg-gray-100'>
      <Pie data={data} options={options} />
    </div>
  );
};

export default PieChart;

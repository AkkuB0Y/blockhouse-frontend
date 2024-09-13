import React from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, PointElement, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';

// Register components required for the Bar chart
ChartJS.register(CategoryScale, PointElement, LinearScale, BarElement, Title, Tooltip, Legend);

interface BarChartProps {
  labels: string[];
  data: number[];
}

const BarChart: React.FC<BarChartProps> = ({ labels, data }) => {
  const chartData = {
    labels: labels, // ["Red", "Blue", "Yellow"]
    datasets: [
      {
        label: 'Dataset 1',
        data: data, // [300, 50, 100]
        backgroundColor: [
          'rgba(255, 99, 132, 0.9)',
          'rgba(54, 162, 235, 0.9)',
          'rgba(255, 206, 86, 0.9)',
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
        ],
        borderWidth: 1,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top' as const,
      },
    },
  };

  return <Bar data={chartData} options={options} />;
};

export default BarChart;

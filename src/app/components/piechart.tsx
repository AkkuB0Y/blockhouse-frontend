import React from 'react';
import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, PointElement, Tooltip, Legend } from 'chart.js';

// Register components required for the Pie chart
ChartJS.register(ArcElement, Tooltip, PointElement, Legend);

interface PieChartProps {
  labels: string[];
  data: number[];
}

const PieChart: React.FC<PieChartProps> = ({ labels, data }) => {
  const chartData = {
    labels: labels, // ["Red", "Blue", "Yellow"]
    datasets: [
      {
        label: 'Dataset 1',
        data: data, // [300, 50, 100]
        backgroundColor: [
          'rgba(255, 99, 132, 0.8)',
          'rgba(54, 162, 235, 0.8)',
          'rgba(255, 206, 86, 0.8)',
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

  return <Pie data={chartData} options={options} />;
};

export default PieChart;

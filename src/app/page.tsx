"use client";

import { useState, useEffect } from "react";
import React from "react";
import LineChart from "./components/linechart";
import PieChart from "./components/piechart";
import BarChart from "./components/barchart";
import CandlestickChart from "./components/candlestick";


export default function Home() {

  interface ChartData {
    labels: string[];
    data: number[];
  }

  interface CandlestickDataPoint {
    x: string; // Date in string format
    open: number;
    high: number;
    low: number;
    close: number;
  }
  // state variables for each type of data
  const [candlestickData, setCandlestickData] = useState<CandlestickDataPoint[]>([]);
  const [lineChartData, setLineChartData] = useState<ChartData>({ labels: [], data: [] });
  const [barChartData, setBarChartData] = useState<ChartData>({ labels: [], data: [] });
  const [pieChartData, setPieChartData] = useState<ChartData>({ labels: [], data: [] });

  // fetching each type of data
  const fetchCandlestickData = () => {
    fetch('http://127.0.0.1:8000/api/candlestick-data/', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then(response => response.json())
      .then(data => {
        console.log(data);
        setCandlestickData(data.data);
      })
      .catch(error => {
        console.error('Error:', error);
      });
  };

  const fetchLineChartData = () => {
    fetch('http://127.0.0.1:8000/api/line-chart-data/', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then(response => response.json())
      .then(data => {
        console.log(data);
        setLineChartData(data);
      })
      .catch(error => {
        console.error('Error:', error);
      });
  };

  const fetchBarChartData = () => {
    fetch('http://127.0.0.1:8000/api/bar-chart-data/', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then(response => response.json())
      .then(data => {
        console.log(data);
        setBarChartData(data);
      })
      .catch(error => {
        console.error('Error:', error);
      });
  };

  const fetchPieChartData = () => {
    fetch('http://127.0.0.1:8000/api/pie-chart-data/', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then(response => response.json())
      .then(data => {
        console.log(data);
        setPieChartData(data);
      })
      .catch(error => {
        console.error('Error:', error);
      });
  };

  // on reload ensure everything is loaded!
  useEffect(() => {
    fetchCandlestickData();
    fetchLineChartData();
    fetchBarChartData();
    fetchPieChartData();
  }, [])

  return (
    <div className="items-center px-8">
      <h1 className="text-center py-12 text-5xl font-bold">
        <span className="text-indigo-600">BlockHouse</span> Charts
      </h1>

      <div className="flex flex-row items-center justify-center">
        <div className="bg-slate-50 p-6 mb-10 rounded-xl shadow-md w-full max-w-[500px]">
          <h1 className="text-center text-2xl pb-5 font-bold">Pie Chart</h1>
          <PieChart labels={pieChartData.labels} data={pieChartData.data} />
        </div> 
      </div>
      
      <div className="flex flex-col md:flex-row items-center justify-center">
        {/* Inner container for the chart with max dimensions, background, and padding */}
        <div className="bg-slate-50 p-6 rounded-xl shadow-md w-full max-w-[600px]">
          <h1 className="text-center text-2xl pb-5 font-bold">Line Chart</h1>
          <LineChart labels={lineChartData.labels} data={lineChartData.data} />
        </div>  

        <div className="bg-slate-50 p-6 ml-10 rounded-xl shadow-md w-full max-w-[600px]">
          <h1 className="text-center text-2xl pb-5 font-bold">Bar Chart</h1>
          <BarChart labels={barChartData.labels} data={barChartData.data} />
        </div> 

      </div>

      

      <div className="flex flex-row items-center justify-center">
        <div className="bg-slate-50 p-6 mt-10 rounded-xl shadow-md w-full max-w-[1000px]">
          <h1 className="text-center text-2xl pb-5 font-bold">Candlestick Chart</h1>
          <CandlestickChart data={candlestickData} />
        </div> 
      </div>
    </div>
  );

}

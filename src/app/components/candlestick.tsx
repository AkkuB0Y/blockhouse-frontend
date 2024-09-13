import React from 'react';
import { ResponsiveContainer, ComposedChart, Bar, XAxis, YAxis, Tooltip, Line } from 'recharts';

interface DataPoint {
  x: string;
  open: number;
  high: number;
  low: number;
  close: number;
}

interface CandlestickChartProps {
  data: DataPoint[];
}

const CandlestickChart: React.FC<CandlestickChartProps> = ({ data }) => {
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
  };

  return (
    <ResponsiveContainer width="100%" height={400}>
      <ComposedChart data={data}>
        <XAxis 
          dataKey="x" 
          tickFormatter={formatDate}
          label={{ value: 'Date', position: 'insideBottom', offset: -5 }}
        />
        <YAxis 
          label={{ value: 'Price', angle: -90, position: 'insideLeft' }}
        />
        <Tooltip
          labelFormatter={formatDate}
          formatter={(value: number, name: string) => [`$${value.toFixed(2)}`, name]}
        />
        <Bar
          dataKey="low"
          fill="#8884d8"
          opacity={0}
          yAxisId={0}
        />
        <Bar
          dataKey="high"
          fill="#82ca9d"
          opacity={0}
          yAxisId={0}
        />
        <Line
          type="monotone"
          dataKey="open"
          stroke="#8884d8"
          dot={false}
          strokeWidth={2}
          yAxisId={0}
        />
        <Line
          type="monotone"
          dataKey="close"
          stroke="#82ca9d"
          dot={false}
          strokeWidth={2}
          yAxisId={0}
        />
      </ComposedChart>
    </ResponsiveContainer>
  );
};

export default CandlestickChart;
import React from 'react';
import { Chart } from 'react-charts';
export default function StockChart() {
  
  const data = React.useMemo(
    () => [
      {
        label: 'Stock Prices',
        data: [
          [1, 10],
          [2, 20],
          [3, 15],
          [4, 25],
          // Add more data points as needed
        ],
      },
    ],
    []
  );

  // Define your chart configuration
  const axes = React.useMemo(
    () => [
      { primary: true, type: 'linear', position: 'bottom' },
      { type: 'linear', position: 'left' },
    ],
    []
  );

  // Create the chart
  return (
    <div className="chart-container">
      <Chart style={{height:"80vh"}} data={data} axes={axes} />
    </div>
  );
}

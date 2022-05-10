import { Line } from 'react-chartjs-2'
import Chart from 'chart.js/auto'

const data = {
  labels: [
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec',
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
  ],
  datasets: [
    {
      fill: false,
      lineTension: 0.01,
      backgroundColor: '#ef4b09',
      borderColor: '#ef4b09',
      borderCapStyle: 'butt',
      borderDash: [],
      borderDashOffset: 0.0,
      borderJoinStyle: 'miter',
      pointBorderColor: '#ef4b09',
      pointBackgroundColor: '#ef4b09',
      pointBorderWidth: 1,
      pointHoverRadius: 5,
      pointHoverBackgroundColor: '#ef4b09',
      pointHoverBorderColor: '#ef4b09',
      pointHoverBorderWidth: 2,
      pointRadius: 1,
      pointHitRadius: 10,
      data: [2442, 2652, 2969, 3913, 3507, 2159, 2300, 2445, 2726, 2200],
    },
  ],
}

const options = {
  plugins: {
    legend: {
      display: false,
    },
  },
}

import React from 'react'

const PortfolioChart = () => {
  return <Line data={data} options={options} width={400} height={150} />
}

export default PortfolioChart
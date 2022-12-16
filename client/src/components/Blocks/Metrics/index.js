import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import InfoBlock from 'components/elements/InfoBlock'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';

function Metrics(props) {

  ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
  );

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
    },
  };

  const labels = ['00:00', '01:00', '02:00', '03:00', '04:00', '05:00', '06:00', '07:00', '08:00', '09:00', '10:00'];

  const data = {
    labels,
    datasets: [
      {
        label: 'CPU',
        data: [1 , 20, 44],
        borderColor: 'rgb(255, 99, 132)',
      },
      {
        label: 'memory',
        data: [0, 25, 50, 25, 100],
        borderColor: 'rgb(53, 162, 235)',
      },
      {
        label: 'disk',
        data: [0, 25, 50, 25, 100],
        borderColor: 'rgb(53, 162, 235)',
      },
    ],
  };
  return (
    <InfoBlock title='Metrics'>
      <Line options={options} data={data} />
    </InfoBlock>
  )
}

Metrics.propTypes = {}

export default Metrics;
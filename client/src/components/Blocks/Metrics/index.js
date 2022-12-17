import React, { useEffect, useState } from 'react'
import InfoBlock from 'components/elements/InfoBlock'
import 'chart.js/auto';
import { Chart } from 'react-chartjs-2';
import { useSelector } from 'react-redux';

function Metrics() {
  const { metrics } = useSelector( state => state.serviceMetrics );
  const { node } = useSelector( state => state.serviceFilter );
  const [ nodeMetrics, setNodeMetrics ] = useState([]);
  const [ labels, setLabels ] = useState(['00:00', '01:00', '02:00', '03:00', '04:00']);

  useEffect( () => {
    if (!node || !metrics) {
      return setNodeMetrics([]);
    }
    const arrayMetrics = metrics.filter( item => item.node_id === node.id)

    setNodeMetrics( arrayMetrics );
    if ( arrayMetrics.length > 5 ) {
      setLabels(nodeMetrics.map( metric => metric.datetime.split(' ')[1] ).slice(-5))
    }
  }, [node, metrics]);

  const options = {
    responsive: true,
    plugins: {
      animation: false,
      legend: {
        position: 'top',
      }
    },
    scales: {
      y: { // defining min and max so hiding the dataset does not change scale range
        min: 0,
        max: 100
      }
    },
  };

  const data = {
    labels,
    datasets: [
      {
        label: 'CPU',
        data: nodeMetrics.map( metric => metric.cpu_utilization ).slice(-5),
        borderColor: '#f90000',
      },
      {
        label: 'memory',
        data: nodeMetrics.map( metric => metric.memory_utilization ).slice(-5),
        borderColor: '#0006f9',
      },
      {
        label: 'disk',
        data: nodeMetrics.map( metric => metric.disk_utilization ).slice(-5),
        borderColor: '#3cf900',
      },
    ],
    options: {
      animation: {
        tension: {
          duration: 1000,
          easing: 'linear',
          from: 1,
          to: 0,
          loop: true
        }
  
      },
      scales: {
        y:{
          min: -15,
          max: 15,
          stepSize: 5,
        },
      },
    }
  };
  return (
    <InfoBlock title='Metrics'>
      <Chart type='line' options={options} data={data} />
    </InfoBlock>
  )
}

export default Metrics;
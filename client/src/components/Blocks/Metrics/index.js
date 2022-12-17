import React, { useEffect, useState } from 'react';
import InfoBlock from 'components/elements/InfoBlock';
import styled from 'styled-components';
import 'chart.js/auto';
import { Chart } from 'react-chartjs-2';
import { useSelector } from 'react-redux';
import { addMinutes, format, parse } from 'date-fns';

const Container = styled.div`
  position: relative;
  &:before {
    content: '';
    display: block;
    padding-top: 48%;
  }
`

const WrapperContainer = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
`

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
    if ( arrayMetrics.length > 4 ) {
      setLabels(
        [...labels, format(addMinutes(parse( labels[labels.length - 1],  'mm:ss', new Date()), 1), 'mm:ss')].slice(-5)
      )
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
      y: {
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
        data: nodeMetrics.map( metric => metric.cpu_utilization ).slice(-4),
        borderColor: '#ff7700',
      },
      {
        label: 'memory',
        data: nodeMetrics.map( metric => metric.memory_utilization ).slice(-4),
        borderColor: '#01a9ff',
      },
      {
        label: 'disk',
        data: nodeMetrics.map( metric => metric.disk_utilization ).slice(-4),
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
      <Container>
        <WrapperContainer>
          <Chart type='line' options={options} data={data} />
        </WrapperContainer>
      </Container>
    </InfoBlock>
  )
}

export default Metrics;
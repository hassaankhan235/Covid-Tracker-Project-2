import React from 'react'
import {Line} from 'react-chartjs-2'

const Chart = ({data}) => {

  const lineChart = 
  <Line 
  data = {{
    labels: data.map(daily => daily.date),
    datasets: [{
      data: data.map(daily => daily.confirmed),
      label: 'Infected',
      borderColor: '#3333ff'
    },{
      data: data.map(({deaths}) => deaths),
      label: 'Deaths',
      fill: true,
      backgroundColor: "rgba(75,192,192,0.2)",
      borderColor: 'red',
    }]
  }} />
  return (
    <div 
    className="mx-1 w-3/5">
      {lineChart}
    </div>
  )
}

export default Chart

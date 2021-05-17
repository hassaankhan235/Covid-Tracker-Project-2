import React from 'react'
import Line from 'react-charjs2'

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
      borderColor: 'red',
      backgroundColor: 'rgba(255, 0, 0, 0.5)'
    }]
  }} />
  return (
    <div className="text-white">
      {lineChart}
    </div>
  )
}

export default Chart

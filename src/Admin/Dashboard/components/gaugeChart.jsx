import React from 'react'
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from 'recharts'

const GaugeChart = ({ value, maxValue }) => {
  const percentage = (value / maxValue) * 100
  const data = [
    { name: 'Disponible', value: percentage },
    { name: 'No disponible', value: 100 - percentage }
  ]

  const COLORS = ['#0088FE', '#E0E0E0']

  const CustomTooltip = ({ active, payload }) => {
    if (active && payload && payload.length) {
      return (
                <div style={{ backgroundColor: '#fff', border: '1px solid #ccc', padding: '5px' }}>
                    <p>{`${payload[0].name}: ${payload[0].value.toFixed(2)}%`}</p>
                </div>
      )
    }
    return null
  }

  return (
    <>
        <ResponsiveContainer width="60%" height='80%' >
            <PieChart>
                <Pie
                    data={data}
                    startAngle={180}
                    endAngle={0}
                    innerRadius={70}
                    outerRadius={100}
                    paddingAngle={5}
                    dataKey="value"
                    nameKey="name"
                >
                    {data.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                </Pie>
                <Tooltip content={<CustomTooltip />} />
            </PieChart>
        </ResponsiveContainer>
        <h1 className='absolute'>{percentage}%</h1>
    </>
  )
}

export default GaugeChart

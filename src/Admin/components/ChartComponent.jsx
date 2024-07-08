import { createChart, ColorType } from 'lightweight-charts'
import React, { useEffect, useRef } from 'react'

export const ChartComponent = props => {
  const {
    data,
    colors: {
      backgroundColor = 'white',
      lineColor = '#2962FF',
      textColor = 'black',
      areaTopColor = '#2962FF',
      areaBottomColor = 'rgba(41, 98, 255, 0.28)'
    } = {}
  } = props

  const chartContainerRef = useRef()

  useEffect(
    () => {
      const handleResize = () => {
        chart.applyOptions({ width: chartContainerRef.current.clientWidth })
      }

      const chart = createChart(chartContainerRef.current, {
        layout: {
          background: { type: ColorType.Solid, color: backgroundColor },
          textColor
        },
        width: chartContainerRef.current.clientWidth,
        height: 300
      })
      chart.timeScale().fitContent()

      const newSeries = chart.addHistogramSeries({ lineColor, topColor: areaTopColor, bottomColor: areaBottomColor })
      newSeries.setData(data)

      window.addEventListener('resize', handleResize)

      return () => {
        window.removeEventListener('resize', handleResize)

        chart.remove()
      }
    },
    [data, backgroundColor, lineColor, textColor, areaTopColor, areaBottomColor]
  )

  const chartStyle = {
    width: '40%', // Ajusta aquí el porcentaje deseado
    height: '300px', // Altura fija o adaptable según necesidades
    margin: '0 auto' // Centra el contenedor horizontalmente
  }

  return (
        <div
            ref={chartContainerRef} style={chartStyle}
        />
  )
}

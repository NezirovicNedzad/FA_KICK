import React from 'react'
import {Bar} from 'react-chartjs-2'
import {Chart as chartjs} from 'chart.js/auto'



const BarChart = ({tehnika,taktika,fizika}) => {
  return (
    <div >
      <article className="canvas-containter">

      <Bar  data={{
    labels: ["Tehnika", "Taktika", "Fizička sprema"],
    datasets: [
      {
        label: "Ocene",
        data: [tehnika,taktika,fizika],
        backgroundColor: "#e70b0b"
      }
    ]
  }
}   options={{
maintainAspectRatio:false

 
}
} />
      </article>
       


    </div>
  )
}

export default BarChart
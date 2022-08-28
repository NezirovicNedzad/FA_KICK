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
        backgroundColor: "#e70b0b",
        fillColor:"white"
      
      }
    ]
  }
}   options={
  {
    plugins:{
     legend:{
    labels:{
      color:"white",
     
    }
     }

    },
    scales:{

      y:{
        beginAtZero:true,
          grid:{
            color:"white"
          },
        
        ticks:{
          color:"white"
        }
      },
      x:{
      
      
        ticks:{
          color:"white"
        }
      },
      
   
    },
maintainAspectRatio:false,


 
}
} />
      </article>
       


    </div>
  )
}

export default BarChart
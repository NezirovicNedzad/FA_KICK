import React,{useState} from 'react'


const Checkbox = (props) => {


    const [Checked,setChecked]=useState([])

    const handleToggle= (value)=>{


          const currentIndex=Checked.indexOf(value);
          const newChecked=[...Checked];
          if(currentIndex===-1)//ako je trenutni index -1 znaci da nije cekiran box

          {
            newChecked.push(value)//ubacuje u niz cekiranih
          }
          else{
            newChecked.splice(currentIndex,1);
          }

          setChecked(newChecked)

         props.handleFilters(newChecked);
    }
    const tip =[

        {
        _id:"1",
        tip:"Dvonedeljni Kamp"
        },
      
        {
        _id:"2",
        tip:"Letnji kamp"
        },
      
        {
        _id:"3",
        tip:"Full-time kamp"
        },
      
      
      ]
    return (
    <div>

{tip.map((value,index)=>(
<React.Fragment key={index}>

<input onChange={()=>handleToggle(value._id)} type="checkbox" checked={Checked.indexOf(value._id)===-1 ? 


false : true}></input>
<span>{value.tip}</span><br></br>
</React.Fragment>


))}


    </div>
  )
}

export default Checkbox
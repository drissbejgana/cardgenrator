import React, { useEffect, useState } from "react";
import logo from '../assets/Asset 1LOGO CLINIQUE.png'
import logoright from '../assets/Asset 3CVH.png'
import logocenter from '../assets/Asset 2CARTE DE SANTE.png'
import '../styles/style.css'

export const CardToPrint = React.forwardRef((props, ref) => {

const [cards,setCards]=useState([]);
const [value,setValue]=useState(2);
const [min,setMin]=useState(0)
const [max,setMax]=useState(2)


useEffect(()=>{

  console.log(max,min)
  async function getcards(){
      try {
        const res = await fetch(`http://localhost:5000/readExcel`);
        const data = await res.json();
        console.log(data.list.length);
        console.log(data.list);
        setCards(data.list);
      } catch (error) {
        console.error('Error fetching data:', error);
      }

  }
  getcards()
},[])

function handleNext(){
  console.log(min,max)
    setMax((prev)=>prev+value)
    setMin((prev)=>prev+value)
}
function handlePrev(){
    setMax((prev)=>prev-value)
    setMin((prev)=>prev-value)
}

    return (
      <>
          <div ref={ref} > 
        { cards?.slice(min,max).map((item,index)=>{
          return <div key={index}  className='cardFront' >
                    <img alt="" className="logo" src={logo}  />

                    <img alt="" className="logo-right" src={logoright}  />
                    <img alt="" className="logo-center" src={logocenter}  />

                    <div className="text">
                      <div>{item.Gen} {item.Prénom} {item.Nom}</div>
                      <div>{item.Cin}</div>
                    </div>
                </div>
        })    
              
            }
          </div>
          <div style={{position:"fixed",top:'15%',left:"45%"}}>  
             <label for="value">print by </label><br/>
              <input id="text-cin"  min={2} type="number" value={value} name="value" onChange={(e)=>{
                                              setValue(parseInt(e.target.value))
                                              setMax((prev)=>prev+parseInt(e.target.value)+1)
                                              setMin((prev)=>prev+parseInt(e.target.value))
                    }  } />
          </div>
          <div className="text-cin"> 
             <button className='btn' onClick={handleNext}>Next</button>
          </div>
          <div className="text-cin" style={{top:'30%'}}> 
             <button className='btn' style={{top:'40%'}}  onClick={handlePrev}>Previous</button>
          </div>

      </>
    );
  });
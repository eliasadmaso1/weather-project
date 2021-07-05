import React from 'react';
import {useState} from 'react';
import Card from '../feauters/card/card';
import './Home.css';
import {GetContextData} from '../../context';



export default function Home() {

const array = GetContextData();

const [filtered,setFiltered] = useState([])
const [temp,setTemp] = useState(0);


const changeHandler =(e)=> {
    // setResult();
const results = array.filter(res=> res.name.toLowerCase().startsWith(e.target.value)); 
setFiltered(results)
if(e.target.value == ""){
    setFiltered([])
}
  
}










   
   
    
    

    return (
       
<> <div className="homeDiv">
    <h1>Around The World</h1>
<label>Search City:</label>
<input type="text" onChange={changeHandler} />
</div>

{filtered.map((data)=>{
return(
    <div className="mainDiv">
    <Card title={data.name} subTitle={data.country} img={data.img} href={data.url} clickHandler={()=>{setTemp(data.temp)}} />
    <h1>{temp}</h1>
    </div>



)
})}
</>
  
            
            
            
    
    )
}

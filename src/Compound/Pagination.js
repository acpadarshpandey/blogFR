import React,{useState,useEffect} from "react";
import { Button } from "react-bootstrap";

function Pagination(props){
    const [counter,setCounter]=useState(1);
    useEffect(()=>{
        const value=props.showPage*counter;
        props.onpaginationChange(value-props.showPage,value);
    },[counter])

    const onButtonClick=(type)=>{
        if(type==="prev"){
            if(counter===1){
                setCounter(1)
            }
            else
            setCounter(counter-1);
        }
        else if(type=="next"){
            if(Math.ceil(props.total/props.showPage)===counter){
                setCounter(counter)
            }
            else{
                setCounter(counter+1);
        }
    }
}
   const style={
       display:"flex",
       margin:"auto"

   }
    return ( 
        <div style={style}>
            <Button onClick={()=>onButtonClick("prev")}> Previous</Button>
            <div style={style}>{counter} </div>
            <div style={style}>  
                
         <Button onClick={()=>onButtonClick("next")}> Next</Button></div>
           
        </div>
    )
  
}
export default Pagination;
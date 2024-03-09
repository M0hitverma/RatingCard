"use client"
import React, { useState } from 'react'
import './CardStyle.css'
const Praise = ({heading,desc,data}) => {
   const [selector,setSelector]=useState(-1);
  const handleClick=(key)=>{

        if(selector==key){
            setSelector(-1);
            return;
        }

         setSelector(key);
  }
  return (
    <div className='card-div'>
    <h1 className='card-heading'>{heading}</h1>
    <p className='card-desc'> {desc}</p>

    <div className='parse-selector'>
        {data.map((val,key)=>(
            <div onClick={()=>{handleClick(key)}} className={`${key==selector? 'selected':'notselected'}`} key={key}>{val}</div>
        ))}
    </div>


    </div>
  )
}

export default Praise

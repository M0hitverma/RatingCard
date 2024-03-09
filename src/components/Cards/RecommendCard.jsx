'use client'
import React, { useState } from 'react'
import './CardStyle.css'
import { BiSolidLike,BiSolidDislike } from "react-icons/bi";
const RecommendCard = ({heading,desc}) => {
   
     const [flag,setflag]=useState(0);
    const handleclick=(val)=>{
        if(flag==val){
            setflag(0);
            return;
        }
      setflag(val);
    }

  return (

    <div className='card-div'>
    <h1 className='card-heading'>{heading}</h1>
    <p className='card-desc'> {desc}</p>
    <div className='yesno-div'>
    <div onClick={()=>{handleclick(1)}} > <BiSolidLike className={`icon ${flag==1?'green': 'gray'}  `} />Yes </div>
    <div onClick={()=>{handleclick(2)}} ><BiSolidDislike className={`icon ${flag==2? 'green': 'gray'}`}/>No </div> 
    </div>

 </div>
  )
}

export default RecommendCard

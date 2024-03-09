"use client"
import React, { useState } from 'react'
import RecommendCard from '../Cards/RecommendCard'
import StarCard from '../Cards/StarCard'
import Praise from '../Cards/Praise'
import './MainContainerStyle.css'
import { RiCloseFill } from "react-icons/ri";
export const MainContainer = () => {
    const [display,setDisplay]=useState(true);
  return (
    <div className='main-container'>

      <div id="close" onClick={()=>setDisplay(!display)} ><RiCloseFill /></div>

 

      
  
      <div className={`card-collector ${display? '':'hide' }  `}>
      <div className='main-heading'>Leave a review</div>
        <div>
            <StarCard heading="Safety" desc="How safe did you feel with Trausti?" rating={5} />
        </div>
        <div>
            <StarCard heading="Communication" desc="How easy was to communicate with Trausti?" rating={4} />
        </div>
        <div>
            <RecommendCard heading="Would you recommend Trausti?" desc="Your opinion won't be posted publicly"/>
        </div>
        <div>
            <Praise heading="Praise" desc="What traits best describe Trausti?" 
             data={["Adventurous","Clean","Good listner"]} />
        </div>
        </div>
       

    </div>
  )
}

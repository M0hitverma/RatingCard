import React from 'react'
import { IoStar } from "react-icons/io5";
import './CardStyle.css'
const StarCard = ({heading,desc,rating}) => {
  return (
    <div className='card-div'>
       <h1 className='card-heading'>{heading}</h1>
       <p className='card-desc'> {desc}</p>

       <div className='card-stars'>
       {[1,2,3,4,5].map((val)=>(
            <div className={`star ${ val<=rating ? 'gold':'gray'} `} key={val}><IoStar  /></div>
       ))}
       </div>


    </div>
  )
}

export default StarCard

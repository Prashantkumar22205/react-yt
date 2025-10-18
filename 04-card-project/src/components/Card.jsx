import React from 'react'
import { BookMarked } from 'lucide-react'
const Card = (props) => {
  return (
    <div>
       <div className='card'>
          <div className="top">
            <img src={props.logo} alt="" />
            <button>Save <BookMarked className='book'/></button>
          </div>
          <div className="center">
            <div>
            <h3>{props.company} <span>{props.date}</span></h3>
            <h2>{props.post}</h2>
            <div className='jobtype'>
              <button className='partbtn'>{props.tag1}</button>
               <button className='seniorbtn'>{props.tag2}</button>
            </div>
            </div>
          </div>
          <div className="bottom">
          
              <div className='hour'>
                <h3>{props.pay}</h3>
                <p>{props.location}</p>
              </div>
              <button>Apply now</button>
            
          </div>
        </div> 
    </div>
  )
}

export default Card

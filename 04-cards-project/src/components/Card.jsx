import React from 'react'
import {Bookmark} from 'lucide-react'

const Card = () => {
  return (
    <div>
        <div className='card'>

     <div className="parent">
   <div>
       <div className="top">
        <img src="https://i.pinimg.com/originals/01/ca/da/01cada77a0a7d326d85b7969fe26a728.jpg"></img>
        <button>save <Bookmark  size={12}/></button>
      </div>

      <div className="center">
      <h3>Amazon <span>5 days to go</span></h3>
      <h2>Senior UI/UX Designer</h2>
     <div className='tag'>
      <h4>part-time</h4>
      <h4>Senior-level</h4>
     </div>
      </div>
   </div>

      <div className="bottom">
        <div>
        
            <h3>$120/hr</h3>
            <p>Mumbai,India</p>
          </div>
          <button>Apply now</button>
        </div>

        
      </div>
  
     <div className="parent">
   <div>
       <div className="top">
        <img src="https://i.pinimg.com/originals/01/ca/da/01cada77a0a7d326d85b7969fe26a728.jpg"></img>
        <button>save <Bookmark  size={12}/></button>
      </div>

      <div className="center">
      <h3>Amazon <span>5 days to go</span></h3>
      <h2>Senior UI/UX Designer</h2>
     <div className='tag'>
      <h4>part-time</h4>
      <h4>Senior-level</h4>
     </div>
      </div>
   </div>

      <div className="bottom">
        <div>
        
            <h3>$120/hr</h3>
            <p>Mumbai,India</p>
          </div>
          <button>Apply now</button>
        </div>

        
      </div>


    </div>
    </div>
  )
}

export default Card

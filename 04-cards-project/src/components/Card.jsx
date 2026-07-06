import React from 'react'
import { Bookmark } from 'lucide-react'

const Card = ({ brandLogo, companyName, datePosted, post, tag1, tag2, pay, location }) => {
  return (
    <div className="parent">
      <div>
        <div className="top">
          <img src={brandLogo || 'https://i.pinimg.com/originals/01/ca/da/01cada77a0a7d326d85b7969fe26a728.jpg'} alt={companyName || 'company logo'} />
          <button>save <Bookmark size={12} /></button>
        </div>

        <div className="center">
          <h3>{companyName || 'Company'} <span>{datePosted || 'Recently posted'}</span></h3>
          <h2>{post || 'Job title'}</h2>
          <div className='tag'>
            <h4>{tag1 || 'Open'}</h4>
            <h4>{tag2 || 'Apply now'}</h4>
          </div>
        </div>
      </div>

      <div className="bottom">
        <div>
          <h3>{pay || '$0/hr'}</h3>
          <p>{location || 'Location'}</p>
        </div>
        <button>Apply now</button>
      </div>
    </div>
  )
}

export default Card
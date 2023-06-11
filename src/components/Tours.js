import React from 'react'
import { tourData } from '../data'

const Tours = () => {
  return (
    <section className="section" id="tours">
      <div className="section-title">
        <h2>featured <span>tours</span></h2>
      </div>

      <div className="section-center featured-center">
        {tourData.map((link)=>{
          const{id,image,date,title,info,location,duration,cost}=link;
          return(
            <article className="tour-card" key={id}>
          <div className="tour-img-container">
            <img src={image} className="tour-img" alt="" />
            <p className="tour-date">{date}</p>
          </div>
          <div className="tour-info">
            <div className="tour-title">
              <h4>{title}</h4>
            </div>
            <p>
              {info}
            </p>
            <div className="tour-footer">
              <p>
                <span><i className="fas fa-map"></i></span> {location}
              </p>
              <p>{duration}</p>
              <p>{cost}</p>
            </div>
          </div>
        </article>
          )
        })}
      </div>
    </section>
    
    
  )
}

export default Tours
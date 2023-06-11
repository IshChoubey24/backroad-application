import {sectionLinks} from '../data'

const Services = () => {
  return (
    <section className="section services" id="services">
    <div className="section-title">
      <h2>our <span>services</span></h2>
    </div>

    <div className="section-center services-center">
    {sectionLinks.map((link)=>{
      return(
        <article className="service" key={link.id}>
        <span className="service-icon"><i className={link.icon}></i></span>
        <div className="service-info">
          <h4 className="service-title">{link.title}</h4>
          <p className="service-text">
           {link.text}
          </p>
        </div>
      </article>
      )
    })}
     
      <article className="service">
        <span className="service-icon"><i className="fas fa-tree fa-fw"></i></span>
        <div className="service-info">
          <h4 className="service-title">endless hiking</h4>
          <p className="service-text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Asperiores, officia.
          </p>
        </div>
      </article>

      <article className="service">
        <span className="service-icon"><i className="fas fa-socks fa-fw"></i></span>
        <div className="service-info">
          <h4 className="service-title">amazing comfort</h4>
          <p className="service-text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Asperiores, officia.
          </p>
        </div>
      </article>
    </div>
  </section>
  )
}

export default Services
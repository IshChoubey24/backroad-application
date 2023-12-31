import { pageLinks, socialLinks } from "../data"

const Footer = () => {
  return (

    <footer class="section footer">
     
    <ul class="footer-links">
    {pageLinks.map((link)=>{
      const {id,text,href}=link;
        return(
          <li key={id}>
        <a href={href} class="footer-link">{text}</a>
      </li>
        )
      })}
      
      
    </ul>
    <ul class="footer-icons">
      {socialLinks.map((link)=>{
        const {id,href,icon}=link;
        return(
          <li key={id}>
          <a href={href} class="nav-icon"
            ><i class={icon}></i
          ></a>
        </li>    
        )
      })}
      
      <li>
        <a href="https://www.twitter.com"  class="footer-icon"
          ><i class="fab fa-twitter"></i
        ></a>
      </li>
      <li>
        <a href="https://www.twitter.com"  class="footer-icon"
          ><i class="fab fa-squarespace"></i
        ></a>
      </li>
    </ul>
    <p class="copyright">
      copyright &copy; Backroads travel tours company
      <span id="date"></span> all rights reserved
    </p>
  </footer>
  )
}

export default Footer
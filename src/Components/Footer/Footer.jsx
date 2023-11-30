import './Footer.css'
import React from 'react'


import Facebook_logo from '../../Assets/IconFacebook.svg'
import Instagram_logo  from '../../Assets/IconInstagram.svg'
import Tiktok_logo  from '../../Assets/IconTikT.svg'
import IconYoutube from '../../Assets/IconYoutube.svg'

const youtube_link = "https://www.youtube.com/"
const facebook_link = "https://web.facebook.com/"
const instagram_link = "https://www.instagram.com"
const tiktok_link = "https://www.tiktok.com/pt-BR/"

function Footer() {
  return(
    <div className="footer">
      <div className="section_padding">
        <div className="footer-links">
          <div className="footer-links-div">
            <h4 className="footer-title">BioNutri</h4>
            <div className="socialmedia">
              <p>
                <a href={youtube_link} target="_blank"> 
                  <img src={IconYoutube} alt="" className='icon'/>
                </a>
              </p>
              <p>
                <a href={facebook_link} target="_blank"> 
                <img src={Facebook_logo} alt="" className='icon'/>
                </a>
              </p>
              <p>
                <a href={instagram_link} target="_blank"> 
                <img src={Instagram_logo} alt="" className='icon'/>
                </a>
              </p>
              <p>
                <a href={tiktok_link} target="_blank">
                <img src={Tiktok_logo} alt="" className='icon'/>
                </a>
              </p>
            </div> 

          </div> 
        </div> 

        <hr></hr>

        <div className="copyright_div">
          <div className="footer-copyright">
            <p>
            &copy;{new Date().getFullYear()} BioNutri. Todos os direitos reservados.
            </p>
          </div>

        </div>

      </div>
    </div>
      
  )
}

export default Footer;
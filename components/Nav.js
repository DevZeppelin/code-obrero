import Link from "next/link";
import {useState} from 'react'
import {GiHamburgerMenu} from 'react-icons/gi'

export default function Nav () {

const [open, setOpen] = useState(false);

const toggleNav = (e) => {
  e.preventDefault();
  setOpen(!open);
};

return (

  <div className="nav-container" id="nav-container">
    
      <Link href="/">
        <img
          className="logo"
          src="/static/logo.webp"
          alt="logo code-obrero"
        />
      </Link>
      <div className="nav-titles">
        <span>•</span>
        <Link href="/primeros-pasos-dev">
          <a>1ros pasos</a>
        </Link>
        <span>•</span>
        <Link href="/consejos">
          <a>Consejos</a>
        </Link>
        <span>•</span>
        <a target="_blank" rel="noopener" href="https://moonblog.ar">
          Blog
        </a>
        <span>•</span>
        <Link href="/criptomonedas">
          <a>Criptomonedas</a>
        </Link>
        <span>•</span>
        <Link href="/tecnoticiero">
          <a>News</a>
        </Link>
        <span>•</span>
        <Link href="/acerca-de">
          <a>About</a>
        </Link>
        <span>•</span>
        <Link href="/contacto">
          <a>Contacto</a>
        </Link>
      </div>
    

     <div>
       <div className="hamburguer-icon" >
          <button
            onClick={toggleNav}
            aria-label="Hamburguer Button of Main Content"
          >
            <GiHamburgerMenu />
          </button>
        </div>
        <div className="nav-titles-mobile" style={{ display: open ? "flex" : "none" }}>
       
          <Link href="/primeros-pasos-dev">
            <a>👆 1ros pasos</a>
          </Link>
          
          <Link href="/consejos">
            <a>🗣 Consejos</a>
          </Link>
         
          <a target="_blank" rel="noopener" href="https://moonblog.ar">
          🙉 Blog
          </a>
         
          <Link href="/criptomonedas">
            <a>💎 Criptomonedas</a>
          </Link>
         
          <Link href="/tecnoticiero">
            <a>📺 News</a>
          </Link>
          
          <Link href="/acerca-de">
            <a>❔ About</a>
          </Link>
          
          <Link href="/contacto">
            <a>📬 Contacto</a>
          </Link>
        </div>
     </div>
    <style jsx>{`

    .logo {
      cursor: pointer
    }
      .nav-container {
        display: flex;
        align-items: center;
        list-style: none;
          /*padding: 0;
          margin: 0;
          display: grid;
          grid-auto-columns: 100px;
          grid-auto-flow: column;
          justify-content: space-around;*/
      }

      .nav-container a {
        font-family: "Rokkitt", serif;
      }

      .hamburguer-icon {
        
        padding-right: 40px;
        font-size: 22px;        
        display: none
       }

       .nav-titles-mobile {
         display: none;         
       }

       @media screen and (max-width: 700px) {

        .nav-container {
          justify-content: space-between
        }
        
        .hamburguer-icon {
          display: flex;          
        }
        .nav-titles {
          display:none
        }
        
        .nav-titles-mobile {         
          position: absolute;
          right: 0;          
          flex-direction: column;
          padding: 10px;
          margin-right: 10px;
          background: var(--orange-hard);
          border-radius: 10px;
          border: 2px solid black

        } 

        
       }
      
    `}</style>
  </div>
);}



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
      <span>•</span>
      <Link href="/primeros-pasos-dev">
        <a>1ros pasos</a>
      </Link>
      <span>•</span>
      <Link href="/consejos">
        <a>Consejos</a>
      </Link>
      <span>•</span>
      <Link href="/blog">
        <a>Blog</a>
      </Link>
      <span>•</span>
      <Link href="/criptomonedas">
        <a>Criptos</a>
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
    

    {/* <div className="p-2 ml-2 md:hidden flex justify-start w-10 text-4xl">
        <button
          onClick={toggleNav}
          aria-label="Hamburguer Button of Main Content"
        >
          <GiHamburgerMenu />
        </button>
      </div> */}
    <style jsx>{`
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
      
    `}</style>
  </div>
);}



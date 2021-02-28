import Link from "next/link";

const Nav = () => (
  <div className="nav-container" id="nav-container">
    <Link href="/">
      <img
        className="logo"
        src="/static/logo.webp"
        alt="logo code-obrero"
        height="80"
        width="80"
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
);

export default Nav;

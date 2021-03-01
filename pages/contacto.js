import Layout from "../components/Layout";

export default function Contacto() {
  return (
    <Layout
      MainTitle="Contacto"
      Footer={`Gino Pietrobon. Copyright ${new Date().getFullYear()}`}
    >
      <div className="container">
        <img
          className="icon"
          src="static/videojuego.webp"
          alt="videojuego png"
        />
        <div className="contacto-main">
          <h2>  
         <a href="mailto:gino.b.pietrobon@gmail.com">
              gino.b.pietrobon@gmail.com
            </a>
          </h2>
          
          <div className="contactNetworks">
            <a
              href="https://api.whatsapp.com/send?phone=5492616708100"
              target="_blank"
            >
              <img src="../static/social/whatsapp.webp" alt="whatsapp logo"/>
            </a>
            <p>•</p>
            <a href="http://facebook.com/gini77o" target="_blank">
            <img src="../static/social/facebook.webp" alt="facebook logo"/>
            </a>
            <p>•</p>
            <a href="http://instagram.com/moonwatcher73" target="_blank">
            <img src="../static/social/instagram.webp" alt="instagram logo"/>
            </a>
            <p>•</p>
            <a href="http://twitter.com/moonwatcher73" target="_blank">
            <img src="../static/social/twitter.webp" alt="twitter logo"/>
            </a>
            <p>•</p>
            <a href="http://github.com/devzeppelin" target="_blank">
            <img src="../static/social/github.webp" alt="github logo"/>
            </a>
            <p>•</p>
            <a href="https://www.linkedin.com/in/gino-pietrobon/" target="_blank">
            <img src="../static/social/linkedin.webp" alt="linkedin logo"/>
            </a>
          </div>
        </div>
      </div>

      <style jsx>{`
        .contacto-main {
          text-align: center;
        }

        .contactNetworks {
          display: flex;
          flex-direction: row;
          justify-content: center;
          align-items: center;
          padding-bottom: 2em
        }

        .contacto a {
          font-size: 1.2em;
          margin-top: 0.2em;
          margin-bottom: 1em;
        }

        h2 {
          margin-top: 1em;
          margin-bottom: 1em;
        }

        img {
          width: 64px;
          height: 64px
        }

      `}</style>
    </Layout>
  );
}

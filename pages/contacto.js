import Layout from "../components/Layout";

export default function Contacto() {
  return (
    <Layout
      MainTitle="Contacto"
      Footer={`Gino Pietrobon. Copyright ${new Date().getFullYear()}`}
    >
      <div className="container">
      <img className="icon" src="static/videojuego.webp" alt="videojuego png" />
        <div className="contacto-main">
          <p>
            <b>Mail: </b>{" "}
            <a href="mailto:gino.b.pietrobon@gmail.com">
              gino.b.pietrobon@gmail.com
            </a>
          </p>
          <p>
            <b>Celular: </b> +5492616708100
          </p>
          <div className="contactNetworks">
            <a href="http://facebook.com/gini77o" target="_blank">
              Facebook
            </a>
            <p>•</p>
            <a href="http://instagram.com/moonwatcher73" target="_blank">
              Instagram
            </a>
            <p>•</p>
            <a href="http://twitter.com/moonwatcher73" target="_blank">
              Twitter
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
      }
      
      .contacto a {
        font-size: 1.2em;
        margin-top: 1em;
        margin-bottom: 1em;
      }
      `}</style>
    </Layout>
  );
}

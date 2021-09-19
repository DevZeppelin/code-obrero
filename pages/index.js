import Layout from "../components/Layout";
import Link from "next/link";

export default function Index() {
  return (
    <Layout
      ID="main-index"
      MainTitle=""
      Footer={`Gino Pietrobon. Copyright ${new Date().getFullYear()}`}
    >
      <header>
        <h1 className="mainTitle">codeObrero</h1>
        <h4>by Gino Pietrobon</h4>

        <a href="#index">
          <button>¿De qué se trata esto?</button>
        </a>
      </header>

      <div className="container index" id="index">
        <img className="icon" src="static/robot.webp" alt="robot png" />
        <p>
          <strong>codeObrero</strong> es un lugar creado para todos aquellos que
          están comenzando en el mundo de la programación.
        </p>
        <p>
          Aca encontrarás consejos, recomendaciones, ideas, y un poco de
          compañía para que tus primeros pasos en el mundo <i>dev</i> sean
          firmes y hacia adelante.
        </p>
        <p>La pregunta del millón es...</p>
        <h2>¿Realmente querés ser programador?</h2>
        <p>
          Si tu respuesta es <strong>SI</strong> y si realmente lo deseas, un
          mundo mágico de oportunidades espera por vos. Dejame ayudarte a{" "}
          <i>comenzar este camino</i> infinito.
        </p>
        <img
          className="icon"
          src="static/dinosaurio.webp"
          alt="dinosaurio png"
        />

        <p>
          Cuando quise comenzar a estudiar <strong>programación</strong> me
          sentí abrumado y desconsertado por tanta información. Me estanqué y
          sentía que necesitaba <i>algo o alguien</i> que me ayudara y
          acompañara en mis primeros pasos.
        </p>
        <p>
          Al tiempo, una pequeña charla con un <i>developer</i> me sacó del
          agua. Sus palabras y consejos fueron tan valiosas para mí que hoy me
          hacen crear este proyecto.
        </p>

        <p>
          Estoy seguro de poder ayudarte en este <b>primer pasito</b>. Una vez
          que te decidas que quieres ser progrmador, mil puertas se abrirán y tu
          vida cambiará, porque una llama interior te hará querer
          <i>saber y aprender</i> cosas nuevas cada día.
        </p>
        <img
          className="icon"
          src="static/videojuego.webp"
          alt="videojuego png"
        />
        <p>
          Quiero ser ese amigo que te dió un valioso consejo y unas palabras de
          guía. Si realmente esto es lo que querés y te gustaría ser
          programador, quiero generar esa <b>chispa</b> que dé arranque a ese
          tren hacia un futuro profesional y competitivo.
        </p>
        <p>
          <b>Requisito principal:</b>{" "}
        </p>
        <p>
          Nunca dejar de aprender, no estancarse y conformarse con el
          conocimiento obtenido. En el mundo tecnológico todo cambia muy rápido
          y hay que estar preparados para surfear las olas del cambio. El
          objetivo es adquirir bases sólidas que nos ayudarán a tomar buenas
          decisiones.
        </p>

        <Link href="/primeros-pasos-dev">
          <button>Primeros pasos del futuro programador</button>
        </Link>
      </div>
      <style jsx>{`

        * {
          text-align: center
        }      

        h2 {
          padding-top: 2em
        }

        header {
          display: flex;
          flex-direction: column;          
          margin-bottom: 6em;
          text-align: center;
          z-index: 100;
        }

        header button {
          font-size: 1em;
          margin-bottom: 9em;
        }

        .mainTitle {
          font-family: "Fruktur", cursive;
          font-size: 5em;
          font-weight: normal;
          -webkit-text-stroke: 2.5px black;
          color: transparent
          
        }

        @media screen and (max-width: 700px) {
          .mainTitle {
          font-size: 6em;          
        }

          h4 {
            font-size: 1.2em            
          }

          .mainTitle {
            
            font-size: 3.5em;
            -webkit-text-stroke: 1px black;
            
            
          }

         
      `}</style>
    </Layout>
  );
}

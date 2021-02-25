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
          <button>¿Qué es esto?</button>
        </a>
      </header>

      <div className="container index" id="index">
        <h2>¿Querés ser programador?</h2>
        <p>
          Si tu respuesta es <strong>SI</strong>, si realmente lo deseas, puedo
          ayudarte a <i>comenzar este camino</i> infinito.
        </p>

        <p>Mi nombre es Gino, soy obrero y padre de familia.</p>

        <p>
          Hace mucho quise empezar a estudiar programación pero no sabía qué
          lenguaje aprender, esta <b>duda</b> me llevó a
          <i>estancarme y perder el interés</i>.
        </p>
        <p>
          Hasta que un día, hablando con un <strong>amigo programador</strong>,
          con unas pocas palabras increíblemente
          <i>me orientó, me ubicó y me ayudó a decidirme</i>. Ya no veía el
          horizonte como algo incierto, sino que sabía hacia donde comenzar a
          caminar.
        </p>

        <p>
          La idea de esta plataforma es dar ese <b>primer consejo</b>, esas
          palabras de orientación, ese empujoncito débil que puede generar una
          avalancha de
          <i>pasión</i> y conocimiento.
        </p>

        <p>
          Estoy seguro de poder ayudarte en este <b>primer pasito</b>. Una vez
          que te decidas que quieres ser progrmador, mil puertas se abrirán y tu
          vida cambiará, porque una llama interior te hará querer{" "}
          <i>saber y aprender</i> cosas nuevas cada día.
        </p>

        <p>
          Quiero ser ese amigo que te dió un valioso consejo y unas palabras. Si
          realmente esto es lo que quieres y te gusta, generar esa <b>chispa</b>{" "}
          que dé inicio a ese tren que es tu carrera hacia ser desarrollador.
        </p>

        <Link href="/primeros-pasos-dev">
          <button>Primeros pasos del futuro programador</button>
        </Link>
      </div>
      <style jsx>{`
        p,
        a,
        span {
          color: rgb(194, 194, 194);
        }

        header {
          color: whitesmoke;
        }

        header {
          display: flex;
          flex-direction: column;
          color: whitesmoke;
          margin-bottom: 5em;
          text-align: center;
          z-index: 100;
        }

        header button {
          font-size: 1em;
          margin-bottom: 9em;
        }

        .mainTitle {
          font-family: "Fruktur", cursive;
          font-size: 4em;
          font-weight: normal;
          
        }

        @media screen and (max-width: 700px) {
          .mainTitle {
          font-size: 6em;          
        }

          h4 {
            font-size: 1.8em
            
            
          }
      `}</style>
    </Layout>
  );
}

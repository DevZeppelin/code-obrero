import Layout from "../components/Layout";
import Link from "next/link";

const Consejos = () => (
  <Layout
    MainTitle="Consejos para iniciar y Preguntas frecuentes"
    Footer={`Gino Pietrobon. Copyright ${new Date().getFullYear()}`}
  >
    <div className="container">
      <img className="icon" src="static/palanca.webp" alt="palanca png" />
      <nav className="secondaryNav">
        <a href="#advices">
          <button>Consejos</button>
        </a>
        <a href="#frecuentQuestions">
          <button>Preguntas frecuentes</button>
        </a>
      </nav>
      <p>
        <b>Mi principal recomendación:</b></p>
        <p>Empieza aprendiendo <strong>Javascript</strong>. Mi experiencia
        personal fue muy buena ya que con muy poco podía hacer aplicaciones web
        sencillas y poderosas. Desde cualquier navegador puedes tocar código y
        ver como suceden los cambios. Todo esto es muy práctico ya que empezamos
        a entender las cosas que podemos lograr a través de este lenguaje.
      </p>

      <hr />
      <img
        id="advices"
        className="icon"
        src="static/arcade.webp"
        alt="arcade png"
      />
      <h2>Consejos</h2>
      <ul>
        <li>
          Consumir entretenimiento en inglés: Si ves series en español, ¡Ponle
          subtítulos en inglés!, luego vuelve a ver el capítulo, pero esta vez
          en inglés y con subtítulos en inglés.
        </li>
        <li>
          ¡Agarra un lenguaje y hazle el amor! Cualquiera sea tu elección,
          aliméntate de ese lenguaje, estúdialo, lee libros, apuntes, haz
          cursos, toma notas, repásalas. Haz de éste lenguaje un gran amigo.{" "}
        </li>
        <li>
          Navega en YouTube, escucha <b>podcasts</b> de programación, mantenerte
          actualizado en el mundo tecnológico es una gran ventaja.
        </li>
        <li>
          Invertir en conocimiento. Ser un estudiante permanente de lo que sea.
          Cuando sepas programar podrás hacer una aplicación materializando tus
          ideas.
        </li>
        <li>
          Comienza algún proyecto personal, como si fuera una empresa o un blog
          ficticio, y empieza a plasmar ideas y conociminetos en este proyecto,
          todo lo que hagas quedará escrito en el código, y siempre podrás
          estudiarlo y retroalimentarte de él.
        </li>
        <li>
          Imprime apuntes, gráficos y código para poder estudiar y repasar
          cuando estés lejos de la PC o celular. Ver el código en papel,
          garabatearlo, rayarlo, escribirlo y estudiarlo. Busca paz, silencio, y
          conectado con la naturaleza saca tus apuntes y ponte a leerlos y
          disfrutar de los detalles.
        </li>
        <li>
          Come bien y duerme bien. Desayuna como Rey, almuerza como príncipe y
          cena como mendigo. No consumas tantos carbohidratos. Haz ejercicio,
          toda tu salud corporal agilizará y relajará tu mente.
        </li>
      </ul>

      <img className="icon" src="static/videojuego.webp" alt="videojuego png" />
      <h1>Importante</h1>
      <ul>
        <li>
          Si te gustan las matemáticas, física, álgebra, cálculo, y soñás con
          ser cietfifico, te recomiendo comenzar con el lenguaje <b>Python</b>{" "}
          que posee una gran comunidad y es el más utilizado para ciencia de
          datos, inteligencia artificial y <i>machine learning</i>.
        </li>
        <li>
          Si querés apuntar al futuro, últimas encuentas confiables han dado
          como mejores lenguajes de programación a: <b>RUST, GOLANG y SWIFT</b>
          (IOS)
        </li>
        <li>
          Si te gustan las maquinarias y la industria tal vez el mejor lenguaje
          para esto es <b>Java</b>.
        </li>
        <li>
          Si quieres enfocarte en aplicaciones móviles tal vez los mejores
          lenguajes sean <b>Kotlin</b> (android) o <b>Dart</b> (Flutter)
        </li>
        <li>
          Mi consejo sigue siendo comenzar con <b>Javascript</b> ya que como
          lenguaje introductorio es muy rico y nos dará increíbles
          fucnionalidades para encarar cualquier tipo de proyecto, pero si
          tienes pensado un nicho específico tal vez lo mejor sea iniciar
          directamente con el lenguaje que mejor aplique a tus deseos.
        </li>
      </ul>

      <hr />
      <img
        id="frecuentQuestions"
        className="icon"
        src="static/casete.webp"
        alt="casete png"
      />
      <h1>Preguntas frecuentes:</h1>
      <ul>
        <li>
          <b>¿Hay que tener bases de tecnología para ser programador?</b>
          <br />
          <br />
          Mientras más sepas y aprendas de tecnología e informática significará
          una ventaja en la competividad de los emrcados laborales. Realmente
          hoy es necesario apra casi todo aprender informática y lo más que
          podamos acerca de tecnología.
        </li>
        <li>
          <b>¿Qué tan difícil es conseguir un trabajo?</b>
          <br />
          <br />
          En este sector abundan las ofertas de puestos remotos con salarios
          abultados. Puedes tener suerte para conseguir uno, o no tanta, pero lo
          importante es que si no tienes experiencia, trabajes en un proyecto
          personal, un
          <i>portfolio</i> que puedas mostrar cuando los reclutadores quieran
          ver de lo que eres capaz.
        </li>
      </ul>

      <hr />
      <a href="#nav-container">
        <button>Ir arriba!</button>
      </a>
    </div>
  </Layout>
);

export default Consejos;

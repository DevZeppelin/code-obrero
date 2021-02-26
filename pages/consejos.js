import Layout from "../components/Layout";
import Link from "next/link";

const Consejos = () => (
  <Layout
    ID="Consejos"
    MainTitle="Consejos para empezar a estudiar"
    Footer={`Gino Pietrobon. Copyright ${new Date().getFullYear()}`}
  >
    <div className="container">
    <img id="icon" src="static/palanca.png" alt="palanca png" />
      <p>
        Entonces mi primer consejo es: Empieza aprendiendo Javascript. Mi
        experiencia personal fue muy buena ya que con muy poco podía hacer
        aplicaciones web sencillas y poderosas. Desde cualquier navegador puedes
        tocar código y ver como suceden los cambios. Todo esto es muy práctico
        ya que empezamos a entender las cosas que podemos lograr a través de
        este lenguaje.
      </p>
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

      <span className="separator-joker">♥♦♣♠</span>
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

      <span className="separator-joker">♥♦♣♠</span>
      <img id="icon" src="static/casete.png" alt="casete png" />
      <h1>La ruta por la que me hubiera gustado comenzar:</h1>
      <h2>1</h2>

      <p>
        En primer lugar te recomendaría hacer el curso gratuito de ED.team ya
        que explica términos importatnes de manera fácil y digerible. Es corto y
        de buena calidad. Esto nos dará los primeros conceptos e idea de lo que
        es la programación
      </p>
      <p>
        <b>Recomendación: </b> Busca una carpetita linda o un cuaderno y de
        manera prolija andá tomando nota de lo que vas aprendiendo. Esto te va a
        servir para repasar conceptos en cualquier momento en el que no estás
        enfrente de la pantalla.
      </p>
      <button>
        <a href="https://ed.team/cursos/programacion" target="_blank">
          Curso de programación desde cero de ED.team (Gratis!)
        </a>
      </button>
      <hr />
      <h2>2</h2>
      <p>
        En segundo lugar te recomiendo un curso, también gratuito, que nos dará
        lo básico para poder hacer una página web, ayudándonos a familiarizarnos
        con HTML y CSS. Una vez finalizado, utilizando esta estructura podremos
        construir mucho e ir agregando y quitando cosas.
      </p>
      <button>
        <a
          href="https://www.udemy.com/course/diseno-web-desde-cero-para-principiantes-gratis/"
          target="_blank"
        >
          Crear Una Página Web Desde Cero con HTML y CSS [2020] (Gratis!)
        </a>
      </button>
      <hr />
      <h2>3</h2>
      <p>Instalar en tu celular una app llamada: SoloLearn.</p>
      <ul>
        <li>
          Realizar el curso de JavaScript (o el lenguaje que hayas elegido para
          empezar)
        </li>
        <li>Tomar apuntes de todos los conceptos que vamos viendo</li>
        <li>
          Ir despacio y una vez terminadas las lecciones meterse a los
          comentarios y ver los comentarios mejores puntuados como complementan
          el artículo visto.
        </li>
        <li>
          Realizar desafíos a la comunidad (en JavaScript o HTML), a usuarios de
          bajo nivel (nuevo en la app), para ir viendo el tipo de ejercicio con
          el que nos podemos encontrar.
        </li>
        <li>
          Los ejercicios que hicimos mal, aanotarlos en un apartado del
          cuaderno, y a medida que vayamos avanzando en nuestro camino vamos a
          notar que los vamos entendiendo mejor hasta que logramos resolverlo.
        </li>
      </ul>

      <button>
        <a href="https://www.sololearn.com/" target="_blank">
          SoloLearn app! (Gratis!)
        </a>
      </button>
      <hr />
      <h2>4</h2>
      <p>
        Buscar en YouTube programadores resolviendo ejercicios simples, y
        analizar los algorítmos y la lógica usada para resolver dicho problema.
        Indagar en YouTube videos explicativos, informativos, buscar algún
        podcast de programación e intentar escucharlo cuando estamos haciendo
        cosas cotidianas.
      </p>
      <p>
        Cuidado: Cuando empezamos a saltar entre videos podemos comenzar a
        desorientarnos al escuchar tanta cantidad de información y tecnologías
        diferentes.
      </p>
      <p>
        La idea de codeObrero es justamente ser un ancla, una puesta a tierra
        para siempre poder volver a ubicarnos en el universo de la programación
        sin perder el norte.
      </p>

      <button>
        <a href="https://www.youtube.com/" target="_blank">
          YouTube
        </a>
      </button>
      <hr/>
        <a href="#nav-container">
          <button>Ir arriba!</button>
        </a>
    </div>
  </Layout>
);

export default Consejos;

import Layout from "../components/Layout";
import Link from "next/link";

const Consejos = () => (
  <Layout
    MainTitle="Consejos para iniciar y Preguntas frecuentes"
    Footer={`Gino Pietrobon. Copyright ${new Date().getFullYear()}`}
  >
    <div className="container">
      <img className="icon" src="static/arcade.webp" alt="arcade png" />
      <nav className="secondaryNav">
        <a href="#advices">
          <button>Consejos</button>
        </a>
        <a href="#frecuentQuestions">
          <button>Preguntas frecuentes</button>
        </a>
      </nav>
      <p>
        <b>Mi principal recomendación:</b>
      </p>
      <p>
        Empieza aprendiendo <strong>Javascript</strong>. Mi experiencia personal
        fue muy buena ya que interactuas con la consola del navegador y eso hace
        que veamos lo que hacemos y esto nos abre la mente.
      </p>

      <hr />
      <img
        id="advices"
        className="icon"
        src="static/palanca.webp"
        alt="palanca videojeugos png"
      />
      <h2>Consejos</h2>
      <ul>
        
        <li>
          <b>Aprender inglés:</b> Una buena forma rápida es la aplicación Duolingo, otra es consumir entretenimiento en inglés. Si ves series en español,
          ¡Ponle subtítulos en inglés!, luego vuelve a ver el capítulo, pero
          esta vez en inglés y con subtítulos en inglés.
        </li>
        <li>
          <b>¡Agarra un lenguaje de programación y hazle el amor!</b> Cualquiera sea tu
          elección, aliméntate de ese lenguaje, estúdialo, lee libros, apuntes,
          haz cursos, toma notas, repásalas. Haz de éste lenguaje un gran amigo.{" "}
        </li>
        <li>
          Navega en YouTube, escucha <b>podcasts</b> de programación, sigue{" "}
          <i>developers</i> en Instagram, Twitter, etc. NEcesitas estar
          actualizado y saber de qué se está hablando.
        </li>
        <li>
          <b>Invertir en conocimiento</b>. Ser un estudiante permanente de lo
          que sea. Cuando sepas programar podrás materializar tus ideas, por eso
          es bueno mantener tu mente bien nutrida de buena información.
        </li>
        <li>
          Con lo que vayas aprendiendo, plasmalo en pequeños proyectos
          personales y de entrenamiento. Si te llegas a enamorar de uno de estos
          proyectos simplemente vas a <b>QUERER</b> trabajar en él. Tal vez este
          proyecto termine siendo tu <i>portfolio</i>, o tu boleto hacia tu
          primer trabajo.
        </li>
        <li>
          <b>Imprime</b> apuntes, gráficos y código para poder estudiar y
          repasar cuando estés lejos de la PC o celular. Ver el código en papel,
          garabatearlo, rayarlo, escribirlo y estudiarlo. Busca paz, silencio, y
          conectado con la naturaleza saca tus apuntes y ponte a leerlos y
          disfrutar y aprender de los detalles.
        </li>
        <li>
          Come bien y duerme bien. Desayuna como Rey, almuerza como príncipe y
          cena como mendigo. No consumas tantos carbohidratos. Haz ejercicio,
          toda tu salud corporal agilizará y relajará tu mente.
        </li>
        <li>
          ¡Si quieres más información de alguno de estos puntos, no dudes en
          escribirme! (<Link href="/contacto">Contacto</Link>)
        </li>
      </ul>

      <img className="icon" src="static/videojuego.webp" alt="videojuego png" />
      <h1>Importante</h1>
      <p><b>¡En este universo existen muchísimos lenguajes diferentes!</b></p>
      <ul>
        <li>
          <b>Javascript</b> es el lenguaje líder del mundo web, pero existen
          otros nichos en donde reinan diferentes lenguajes.
        </li>
        <li>
          Si te gustan las matemáticas, física, álgebra, cálculo, y soñás con
          ser cietfifico, te recomiendo comenzar con el lenguaje <b>Phyton</b>{" "}
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
          Creo que Javascript rompe fronteras y puedes utilizarlo casi en
          cualquier lado. Por eso también creo que es el mejor lenguaje para
          empezar ya que abre un abanico de posibilidades.
        </li>
        <li>
          Por esto <b>mi consejo</b> sigue siendo comenzar con <b>Javascript</b>{" "}
          ya que como lenguaje introductorio es muy rico y nos dará increíbles
          fucnionalidades para encarar cualquier tipo de proyecto.
        </li>
        <li>
          Si tienes pensado un <i>nicho específico o profesión</i> tal vez lo
          mejor sea iniciar directamente con el lenguaje que mejor aplique a tus
          deseos.
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
          <h4>¿Hay que tener bases de tecnología para ser programador?</h4>
          
          Mientras más sepas y aprendas de tecnología e informática significará
          una ventaja en la competividad de los mercados laborales. Realmente
          hoy es necesario para casi todo aprender informática y lo que más
          podamos acerca de tecnología.
        </li>
        <li>
          <h4>¿Qué tan difícil es conseguir un trabajo?</h4>
         
          En este sector abundan las ofertas de puestos remotos con salarios
          abultados. Puedes tener suerte para conseguir uno, o no tanta, pero lo
          importante es que si no tienes experiencia, trabajes en un proyecto
          personal, un
          <i>portfolio</i> que puedas mostrar cuando los reclutadores quieran
          ver de lo que eres capaz.
        </li>
        <li>
          <h4>¿Cual sería un gran Currículum o Portfolio?</h4>
         
          Existe un lugar llamado <a href="http://github.com" target="_blank">Github</a> en donde irás subiendo tus proyectos. Además puedes ver Open Source (código abierto) y colaborar, sugerir mejoras, aportar. Esto quedará registrado en tu cuenta Github y esto habla mucho de tu compromiso con el ecosistema de tu lenguaje específico.
        </li>
        <li>
          <h4>¿Hay que saber todos los lenguajes?</h4>
         
          A medida que vayas desarrollando proyectos vas a utilizar diferentes tecnologías, lo que te dará perpectiva y experiencia. Esto es muy bueno. Saber un poco de casi todas. Pero lo mejor sin duda es ser especialsita en lo que te gusta y sobresalir en el uso de tu tecnología favorita. Sin embargo nunca debes cerrar la puerta a cualquier tecnología por más obsoleta que sea.
        </li>
        <li>
          <h4>¿Todos los puestos de programadores son similares?</h4>
         
          Existe una increíble diversidad en el universo dev. Antes eras web-master o programador. Hoy están los UX, UI, Frontend, Backend... Por esto tu campo ocupacional puede ser muy variado. Por eso es bueno trabajar en lo que más te gusta hacer y sobresalir. La industria necesita todo tipo de <i>artesanos del código</i>.
        </li>
        <li>
          <h4>¿Cuanto gana un programador por mes?</h4>
         
          Aproximadamente: En Nueva Zelanda: U$D 120.000. En Estados Unidos: U$D 60.000. En Latinoamérica: U$D 3.000. La diferencia tal vez es el costo de vida (alquiler, impuestos, comida, etc) y realmente cuánto puedes comprar con tu sueldo. 
        </li>
      </ul>

      <hr />
      <a href="#nav-container">
        <button>Ir arriba!</button>
      </a>
    </div>
    <style jsx>{`
      h4 {
        padding-bottom: 0.9em
      }
      `}</style>
  </Layout>
);

export default Consejos;

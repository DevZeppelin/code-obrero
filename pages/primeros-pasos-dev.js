import Layout from "../components/Layout";
import Link from "next/link";

const PrimerosPasosDev = () => (
  <Layout
    MainTitle="Mis primeros pasos en programación"
    Footer={`Gino Pietrobon. Copyright ${new Date().getFullYear()}`}
  >
    <div className="container" id="top">
    <img className="icon" src="static/diamante.webp" alt="diamante png" />
      <nav className="secondaryNav">
        <a href="#firstLanguages">
          <button>Mis primeros lenguajes</button>
        </a>
        <a href="#route">
          <button>Ruta de aprendizaje</button>
        </a>
      </nav>
      <p>
        Cuando comencé me sentía en una jungla. Muchos senderos en los que no
        podía ver con claridad. Quise hacer una aplicación, busqué tutoriales,
        la hice, pero perdí el interés y dejé de aprender por mi cuenta. Estaba
        perdido.
      </p>
      <p>
        Hasta el día que hablé con mi amigo programador Nico, y él logró dibujar
        en mí un panorama de: la industria, el mercado laboral, los lenguajes,
        las dificultades, etc. Concluyendo nuestra conversación él me dijo:
        "Tenés que aprender Javascript (JS). La está pegando. Es el presente y
        el futuro."
      </p>
      <p>
        Este consejo fue mi chispa. Inmediatamente comencé a estudiar las bases
        de este lenguaje, pues yo confiaba plenamente en mi amigo que vivía (y
        vive) de esto. Comencé a enamorarme de Javascript, y casi todo lo que
        leía y aprendía lo hacía desde la aplicación para celulares Solo Learn.
      </p>
      <p>
        Una vez inicié este camino ya nunca más me alejé de mis objetivos y de
        mi horizonte, aunque muchas veces me he desmotivado y son momentos en
        que las palabras de otros programadores me devolvían al sendero. Hoy
        llevo dos años siento parte de este mundo y solo puedo decirte que es
        maravilloso. Estar al día con el mundo tecnológico y saber usar las
        herramientas adecuadas te da el poder de construir plataformas,
        aplicaciones y programas que solucionen diferentes problemas.
      </p>

      <hr />
      <img id="firstLanguages" className="icon" src="static/flamenco.webp" alt="flamenco png" />
      <h2>Mis primeros lenguajes</h2>
      <p>
        <b>¿Por donde empezar?</b>
      </p>
      <p>
        Si pensamos una aplicación (o página) web como si fuera un cuerpo
        humano:
      </p>
      <ul>
        <li>
          <b>HTML</b> es el esqueleto, la estructura.
        </li>
        <li>
          <b>CSS</b> es la piel, los colores, el diseño.
        </li>
        <li>
          <b>JAVASCRIPT</b> son los músculos, la mente, las conexiones
          neuronales.
        </li>
      </ul>

      <p>
        Dominando estas tres tecnología tendremos el poder de hacer páginas web,
        plataformas web, aplicaciones de celular, y muchas otras cosas más.
      </p>

      <p>
        <b>¿Por qué Javascript?</b> Es mi simple consejo, porque a mi me volció
        loco. Pero diferentes lenguajes pueden servir para diferentes áreas o
        gustos. Mi amigo <i>developer</i> me dijo que una vez que sabés
        programar, migrar a otro lenguaje o tecnología es cuestión de unos 3
        meses, porque teniendo las bases sólidas solo cambiarías la forma de
        escribir pero no la <strong>lógica</strong>
      </p>
      <ul>
        <li>Páginas web (desarrollo front-end)</li>
        <li>Aplicaciones web (Páginas con funciones muy avanzadas)</li>
        <li>Servidores (desarrollo back-end)</li>
        <li>Aplicaciones móviles (React Native)</li>
        <li>Videojuegos (usando librerías de JS)</li>
      </ul>
      <a
        href="https://www.youtube.com/watch?v=qY2JD78kShQ&t=268s"
        target="_blank"
      >
        <button>¿Qué se puede hacer con Javascript? (VIDEO)</button>
      </a>

      <img className="icon" src="static/computadora.webp" alt="computadora png" />

      <h2>Frameworks</h2>
      <p>
        Con <b>HTML + CSS + JS</b> podremos hacer hermosas páginas web, pero una
        vez completada esta fase de aprendizaje pasaremos a un nivel superior.
        Aprender un <b>Framework</b>. <b>¿Y qué es esto?</b> Es un entorno de
        trabajo que provee a los desarrolladores herramientas probadas y
        testeadas para la creación de aplicaciones interactivas y escalables.
      </p>

      <p>
        Los <b>frameworks</b> más famosos son: React, Angular, Vue y Svelte. Lo
        importante es saber que dominando las tres tecnologìas que te recomiendo
        te será fácil utilizar una de éstas poderosísimas herramientas
      </p>
      <img className="icon" src="static/rodillos.webp" alt="rodillos png" />
      <h2>Conclusión</h2>
      <ol>
        <li>
          Comenzar a estudiar y aprender profundamente el lenguaje de Javascript
        </li>
        <li>
          Aprender HTML básico (HyperText Markup Language, es decir, Lenguaje de
          Formato de Documentos de Hipertexto): Es un lenguaje que utilizando etiquetas podrás armar la estructura de tu página (maquetado).
        </li>
        <li>
          Aprender CSS básico (Cascading Style Sheets, es decir, hojas de estilo
          en cascada): Este lenguaje sirve para dar estilo, colores y diseño a
          nuestra página o aplicación. Si te gusta el diseño te va a encantar,
          sino también es necesario aprenderlo porque éste definirá el formato y
          la belleza de tus trabajos.
        </li>
        <li>
          <b>Una vez entendiendo estos tres</b> podría decirse que estamos listos para ser programadores realmente poderosos. A través de un <b>Framework</b> como <strong>React.js</strong> podremos construir cosas verdaderamente grandes, escalables, optimizadas y muy poderosas. 
        </li>
      </ol>

      <p>
        Todo a su debido tiempo. Lo importante es entender que si logramos que las bases de nuestro conocimiento sean sólidas, podremos edificar algo grande sobre estos cimientos. Ahora podés pasar a la parte de <b>consejos</b> o leer algunas de las preguntas frecuentes de los <i>new developers</i>.
      </p>

      <Link href="/consejos">
        <button>Consejos y preguntas frecuentes</button>
      </Link>
      <hr />
      <img id="route" className="icon" src="static/disco-lp.webp" alt="disco long play png" />
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

export default PrimerosPasosDev;

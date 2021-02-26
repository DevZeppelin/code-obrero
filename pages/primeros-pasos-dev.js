import Layout from "../components/Layout";
import Link from "next/link";

const PrimerosPasosDev = () => (
  <Layout
    MainTitle="Mis primeros pasos en programación"
    Footer={`Gino Pietrobon. Copyright ${new Date().getFullYear()}`}
  >
    <div className="container" id="top">
    <img id="icon" src="static/diamante.png" alt="diamante png" />
      <nav>
        <a href="#firstLanguages">
          <button>Mis primeros lenguajes</button>
        </a>
        <a href="#frecuentQuestions">
          <button>Preguntas frecuentes</button>
        </a>
      </nav>
      <p>
        Cuando comencé me sentía en una jungla. Muchos senderos en los que no
        podía ver coon claridad. Quise hacer una aplicación, busqué tutoriales,
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
      <img id="icon" src="static/flamenco.png" alt="flamenco png" />
      <h2 id="firstLanguages">Mis primeros lenguajes</h2>
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

      <img id="icon" src="static/computadora.png" alt="computadora png" />

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
      <img id="icon" src="static/rodillos.png" alt="rodillos png" />
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
        <button>Consejos y ruta</button>
      </Link>
      <hr />
      <img id="icon" src="static/disco-lp.png" alt="disco long play png" />
      <h1 id="frecuentQuestions">Preguntas frecuentes:</h1>
      <ul>
        <li>
          <b>¿Hay que tener bases de tecnología para ser programador?</b><br /><br />
          
            Mientras más sepas y aprendas de tecnología e informática significará
            una ventaja en la competividad de los emrcados laborales. Realmente
            hoy es necesario apra casi todo aprender informática y lo más que
            podamos acerca de tecnología.
         
        </li>
        <li>
          <b>¿Qué tan difícil es conseguir un trabajo?</b><br /><br />
            En este sector
            abundan las ofertas de puestos remotos con salarios abultados. Puedes
            tener suerte para conseguir uno, o no tanta, pero lo importante es que
            si no tienes experiencia, trabajes en un proyecto personal, un
            <i>portfolio</i> que puedas mostrar cuando los reclutadores quieran
            ver de lo que eres capaz.
          
        </li>
      </ul>
      <a href="#nav-container">
          <button>Ir arriba!</button>
        </a>
    </div>
    <style jsx>{`
      nav {
        display: flex;
        justify-content: space-around ;
        flex-direction: row;
      }

      nav button {
        margin: 0.2em;
      }
    `}</style>
  </Layout>
);

export default PrimerosPasosDev;

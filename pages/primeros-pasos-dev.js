import Layout from "../components/Layout";
import Link from "next/link";

const PrimerosPasosDev = () => (
  <Layout
    MainTitle="Primeros pasos para convertirte en programador"
    Footer={`Gino Pietrobon. Copyright ${new Date().getFullYear()}`}
  >
    <div className="container">
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
        mi horizonte. Llevo dos años estudiando como puedo y aprendiendo más y
        más sobre el fascinante mundo tecnológico.
      </p>

      <p>
        Entonces mi primer consejo es: Empieza aprendiendo Javascript. Mi
        experiencia personal fue muy buena ya que con muy poco podía hacer
        aplicaciones web sencillas y poderosas. Desde cualquier navegador puedes
        tocar código y ver como suceden los cambios. Todo esto es muy práctico
        ya que empezamos a entender las cosas que podemos lograr a través de
        este lenguaje.
      </p>

      <p>
        <b>Importante</b>: En este comienzo debemos también aprender lo básico
        de HTML (Lenguaje de etiquetas y maquetación de una página web) y CSS
        (Estilos, colores, fuentes y todo lo visual de la página). Si la
        programación fuera un ser humano: HTML es el esqueleto, CSS es la piel y
        Javascript es los músculos.
      </p>

      <p>
        <b>¿Por qué Javascript?</b> Porque es amigable y poderoso, y
        encontraremos muchísimas comunidades capaces de respaldarnos y
        acompañarnos en este proceso de aprendizaje. Aprendiendo JS + HTML + CSS
        tendrás el poder de desarrolar:
      </p>
      <ul>
        <li>Páginas web (desarrollo front-end)</li>
        <li>Aplicaciones web (Páginas con funciones muy avanzadas)</li>
        <li>Servidores (desarrollo back-end)</li>
        <li>Aplicaciones móviles (React Native)</li>
        <li>Videojuegos (usando librerías de JS)</li>
      </ul>
      <a href="https://www.youtube.com/watch?v=qY2JD78kShQ&t=268s" target="_blank">
        <button>¿Qué se puede hacer con Javascript?</button>
      </a>
      

      <p>
        El mercado laboral es enorme y además si tenemos buenas ideas, JS nos
        permitirá materializarlas en una página o proyecto web. Javascript crece
        con el tiempo respaldado por miles de programadores que trabajan en
        mejorarlo y actualizarlo. Hoy existen frameworks construídos para dar
        más poder, funcionabilidad y escalabilidad a estas tecnologías. Una vez
        aprendidos JS + HTML + CSS, podemos encarar uno de estos:
      </p>
      <ul>
        <li>React JS (librería JS desarrollada por Facebook)</li>
        <li>Angular JS (framework desarrollado por Google)</li>
        <li>Vue JS (framework muy querido por los desarrolladores )</li>
        <li>Esbelt (framework màs reciente de JS)</li>
      </ul>

      <p>
        <b>¿Qué es un framework?</b> Es un entorno de trabajo que provee a los
        desarrolladores herramientas probadas y testeadas para la creación de
        aplicaciones interactivas y escalables.
      </p>
      <p>En conclusión, para mi criterio, tus primeros pasos deben ser:</p>
      <ul>
        <li>
          Comenzar a estudiar y aprender profundamente el lenguaje de Javascript
        </li>
        <li>
          Aprender HTML básico (HyperText Markup Language, es decir, Lenguaje de
          Formato de Documentos de Hipertexto): Es un lenguaje de etiquetas que
          se utiliza para armar la estructura de tu página (maquetado).
        </li>
        <li>
          Aprender CSS básico (Cascading Style Sheets, es decir, hojas de estilo
          en cascada): Este lenguaje sirve para dar estilo, colores y diseño a
          nuestra página o aplicación. Si te gusta el diseño te va a encantar,
          sino también es necesario aprenderlo porque éste definirá el formato y
          la belleza de nuestros trabajos.
        </li>
        <li>
          Luego encarar un Framework. Mi favorito es React, luego te comentaré
          más de sus ventajas, pero por ejemplo, sabiendo React haces
          aplicaciones web y existe React NAtive que nos permite casi de la
          misma forma adaptar esa aplicación web a una app movil. Interesante,
          ¿no?
        </li>
      </ul>

      <p>
        Teniendo definida la dirección donde te llevarán tus pasos, paso a
        compartirte algunos consejos que me hubiera haber escuchado en esta
        instancia inicial.
      </p>

      <Link href="/consejos">
        <button>Consejos y ruta</button>
      </Link>
      <hr />

      <h1>Preguntas frecuentes:</h1>
      <ul>
        <li>
          <b>¿Hay que tener bases de tecnología para ser programador?</b> Mientras más sepas y aprendas de tecnología e informática significará una ventaja en la competividad de los emrcados laborales. Realmente hoy es necesario apra casi todo aprender informática y lo más que podamos acerca de tecnología.
        </li>
        <li>
        <b>¿Qué tan difícil es conseguir un trabajo?</b> En este sector abundan las ofertas de puestos remotos con salarios abultados. Puedes tener suerte para conseguir uno, o no tanta, pero lo importante es que si no tienes experiencia, trabajes en un proyecto personal, un <i>portfolio</i> que puedas mostrar cuando los reclutadores quieran ver de lo que eres capaz.
        </li>        
      </ul>
    </div>
  </Layout>
);

export default PrimerosPasosDev;

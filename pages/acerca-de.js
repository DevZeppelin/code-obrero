import Layout from "../components/Layout";
import Link from "next/link";

const AcercaDe = () => (
  <Layout
    MainTitle="Sobre Mi"
    Footer={`Gino Pietrobon. Copyright ${new Date().getFullYear()}`}
  >
    <div className="container">
    <img className="icon" src="static/arco-iris.webp" alt="arcoiris png" />
      <p>
        Mi nombre es Gino Pietrobon, soy de Argentina. En noviembre de 2019 comencé a estudiar programación (Javascript), pero no fue fácil comenzar porque no encontraba un hilo coherente que me asegurara que estaba transitando el camino correcto. Fue hablando con un amigo programador cuando comprendí un poco el contexto de este mundo y sus consejos me ayudaron mucho para podr empezar.
        
      </p>
      <p>
        Es por eso que trabajo en esta plataforma, que además es mi portfolio. Es un proyecto para ayudar y acompañar a todos aquellos que quieran comenzar en el mundo dev y tal vez no tienen ese amigo programador que a través de una conversación o un consejo puede marcarles los primeros pasos de como empezar y de qué se trata todo esto. 
      </p>

      <p>
        Por eso propongo este medio para crear una comunidad de personas que sin importar su edad quieran ser programadores. El abanico de habilidades y tecnologías es tan grande que detectando las pasiones y gustos de las personas, es posible recomendarles la tecnología correcta que se amolde a sus virtudes y capacidades. No solo hablando de desarrollo frontend o backend, sino existen campos en UI, UX, diseño de imágenes o videos, marketing digital, redacción de textos, probar aplicaciones, etc.
      </p>
      <img className="icon" src="static/robot.webp" alt="robot png" />
      <p>
        El mundo ha abierto vacantes remotas para casi todos los empleos y si las personas logran obtener un núcleo básico de habilidades tecnológicas podrán postularse a una amplia variedad de buenos y cómodos trabajos, pertenecer a equipos competitivos y explotar su capital intelectual volcado a proyectos grandiosos. 
      </p>

      <p>
        Sueño con un futuro para mi país y continente, en donde existiendo muchos
        programadores logremos implementar excelentes tecnologías que ayuden a
        mejorar la calidad de vida de las personas y la gestión de un
        país. Poder plasmar excelentes sistemas que permitan aplicar políticas
        justas y efectivas. Creo que los programadores tendrán un lugar importante en cada país, y el poder será usar todo el capital intelectual de los programadores en mejorar el mundo.
      </p>
      <Link href="/contacto">
        <button>¡Contactame!</button>
      </Link>
    </div>
  </Layout>
);

export default AcercaDe;

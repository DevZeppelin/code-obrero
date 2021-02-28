import Layout from "../components/Layout";

export default function Criptomonedas() {
  return (
    <Layout
      ID="Criptomonedas"
      MainTitle="Criptomonedas"
      Footer={`Gino Pietrobon. Copyright ${new Date().getFullYear()}`}
    >
      
      <div className="container">
      <img className="icon" src="static/arcade.webp" alt="maquina de arcade png" />
      <nav className="secondaryNav">
        <a href="#usefulResources">
          <button>Recursos útiles</button>
        </a>
        <a href="#frecuentQuestions">
          <button>Preguntas frecuentes</button>
        </a>
        <a href="#altcoins">
          <button>Altcoins</button>
        </a>
      </nav>
        <p>
          Si sos un curioso de la tecnología y la programación, te invito a leer
          esta pequeña introducción al mundo cripto.
        </p>
        <p>
          <b>ADVERTENCIA:</b> Esto no es consejo de inversión, solo mi
          experiencia personal en el tema.
        </p>
        <p>
          <b>CONSEJO:</b> Si vas a invertir en el mundo Cripto debes usar dinero
          que estés dispuesto a perder y no dinero que necesitas en el corto
          plazo.
        </p>
        <p>
          El mundo Cripto es inmenso, interesante y es todo un cambio de
          paradigame de como funciona el mundo financiero como lo conocíamos.
          Hoy existen al rededor de 4000 criptomonedas alternativas a Bitcoin
          conocidas como “Altcoins”, pero para comprenderlas primero necesitamos
          saber lo básico de la criptomoneda madre, Bitcoin.
        </p>
        <p>
          Les comparto un link de un curso gratuito para conocer desde cero lo
          más importante de Bitcoin, como funciona, y la importancia y peso de
          esta moneda en el mundo moderno.
        </p>
        <button className="main">
          <a href="https://cursosbitcoin.com/cero" target="_blank">
            Bitcoin desde cero (Gratis!)
          </a>
        </button>

        <img className="icon" src="static/diamante.webp" alt="diamante png" />
          <h2>En resumen:</h2>
        
        <p>
          Bitcoin es una tecnología en donde todas las tranferencias de esta
          moneda quedan grabadas en una “Blockchain”, que sería como una base de
          datos gigante (50 GB aproximadamente) como si fuera una hoja de Exel
          en donde relaciona la cantidad de la moneda con la billetera (wallet)
          a la que le pertenecen. Luego de 10 años en funcionamiento, Bitcoin ha
          demostrado ser transparente, efectivo, descentralizado y anónimo.
        </p>
        <p>
          Lo revolucionario de esto es que alguien puede tranferir por ejemplo
          10 mil dólares de Argentina a Japón, en un muy breve tiempo, casi sin
          pagar comisión, y de forma anónima sin interferencia de ningún banco.
        </p>
        <p>
          Lo malo de todo esto son los hackers que están a la cacería de brechas
          de seguridad, intentando todo tipo de artimañas para robar las monedas
          ajenas. Por esto es importante invertir en conocimiento y aprender
          técnicas que nos permitan cuidar nuestras monedas de la forma más
          segura posible.
        </p>
        <p>
          Para esto existen muchos tipos de billeteras, físicas o en software,
          que nos permiten tener la custodia de nuestras llaves privadas (quien
          tiene las llaves criptográficas tiene el poder de la moneda).
        </p>
        <hr/>
        <img id="usefulResources" className="icon" src="static/dinosaurio.webp" alt="dinosaurio png" />
        <h1>Recursos útiles</h1>
        <div className="recursos-utiles">
          <article>
            <button>
              <a href="https://tradingview.com" target="_blank">
                Trading View
              </a>
            </button>
            <p>
              Página para ver gráficas, crear lista de seguimiento de activos
              que nos interesan y ver cómo se comportan en el día a día.
            </p>
          </article>
          <article>
            <button>
              <a href="https://coinmarketcap.com/es/" target="_blank">
                Coin Market Cap
              </a>
            </button>
            <p>
              Página para ver un ranking de criptomonedas con respecto al
              capital en mercado, monedas en circulación e información acerca de
              casi todas las criptos.
            </p>
          </article>
          <article>
            <button>
              <a href="https://www.binance.com/es/" target="_blank">
                Binance Exchanger
              </a>
            </button>
            <p>
              Uno de los exchanger más grandel del mundo, para que veas el
              aspecto de una plataforma que permite operar en un mercado
              complejo con una interfaz amistosa.
            </p>
          </article>
          <article>
            <button>
              <a href="https://coinmonitor.info/" target="_blank">
                Coin Monitor
              </a>
            </button>
            <p>
              Una simple página web que nos ofrece ver de manera rápida el valor
              actual de Bitcoin y el valor de nuestra moneda local. También
              ofrece información cruzada de cotizaciones y mejores precios en
              las casas de intercambio (exchanges) más populares.
            </p>
          </article>
        </div>
        <hr/>
        <img id="frecuentQuestions" className="icon" src="static/casete.webp" alt="casete png" />
        <h1>Preguntas frecuentes</h1>
        <h3>¿Esta moneda tiene inflación?</h3>
        <p>
          Al existir una cantidad limitada de bitcoins, esta no genera
          inflación, porque no puede existir ni un bitcoin más de los
          establecidos en su creación. El máximo que va a existir en el mundo es
          de 21 millones de monedas, lo que explica lo elevado de su precio.
        </p>
        <h3>¿Donde puedo comprar criptomonedas?</h3>
        <p>
          Existen varias palataformas como Binance, Bitso, Coinbase, y otros
          muchos más, que nos permiten comprar con dinero común tanto Bitcoin
          como otras Altcoins y luego nos permiten tranferirlas a nuestra
          billetera.
        </p>
        <h3>¿Se puede comprar Bitcoin en fracciones?</h3>
        <p>
          Sí. Cada bitcoin está dividido en 100 millones de satoshis, por lo que
          dependiendo de la cantidad de dinero del que dispongas, puedes comprar
          la cantidad de Satoshis (fracciones de bitcoin) que desees.
        </p>
        <h3>¿Puedo hacerme millonario comprando y vendiendo criptomonedas?</h3>
        <p>
          Esta es una pregunta recurrente y la verdad es que sí, puedes, como
          también puedes perder todo en un abrir y cerrar de ojos. El mundo
          Cripto está lleno de oportunidades y de riesgos. Por eso es muy
          importante invertir en conocimiento, cursos y capacitarse en
          informática y tecnología. Mientras más sepamos de tecnología mejor
          dominaremos las herramientas y plataformas a utilizar.
        </p>
        <p>
          Si aprendemos lo básico de trading sabremos cuando está bajo el precio
          de una moneda (momento de comprar) y cuando está en un pico, momento
          ideal para vender. También se puede hacer holding, que es almacenar
          una moneda en forma de ahorro apostando a su futuro.
        </p>

        <h3>¿Se puede vivir de esto?</h3>
        <p>
          Si tienes un capital considerable y sabes manejar las plataformas de
          compra/venta (Exchanges), existen estrategias para vender al picos y
          altos y recomprar en picos bajos y solo ir retirando las ganancias.
          Esto nos daría un ingreso diario, siempre dependiendo de nuestras
          buenas o malas decisiones.
        </p>

        <p>
          <b>CONSEJO:</b> Nadie puede decirte que moneda va a explotar en su
          precio, y si te lo dicen tal vez están promocionando una moneda para
          incrementar su valor. Por eso es importante que vos investigues,
          estudies las empresas y proyectos, y sea tu decisión invertir en tal y
          cuál proyecto.
        </p>
        <hr/>
        <img id="altcoins" className="icon" src="static/gafas.webp" alt="gafas png" />
        <h1>Altcoins</h1>
        <p>
          Conociendo lo básico de Bitcoin podemos hablar de algunas de las
          Altcoins más importantes que desempeñan unpapel importante en este
          nuevo campo. Básicamente las AltoVamos con algunas de ellas:
        </p>

        <ul>
          <li>
            <b>Ethereum:</b> Este proyecto pertenece a una compañía que creó una
            Blockchain propia, en donde corre este proyecto y también otros
            proyectos de Altcoins corren sobre esta red. Lo más importante de
            ETH es que implementó el uso de “Contratos inteligentes” que serían
            contratos programados para ejecutar acciones de manera automática en
            caso de cumplimiento o incumplimiento del contrato. Es la segunda
            criptomoneda más famosa y su valor asciende casi a 2000 dolares por
            moneda.
          </li>
          <li>
            <b>IOTA:</b> Esta moneda está enfocada en el mundo de Internet de
            las cosas (Internet of Things), y ha demostrado solidez en el
            proyecto y un crecimiento considerable sostenido en el tiempo.
          </li>
          <li>
            <b>Cardano:</b> Este proyecto es una alternativa a la red de
            Etherium, solo que a diferencia de ETH, Cardano ha demostrado haber
            desarrollado una base más solida respecto a su propia Blockchain, lo
            que promete un ascenso sostenido en el campo Cripto.
          </li>
          <li>
            <b>Dogecoin:</b> Este proyecto utiliza un meme de un perrito en la
            imagen de la moneda y fue desarrolado en modo de broma, demostrando
            que descargando el código de bitcoin y alterando los valores es muy
            sencillo crear una criptomoneda. Increíblemente esta moneda logró
            consolidarse entre las más queridas y hoy su valor está muy alto
            respecto a su valor inicial.
          </li>
        </ul>
        <hr/>
        <a href="#nav-container">
          <button>Ir arriba!</button>
        </a>
      </div>
      <style jsx>{`
        h1 {
          font-size: 2.6em;
          padding-top: 1.8;
          padding-bottom: 1.1em
        }

        button.main {
          margin-top: 4em;
          margin-bottom: 3em;
        }

        button {
          margin-top: 0.2em;
          margin-bottom: 0.5em;
        }

        p {
          padding-bottom: 18px;
          padding-top: 18px;
        }

        .recursos-utiles {
          display: grid;
          grid-template-columns: 1fr 1fr;
        }

        .recursos-utiles article {
          padding: 10px;
          text-align: center
        }
      `}</style>
    </Layout>
  );
}

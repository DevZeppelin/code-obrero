import Document, { Head, Main, NextScript } from "next/document";
/*import { useMediaQuery } from "react-responsive";*/

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    /*const isMobile = useMediaQuery({ query: `(max-width: 760px)` });*/

    return (
      <html lang="es">
        <Head>
          <meta
            name="viewport"
            content="width=device-width,minimum-scale=0.5,initial-scale=1"
          />
          <link
            href="https://fonts.googleapis.com/css2?family=Sofia&display=swap"
            rel="stylesheet"
          />
          <link
            href="https://fonts.googleapis.com/css2?family=Rokkitt&display=swap'"
            rel="stylesheet"
          />
          <link
            href="https://fonts.googleapis.com/css2?family=Quicksand:wght@500&display=swap'"
            rel="stylesheet"
          />
          <link
            href="https://fonts.googleapis.com/css2?family=Fruktur&display=swap'"
            rel="stylesheet"
          />          
        </Head>
        <head>
          <meta charSet="UTF-8" />
          <meta
            name="description"
            content="Code-Obrero. Como iniciar en el mundo del desarrollo web. Un lugar para encaminarte a ser un buen programador."
          />
          <meta
            name="keywords"
            content="aprender programar javascript iniciar mundo programacion dev react next.js"
          />
          <meta name="author" content="Gino Pietrobon" />

          <link rel="icon" href="/static/favicon.webp" />
          <title>codeObrero</title>
        </head>

        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    );
  }
}

export default MyDocument;

import { useState } from "react";
import Router from "next/router";
//import Head from "next/head";
import Layout from "../components/Layout";
//import fetch from "isomorphic-fetch";
//import Error from "./_error";

export default function News({ news }) {
  /*const News = ({ news }) => {*/
  // const [searchQuery, setSearchQuery] = useState("react");
  const [value, setValue] = useState({
    text: "argentina",
    //name: '',
    //email: '',
    //password: '',
    coolMsg: "", //es el nuevo input
  });

  const { text, coolMsg } = value;

  const handleChange = (name) => (e) => {
    // setSearchQuery(e.target.value);
    setValue({ ...value, [name]: e.target.value });
    //con el mismo handleChange aplica para cada input con su correspondiente "name"
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    Router.push(`/tecnoticiero/?searchTerm=${text}/#notice-position`);
    //en ${} estaba searchQuery pero declare como constante text y coolMsg = value, entonces ya puedo utilizar "text" y "coolMsg" en Router y los input
  };

  const searchForm = () => (
    <form onSubmit={handleSubmit}>
      <p>(Para que veas la fluidez de ésta página escribe lo que sea aquí:)</p>
      <input
        type="text"
        placeholder="Escribe algo..."
        onChange={handleChange("coolMsg")}
        className="input-tec"
      />
      <span>{coolMsg}</span>

      <h2>Buscador de noticias de Hacker News (inglés)</h2>
      <p>
        Escribe la tecnología o tema que quieras buscar. Ej. Bitcoin,
        Javascript, Linux, Dolar, etc.
      </p>
      <input
        className="input-tec"
        type="text"
        value={text}
        onChange={handleChange("text")}
      />
      <button id="notice-position">Search</button>
      <style jsx>{`
        form {
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        form input {
          margin: 30px;
          height: 48px;
          width: 250px;
          font-size: x-large;
        }

        form button {
          margin-top: 0.75em;
        }

        span {
          font-size: x-large;
          font-weight: 600;
          color: var(--violet-sky);
        }
      `}</style>
    </form>
  );

  console.log(news);

  return (
    <Layout
      ID="Tecnoticiero"
      MainTitle="Tecnoticiero"
      Footer={`Gino Pietrobon. Copyright ${new Date().getFullYear()}`}
    >
      <div>
        <div className="container">
          {searchForm()}
          <hr />

          {news.map((n, i) => (
            <p key={i}>
              <a href={n.url} target="_blank">
                {i + 1 + ". "}
                {n.title}
              </a>
              ({n.created_at.substring(8, 10)}/{n.created_at.substring(5, 7)}/
              {n.created_at.substring(0, 4)})
            </p>
          ))}
        </div>
      </div>
      <style jsx>{`
        a {
          display: flex;
          justify-content: flex-start;
        }
      `}</style>
    </Layout>
  );
}

News.getInitialProps = async ({ query }) => {
  let news;
  try {
    const res = await fetch(
      `https://hn.algolia.com/api/v1/search?query=${
        query.searchTerm || "argentina"
      }`
    );
    news = await res.json();
    console.log(news);
  } catch (err) {
    console.log("ERROR", err);
    news = [];
  }
  return {
    news: news.hits,
  };
};

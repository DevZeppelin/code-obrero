import Nav from "../components/Nav";

const Layout = ({ID, MainTitle, Footer, children }) => (
  <div className={ID} id={ID}>    
    <Nav />
    <h1 className="main">{MainTitle}</h1>

    {children}
    <hr className="hr" />
    <h4>{Footer}</h4>
    
    <style jsx global>{`
    @import url("https://fonts.googleapis.com/css2?family=Sofia&display=swap");
    @import url('https://fonts.googleapis.com/css2?family=Rokkitt&display=swap');
    @import url('https://fonts.googleapis.com/css2?family=Quicksand:wght@500&display=swap');
    @import url('https://fonts.googleapis.com/css2?family=Fruktur&display=swap');


    :root {
  --background: #00234b;
  --violet-sky: #561631;
  --coral-sky: #d84637;
  --light-coral-sky: #fe7b51;
}

* {
  font-family: "Quicksand", sans-serif;
  margin: 0;
}

html {
  scroll-behavior: smooth;
  width: fit-content;
}

body {
  background-color: whitesmoke;
  width: 100vw;
}

.container {
  display: block;
  max-width: 2400px;
  width: 80%;
  text-align: justify;
  align-items: center;
  justify-content: center;
  margin: auto;
}

.icon {
  display: block;
  margin: auto;
  width: 128px;
  height: 128px;
  padding-top: 2em;
  padding-bottom: 1.5em;
}

.main-index {
  background:
     url(/static/index-img.webp)/* image */
     top center / 100% 100%   /* position / size */
     no-repeat                /* repeat */
     fixed                    /* attachment */
     padding-box              /* origin */
     content-box              /* clip */
     black;                     /* color */  
  color: whitesmoke;
}

.hr {
  border-color: var(--background);
}

h1 {
  font-family: "Sofia", cursive;
  text-align: center;
  margin-top: 1em;
  padding-bottom: 5px;
  padding-left: 6px;
  font-size: 2.5em;
}

h2 {
  text-align: center;
  font-size: 2em;
  margin: auto;
  margin-top: 1em;
}

h3 {
  font-size: 1.4em;
  padding-top: 16px;
}

.logo {
  padding: 10px;
  margin-left: 10px;
}

a {
  padding: 10px;
  text-decoration: none;
  font-weight: bold;
  font-size: 1.1em;
  color: var(--background);
}

p {
  padding: 15px 10px;
  font-size: 1.2em;
  color: var(--background);
}

li {
  padding: 5px 40px;
  margin: 0.5em;
  font-size: 1.2em;
  color: var(--background);
}

button {
  display: flex;
  margin-left: auto;
  margin-right: auto;
  padding: 10px;
  font-size: 1.1em;
  margin-top: 50px;
  margin-bottom: 40px;
  font-weight: bold;
}

#main-index > .nav-container a {
  color: rgb(194, 194, 194);
}

ul, ol{
  padding-inline-start: 20px;
  padding: 0.1em;
}

.secondaryNav {
  display: flex;
  justify-content: space-around ;
  flex-direction: row;
}

.secondaryNav button {
  margin: 0.2em;
}



@media screen and (max-width: 700px) {
  .main-index {
  background:
     url(/static/index-img.webp)/* image */
     top center / 150% 100%   /* position / size */
     no-repeat                /* repeat */
     fixed                    /* attachment */
     padding-box              /* origin */
     content-box;              /* clip */    
  color: whitesmoke;
}
  body {
    width: 100%;
  }

  h1 {
    font-size: 2.7em;
  }

  h2 {
    font-size: 2.3em;
  }
  p {
    font-size: 1.6em;
  }

  li {
    font-size: 1.5em;
  }
}
`}</style>
  </div>
);

export default Layout;

import Nav from "../components/Nav";

const Layout = ({ID, MainTitle, Footer, children }) => (
  <div className={ID} id={ID}>    
    <Nav />
    <h1 className="main">{MainTitle}</h1>

    {children}
    <hr className="hr" />
    <h4>{Footer}</h4>
  </div>
);

export default Layout;

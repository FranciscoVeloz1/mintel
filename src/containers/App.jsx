import React from "react";

//Importing components
import Navigation from "../components/Navigation";
import Main from "../components/Main";
import Products from "../components/Products";
import Software from "../components/Software";
import About from "../components/About";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

//Importing SASS
import "../assets/styles/App.scss";

const App = () => {
  return (
    <div id="home" className="App">
      <Navigation />
      <Main />
      <Products />
      <Software />
      <About />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;

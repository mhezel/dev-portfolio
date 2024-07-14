
import About from "./_components/about/About";
import Contact from "./_components/contact/Contact";
import Cursor from "./_components/cursor/Cursor";
import Hero from "./_components/hero/Hero";
import Navbar from "./_components/nav/Navbar";
import Parallax from "./_components/parallax/Parallax";
import Portfolio from "./_components/portfolio/Portfolio";
import Services from "./_components/services/Services";
import "./app.scss";

const App = () => {
  return <div>
    <Cursor/>
    <section id="Homepage">
      <Navbar/>
      <Hero/>
    </section>
    <section id="Services">
      <Parallax type="services"/>
    </section>
    <section>
      <Services/>
    </section>
    <section id="Portfolio">
      <Parallax type="portfolio"/>
    </section>
    <Portfolio/>
    <section id="About Me"><About/></section>
    <section id="Contact">
      <Contact/>
    </section>
  </div>;
};

export default App;

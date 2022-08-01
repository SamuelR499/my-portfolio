import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import About from './components/about/About';
import Nav from './components/Navegation/Nav';
import Experience from './components/experience/Experience';
import Contact from './components/contact/Contact';
import Testimonials from './components/testimonials/Testimonials';
import SoftSkill from './components/SoftSkills/SoftSkills';
import Portfolio from './components/portfolio/Portfolio';


function App() {
  return (
    <div>
      <Header />
      <Nav/>
      <About />
      <Experience/>
      <SoftSkill/>
      <Portfolio/>
      <Testimonials/>
      <Contact/>
      <Footer />

    </div>
  );
}

export default App;

import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import About from './components/about/About';
import Nav from './components/Navegation/Nav';
import Experience from './components/experience/Experience';
import Contact from './components/contact/Contact';
import Testimonials from './components/testimonials/Testimonials';
import Services from './components/services/Services';
import Portifolio from './components/portifolio/Portifolio';


function App() {
  return (
    <div>
      <Header />
      <Nav/>
      <About />
      <Experience/>
      <Services/>
      <Portifolio/>
      <Testimonials/>
      <Contact/>
      <Footer />

    </div>
  );
}

export default App;

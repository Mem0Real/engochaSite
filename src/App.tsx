import Header from './components/Header';
import Hero from './components/Hero';
import Product from './components/Product';
import Technology from './components/Technology';
import Prototype from './components/Prototype';
import Franchise from './components/Franchise';
import Investors from './components/Investors';
import Gallery from './components/Gallery';
import Downloads from './components/Downloads';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      <Product />
      <Technology />
      <Prototype />
      <Franchise />
      <Investors />
      <Gallery />
      <Downloads />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
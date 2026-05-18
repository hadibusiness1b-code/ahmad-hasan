import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Locations from './components/Locations';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-slate-50">
      <Header />
      <main>
        <Hero />
        <About />
        <Locations />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

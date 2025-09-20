import { Navigation } from './components/Navigation';
import { Hero, Services, Process, Pricing, Contact, Footer } from './components/sections';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <main>
        <Hero />
        <Services />
        <Process />
        <Pricing />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
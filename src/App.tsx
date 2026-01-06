import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { VisionWidget } from './components/VisionWidget';
import { Products } from './components/Products';
import { Footer } from './components/Footer';
import { SocialHub } from './components/SocialHub';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <Hero />
        <VisionWidget />
        <Products />
      </main>
      <Footer />
      <SocialHub />
    </div>
  );
}

export default App;

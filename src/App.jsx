import { Navigation } from "./components/Navigation";
import { Hero } from "./components/Hero";
import { Products } from "./components/Products";
import { Software } from "./components/Software";
import { About } from "./components/About";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import { useSmoothScroll } from "./hooks/useSmoothScroll";

export function App() {
  useSmoothScroll();

  return (
    <>
      <Navigation />
      <main>
        <Hero />
        <Products />
        <Software />
        <About />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

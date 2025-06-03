import { useEffect } from "react";
import CardList from "./components/Cards";
import TopDestiny from "./components/Destiny";

import Footer from "./components/Footer";
import GoodHands from "./components/GoodHands";
import Header from "./components/Header";
import HowWorking from "./components/HowWorking";
import AOS from "aos";
import "aos/dist/aos.css";

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000, // duração padrão da animação
      once: true, // anima só na primeira vez que aparece
    });
  }, []);

  return (
    <main>
      <Header />
      <GoodHands />
      <HowWorking />
      <TopDestiny />
      <CardList />
      <Footer />
    </main>
  );
}

export default App;

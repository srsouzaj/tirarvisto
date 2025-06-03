import CardList from "./components/Cards";
import TopDestiny from "./components/Destiny";
import GoodHands from "./components/GoodHands";
import Header from "./components/Header";
import HowWorking from "./components/HowWorking";

const Home = () => {
  return (
    <>
      <Header />
      <main>
        <GoodHands />
        <HowWorking />
        <TopDestiny />
        <CardList />
      </main>
    </>
  );
};

export default Home;

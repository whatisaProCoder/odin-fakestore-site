import CallToAction from "../components/home/CallToAction";
import Categories from "../components/home/Categories";
import ExclusiveDeals from "../components/home/ExclusiveDeals";
import Features from "../components/home/Features";
import Hero from "../components/home/Hero";

function Home() {
  return (
    <>
      <Hero />
      <Categories />
      <ExclusiveDeals />
      <Features />
      <CallToAction />
    </>
  );
}

export default Home;

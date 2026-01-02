import { useEffect } from "react";
import CallToAction from "../components/home/CallToAction";
import Categories from "../components/home/Categories";
import ExclusiveDeals from "../components/home/ExclusiveDeals";
import Features from "../components/home/Features";
import Hero from "../components/home/Hero";

function Home() {
  const scrollToTop = () => {
    setTimeout(() => {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }, 300);
  };

  useEffect(() => {
    scrollToTop();
  }, []);

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

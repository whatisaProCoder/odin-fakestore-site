import clothesExample from "../../assets/images/clothes-example.jpeg";
import shoeExample from "../../assets/images/shoe-example.webp";
import miscExample from "../../assets/images/misc-example.webp";
import furnitureExample from "../../assets/images/furniture-example.jpg";
import electronicsExample from "../../assets/images/electronics-example.jpg";

import Carousel from "../common/Carousel";

import Brand from "./Brand";
import HeroActionButton from "./HeroActionButton";
import useCarousel from "../../hooks/useCarousel";
import { useMediaQuery } from "react-responsive";
import { Activity } from "react";
import { useNavigate } from "react-router";

function Hero() {
  const navigate = useNavigate();

  const isTablet = useMediaQuery({ maxWidth: 900 });

  const itemArray = [
    { id: 2, name: "Electronics", src: electronicsExample },
    { id: 4, name: "Clothes", src: clothesExample },
    { id: 0, name: "Footwear", src: shoeExample },
    { id: 1, name: "Furniture", src: furnitureExample },
    { id: 3, name: "Stationary", src: miscExample },
  ];

  const { itemIndex, setItemIndex } = useCarousel({ itemArray, delay: 1700 });

  const handleShopNowOnClick = () => {
    navigate("/shop");
  };

  return (
    <div className="h-120 max-sm:h-100">
      <img
        key={itemIndex}
        src={itemArray[itemIndex].src}
        className="object-cover absolute w-full h-120 max-sm:h-100 opacity-25 -z-10 fade-in-25"
      />
      <div className="h-full flex flex-row justify-center">
        <div className="flex flex-row w-full max-w-350 px-20 max-sm:px-10 h-full justify-between gap-4 items-center">
          <div className="flex flex-col items-start max-sm:items-center max-sm:w-full">
            <Brand fontSize={isTablet ? "1.5rem" : "2rem"} />
            <div className="mt-2 poppins text-xl max-sm:text-[0.9rem] text-center">
              Your one-stop online shopping site.
            </div>
            <HeroActionButton
              text="Shop now"
              className="mt-10"
              onClick={handleShopNowOnClick}
            />
          </div>
          <Activity mode={isTablet ? "hidden" : "visible"}>
            <Carousel
              height="20rem"
              width="22rem"
              itemArray={itemArray}
              itemIndex={itemIndex}
              setItemIndex={setItemIndex}
              delay={1700}
            />
          </Activity>
        </div>
      </div>
    </div>
  );
}

export default Hero;

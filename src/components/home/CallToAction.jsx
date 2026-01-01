import ActionButton from "../common/ActionButton";
import Footer from "../layout/Footer";

function CallToAction() {
  return (
    <div className="flex flex-col justify-center items-center bg-linear-to-br from-[#2573E9] to-[#3237A1]">
      <div className="py-16 max-sm:py-10 max-w-350 px-20 max-sm:px-10 w-full flex flex-row max-sm:flex-col justify-between items-center">
        <div className="flex flex-col gap-4 max-sm:mb-12">
          <div className="poppins font-semibold text-xl max-sm:md max-sm:text-center">
            Ready to fill the cart?
          </div>
          <div className="inter text-md max-sm:text-center">
            Choose from exclusive products
            <br /> featured on <span className="font-bold">FakeStore.</span>
          </div>
        </div>
        <ActionButton text="Shop Now" />
      </div>
      <Footer />
    </div>
  );
}

export default CallToAction;

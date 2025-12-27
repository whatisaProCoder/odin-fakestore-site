import { useNavigate } from "react-router";
import leftArrow from "../assets/icons/left-arrow.svg";

import IconButton from "../components/common/IconButton";

function Error() {
  const navigate = useNavigate();

  return (
    <div className="py-32 flex flex-col justify-center items-center">
      <div className="poppins text-[1.75rem] font-bold">404</div>
      <div className="mt-4 inter text-[0.9rem] font-normal">
        The page you’re looking for doesn’t exist.
      </div>
      <IconButton
        className="mt-8"
        iconSrc={leftArrow}
        text="Go Home"
        onClick={() => navigate("/")}
      />
    </div>
  );
}

export default Error;

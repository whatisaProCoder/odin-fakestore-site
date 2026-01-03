import { useNavigate } from "react-router";
import rightArrow from "../assets/icons/right-arrow-black.svg";

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
        iconSrc={rightArrow}
        text="Go Home"
        onClick={() => navigate("/")}
      />
    </div>
  );
}

export default Error;

import PropTypes from "prop-types";

function Brand({ fontSize = "2rem" }) {
  const extractFontValue = () => {
    return parseInt(fontSize.substring(0, fontSize.indexOf("rem")), 10);
  };

  const getDotHeight = () => {
    const newValue = extractFontValue() / 3.7;
    return newValue + "rem";
  };

  const getGapValue = () => {
    const newValue = extractFontValue() / 8;
    return newValue + "rem";
  };

  return (
    <div
      className="poppins flex flex-row font-bold items-baseline"
      style={{ fontSize, gap: getGapValue() }}
    >
      FakeStore
      <div
        className="aspect-square bg-[#2573E9]"
        style={{ height: getDotHeight() }}
      />
    </div>
  );
}

Brand.propTypes = {
  fontSize: PropTypes.string,
};

export default Brand;

import { useEffect, useState } from "react";
import errorIcon from "../../assets/icons/error-icon.svg";

function LazyImage({ className, src, alt, onClick, style }) {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(src)
      .catch((error) => setError(error))
      .finally(() => setLoading(false));
  }, [src]);

  return (
    <div
      className={className + " flex flex-col justify-center items-center"}
      onClick={onClick}
      style={style}
    >
      {!loading && !error && (
        <img
          src={src}
          alt={alt}
          className="w-full h-full object-cover fade-in-slow"
        />
      )}
      {loading && !error && (
        <div className="h-full w-full shimmer bg-[#b2b2b2] infinite" />
      )}
      {!loading && error && (
        <img src={errorIcon} alt={alt} className="w-12 aspect-square" />
      )}
    </div>
  );
}

export default LazyImage;

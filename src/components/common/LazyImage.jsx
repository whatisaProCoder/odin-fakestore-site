import { useEffect, useState } from "react";
import errorIcon from "../../assets/icons/error-icon.svg";

function LazyImage({ className, src, alt, onClick }) {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  console.log({ loading, error });

  useEffect(() => {
    fetch(src)
      .catch((error) => setError(error))
      .finally(() => setLoading(false));
  }, [src]);

  return (
    <div
      className={className + " flex flex-col justify-center items-center"}
      onClick={onClick}
    >
      {!loading && !error && <img src={src} alt={alt} className="fade-in" />}
      {loading && !error && (
        <div className="h-full w-full shimmer bg-[#868686] infinite" />
      )}
      {!loading && error && (
        <img src={errorIcon} alt={alt} className="w-12 aspect-square" />
      )}
    </div>
  );
}

export default LazyImage;

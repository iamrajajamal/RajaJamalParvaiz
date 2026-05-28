import React, { useState, useEffect, useRef } from "react";

const ERROR_IMG_SRC =
  "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iODgiIGhlaWdodD0iODgiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgc3Ryb2tlPSIjMDAwIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBvcGFjaXR5PSIuMyIgZmlsbD0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIzLjciPjxyZWN0IHg9IjE2IiB5PSIxNiIgd2lkdGg9IjU2IiBoZWlnaHQ9IjU2IiByeD0iNiIvPjxwYXRoIGQ9Im0xNiA1OCAxNi0xOCAzMiAzMiIvPjxjaXJjbGUgY3g9IjUzIiBjeT0iMzUiIHI9IjciLz48L3N2Zz4KCg==";

interface OptimizedImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  avifSrc?: string;
  placeholder?: string;
  imgClassName?: string;
  priority?: boolean;
}

export function OptimizedImage({
  src,
  avifSrc,
  placeholder,
  alt = "",
  className = "",
  imgClassName = "",
  loading = "lazy",
  priority = false,
  style,
  ...rest
}: OptimizedImageProps) {
  const [isLoaded, setIsLoaded] = useState(false);
  const [didError, setDidError] = useState(false);
  const imgRef = useRef<HTMLImageElement>(null);

  // Check if image is already cached/loaded on mount
  useEffect(() => {
    if (imgRef.current?.complete) {
      setIsLoaded(true);
    }
  }, [src]);

  const handleLoad = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
    setIsLoaded(true);
    if (rest.onLoad) rest.onLoad(e);
  };

  const handleError = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
    setDidError(true);
    if (rest.onError) rest.onError(e);
  };

  const actualLoading = priority ? "eager" : loading;

  if (didError) {
    return (
      <div
        className={`inline-block bg-gray-100/50 text-center align-middle relative overflow-hidden ${className}`}
        style={style}
      >
        <div className="flex items-center justify-center w-full h-full min-h-[50px]">
          <img src={ERROR_IMG_SRC} alt="Error loading image" className="opacity-40 max-w-[50px] max-h-[50px]" />
        </div>
      </div>
    );
  }

  return (
    <div
      className={`relative overflow-hidden w-full h-full select-none ${className}`}
      style={{
        ...style,
        // Cardboard aesthetic border or styling can be added via classes
      }}
    >
      {/* Blurred Placeholder */}
      {placeholder && !isLoaded && (
        <img
          src={placeholder}
          alt=""
          aria-hidden="true"
          className="absolute inset-0 w-full h-full object-cover pointer-events-none scale-105"
          style={{
            filter: "blur(12px)",
            transform: "scale(1.05)",
            transition: "opacity 0.6s ease-out",
            zIndex: 1,
          }}
        />
      )}

      {/* Picture fallback pipeline */}
      <picture className="w-full h-full">
        {avifSrc && <source srcSet={avifSrc} type="image/avif" />}
        <source srcSet={src} type="image/webp" />
        <img
          ref={imgRef}
          src={src}
          alt={alt}
          loading={actualLoading}
          {...(priority ? { fetchpriority: "high" } : {})}
          onLoad={handleLoad}
          onError={handleError}
          className={`w-full h-full object-cover transition-opacity duration-500 ease-in-out ${imgClassName} ${
            isLoaded ? "opacity-100" : "opacity-0"
          }`}
          style={{
            position: "relative",
            zIndex: isLoaded ? 2 : 0,
          }}
          {...rest}
        />
      </picture>
    </div>
  );
}

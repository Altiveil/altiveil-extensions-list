import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Image as ImageIcon, Maximize2, X } from 'lucide-react';
import { resolveAssetUrl } from '../utils/assetHelper';

interface PreviewSlideshowProps {
  images?: string[];
  extensionName: string;
}

export const PreviewSlideshow: React.FC<PreviewSlideshowProps> = ({
  images = [],
  extensionName,
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [failedImages, setFailedImages] = useState<Record<number, boolean>>({});
  const [isPaused, setIsPaused] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);

  const displayImages = images.length > 0
    ? images
    : [
        './outer-box-ruler/preview/image1.png',
        './outer-box-ruler/preview/image2.png',
        './outer-box-ruler/preview/image3.png',
      ];



  useEffect(() => {
    if (displayImages.length <= 1 || isPaused || isFullscreen) return;

    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % displayImages.length);
    }, 4000);

    return () => clearInterval(timer);
  }, [displayImages.length, isPaused, isFullscreen]);

  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentIndex((prev) => (prev - 1 + displayImages.length) % displayImages.length);
  };

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentIndex((prev) => (prev + 1) % displayImages.length);
  };

  const handleImageError = (index: number) => {
    setFailedImages((prev) => ({ ...prev, [index]: true }));
  };

  const rawImageSrc = displayImages[currentIndex];
  const currentImageSrc = resolveAssetUrl(rawImageSrc);
  const isCurrentFailed = failedImages[currentIndex];


  return (
    <div className="mb-4">
      <div
        className="relative bg-zinc-50 rounded-lg border-2 border-zinc-200 aspect-[16/9] flex items-center justify-center select-none overflow-hidden"
        onClick={() => !isCurrentFailed && setIsFullscreen(true)}
      >
        {!isCurrentFailed ? (
          <img
            src={currentImageSrc}
            alt={`${extensionName} プレビュー`}
            className="w-full h-full object-cover cursor-pointer"
            onError={() => handleImageError(currentIndex)}
          />
        ) : (
          <div className="flex flex-col items-center justify-center p-4 text-center text-zinc-400 space-y-1">
            <ImageIcon className="w-7 h-7 text-zinc-400 mb-0.5" />
            <p className="text-xs font-semibold text-zinc-500">プレビュー画像準備中</p>
          </div>
        )}


        {!isCurrentFailed && displayImages.length > 1 && (
          <>
            <button
              onClick={handlePrev}
              className="absolute left-2 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-black/50 hover:bg-black/80 text-white flex items-center justify-center transition-all opacity-80 sm:opacity-0 sm:group-hover:opacity-100 z-20"
              aria-label="前の画像"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            <button
              onClick={handleNext}
              className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-black/50 hover:bg-black/80 text-white flex items-center justify-center transition-all opacity-80 sm:opacity-0 sm:group-hover:opacity-100 z-20"
              aria-label="次の画像"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </>
        )}

        {!isCurrentFailed && (
          <div className="absolute top-2 right-2 p-1.5 rounded-md bg-black/50 text-white opacity-0 group-hover:opacity-100 transition-opacity z-20">
            <Maximize2 className="w-3.5 h-3.5" />
          </div>
        )}

        {!isCurrentFailed && displayImages.length > 1 && (
          <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex items-center gap-1.5 px-2 py-1 rounded-full bg-black/40 backdrop-blur-xs z-20">
            {displayImages.map((_, idx) => (
              <button
                key={idx}
                onClick={(e) => {
                  e.stopPropagation();
                  setCurrentIndex(idx);
                }}
                className={`transition-all rounded-full ${
                  idx === currentIndex
                    ? 'w-4 h-1.5 bg-white'
                    : 'w-1.5 h-1.5 bg-white/50 hover:bg-white/80'
                }`}
                aria-label={`スライド ${idx + 1}`}
              />
            ))}
          </div>
        )}
      </div>

      {isFullscreen && !isCurrentFailed && (
        <div
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4 sm:p-8"
          onClick={() => setIsFullscreen(false)}
        >
          <button
            onClick={() => setIsFullscreen(false)}
            className="absolute top-4 right-4 p-2 text-white hover:text-zinc-300 bg-zinc-800/80 rounded-full"
            aria-label="閉じる"
          >
            <X className="w-6 h-6" />
          </button>

          <img
            src={currentImageSrc}
            alt={`${extensionName} プレビュー`}
            className="max-w-full max-h-full object-contain rounded-lg shadow-2xl"
          />
        </div>
      )}
    </div>
  );
};

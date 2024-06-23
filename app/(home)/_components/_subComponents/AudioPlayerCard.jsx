"use client";
import React, { useState, useRef, useEffect } from 'react';
import Image from 'next/image';

const AudioPlayerCard = ({ audioSrc, imageSrc }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const audioRef = useRef(null);

  useEffect(() => {
    const audio = audioRef.current;

    const handleLoadedMetadata = () => {
      setDuration(audio.duration);
    };

    const handleTimeUpdate = () => {
      setCurrentTime(audio.currentTime);
    };

    audio.addEventListener('loadedmetadata', handleLoadedMetadata);
    audio.addEventListener('timeupdate', handleTimeUpdate);

    return () => {
      audio.removeEventListener('loadedmetadata', handleLoadedMetadata);
      audio.removeEventListener('timeupdate', handleTimeUpdate);
    };
  }, []);

  const togglePlayPause = () => {
    const audio = audioRef.current;
    if (isPlaying) {
      audio.pause();
    } else {
      audio.play();
    }
    setIsPlaying(!isPlaying);
  };

  const handleSeek = (e) => {
    const audio = audioRef.current;
    const newTime = (e.target.value / 100) * duration;
    audio.currentTime = newTime;
    setCurrentTime(newTime);
  };

  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
  };

  return (
    <div className="bg-[#CCC1DA] rounded-lg p-4 h-[100px] flex items-center space-x-5 w-full">
      <audio ref={audioRef} src={audioSrc} />
      <button
        onClick={togglePlayPause}
        className="text-white bg-[#8064A2] h-[40px] flex w-[40px] items-center rounded-full focus:outline-none"
      >
        {isPlaying ? (
          <svg xmlns="http://www.w3.org/2000/svg" className="h-[50px] w-[50px]" viewBox="0 0 20 20" fill="currentColor">
            <path
              fillRule="evenodd"
              d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zM7 8a1 1 0 012 0v4a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v4a1 1 0 102 0V8a1 1 0 00-1-1z"
              clipRule="evenodd"
            />
          </svg>
        ) : (
          <svg xmlns="http://www.w3.org/2000/svg" className="h-[50px] w-[50px]" viewBox="0 0 20 20" fill="currentColor">
            <path
              fillRule="evenodd"
              d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z"
              clipRule="evenodd"
            />
          </svg>
        )}
      </button>
      <div className="flex-grow">
        <input
          type="range"
          min="0"
          max="100"
          value={(currentTime / duration) * 100 || 0}
          onChange={handleSeek}
          className="w-full h-1 bg-purple-200 rounded-full appearance-none cursor-pointer focus:outline-none focus:ring-0
             [&::-webkit-slider-thumb]:appearance-none
             [&::-webkit-slider-thumb]:w-4
             [&::-webkit-slider-thumb]:h-4
             [&::-webkit-slider-thumb]:rounded-full
             [&::-webkit-slider-thumb]:bg-[#8064A2]
             [&::-moz-range-thumb]:appearance-none
             [&::-moz-range-thumb]:w-4
             [&::-moz-range-thumb]:h-4
             [&::-moz-range-thumb]:rounded-full
             [&::-moz-range-thumb]:bg-purple-500
             [&::-webkit-slider-runnable-track]:rounded-full
             [&::-moz-range-track]:rounded-full"
        />
      </div>
      <div className="text-sm text-[#8064A2] w-[40px] ">{formatTime(currentTime)}</div>
      <div className="relative ">
        <div className="w-[60px] h-[60px] rounded-full overflow-hidden">
          <Image src={imageSrc} alt="Album cover" width={60} height={60} />
        </div>
        <svg
          width="20"
          height="26"
          viewBox="0 0 20 26"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="absolute bottom-1 -left-2"
        >
          <path
            d="M9.99982 16.6666C12.2132 16.6666 13.9998 14.88 13.9998 12.6666V4.66663C13.9998 2.45329 12.2132 0.666626 9.99982 0.666626C7.78649 0.666626 5.99982 2.45329 5.99982 4.66663V12.6666C5.99982 14.88 7.78649 16.6666 9.99982 16.6666ZM17.8798 12.6666C17.2265 12.6666 16.6798 13.1466 16.5732 13.8C16.0265 16.9333 13.2932 19.3333 9.99982 19.3333C6.70649 19.3333 3.97315 16.9333 3.42649 13.8C3.31982 13.1466 2.77315 12.6666 2.11982 12.6666C1.30649 12.6666 0.666486 13.3866 0.786486 14.1866C1.43982 18.1866 4.63982 21.32 8.66649 21.8933V24.6666C8.66649 25.4 9.26649 26 9.99982 26C10.7332 26 11.3332 25.4 11.3332 24.6666V21.8933C15.3598 21.32 18.5598 18.1866 19.2132 14.1866C19.3465 13.3866 18.6932 12.6666 17.8798 12.6666Z"
            fill="white"
          />
        </svg>
      </div>
    </div>
  );
};

export default AudioPlayerCard;

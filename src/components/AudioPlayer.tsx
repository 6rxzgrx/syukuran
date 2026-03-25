"use client";

import { useEffect, useRef, useState } from "react";
import { IoIosPlayCircle } from "react-icons/io";
import { MdOutlinePauseCircleFilled } from "react-icons/md";

type AudioPlayerProps = {
  src: string;
  isActive: boolean;
};

export function AudioPlayer({ src, isActive }: AudioPlayerProps) {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio || !src) return;
    audio.src = src;
    if (isActive) {
      audio
        .play()
        .then(() => setIsPlaying(true))
        .catch(() => setIsPlaying(false));
    }
  }, [isActive, src]);

  if (!isActive || !src) return null;

  const toggle = () => {
    const audio = audioRef.current;
    if (!audio) return;
    if (audio.paused) {
      audio
        .play()
        .then(() => setIsPlaying(true))
        .catch(() => setIsPlaying(false));
    } else {
      audio.pause();
      setIsPlaying(false);
    }
  };

  return (
    <>
      <audio ref={audioRef} loop preload="auto" />
      <button
        type="button"
        onClick={toggle}
        className="fixed bottom-6 right-6 z-50 flex h-12 w-12 items-center justify-center rounded-full border border-[#b18b62] bg-white/80 text-2xl text-[#6d5f50] shadow-lg backdrop-blur transition hover:bg-[#b18b62] hover:text-white"
        aria-label={isPlaying ? "Pause music" : "Play music"}
      >
        {isPlaying ? <MdOutlinePauseCircleFilled /> : <IoIosPlayCircle />}
      </button>
    </>
  );
}

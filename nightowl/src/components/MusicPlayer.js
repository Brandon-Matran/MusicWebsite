import React, { useState, useEffect, useRef } from "react";
import MusicControls from "./MusicControls";
import "./MusicPlayer.css";

export const MusicPlayer = ({ tracks }) => {
  const [trackIndex, setTrackIndex] = useState(0);
  const [trackProgress, setTrackProgress] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);

  const { title, artist, color, image, audioSrc } = tracks[trackIndex];
  const audioRef = useRef(new Audio(audioSrc));
  const intervalRef = useRef();
  const isReady = useRef(false);
  //destructure for conciseness
  const { duration } = audioRef.current;
  const toPrevTrack = () => {
    console.log("ToDO go to prev");
  };
  const toNextTrack = () => {
    console.log("ToDO go to next");
  };

  return (
    <div className="audio-player">
      <div className="track-info">
        <img
          className="artwork"
          src={image}
          alt={`track artwork for ${title} by ${artist}`}
        />
        <h2 className="title">{title}</h2>
        <h3 className="artist">{artist}</h3>
        <MusicControls
          isPlaying={isPlaying}
          onPrevClick={toPrevTrack}
          onNextClick={toNextTrack}
          onPlayPauseClick={setIsPlaying}
        />
      </div>
    </div>
  );
};

import React from "react";
import { ReactComponent as Play } from "../assets/play.svg";
import { ReactComponent as Prev } from "../assets/prev.svg";
import { ReactComponent as Pause } from "../assets/pause.svg";
import { ReactComponent as Next } from "../assets/next.svg";
import './MusicControl.css'

const MusicControls = ({
  isPlaying,
  onPlayPauseClick,
  onPrevClick,
  onNextClick,
}) => (
  <div className="audio-controls">
    <button
      type="button"
      className="prev"
      onClick={onPrevClick}
      aria-label="Prev"
    >
      <Prev />
    </button>
    {isPlaying ? (
      <button
        type="button"
        className="pause"
        onClick={() => onPlayPauseClick(false)}
        aria-label="Pause"
      >
        <Pause />
      </button>
    ) : (
      <button
        type="button"
        className="play"
        onClick={() => onPlayPauseClick(true)}
        aria-label="Play"
      >
        <Play />
      </button>
    )}
    <button type="button" className="next" onClick={onNextClick}>
      <Next />
    </button>
  </div>
);

export default MusicControls;

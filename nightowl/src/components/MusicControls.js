import React from 'react';
import { ReactComponent as Play} from '../assets/play.png'

const MusicControls = ({
  isPlaying,
  onPlayPauseClick,
  onPrevClick,
  onNextClick,
}) => (
  <div className="audio-controls">
    {/* <button
      type="button"
      className="prev"
      aria-label="Previous"
      onClick={onPrevClick}
    >
      <Prev />
    </button> */}
    <button
    type="button"
    className="play"
    onClick={() => onPlayPauseClick(true)}
    aria-label="Play">
        <Play />
    </button>
  </div>
);

export default MusicControls;

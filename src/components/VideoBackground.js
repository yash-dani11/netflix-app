import React from "react";
import { EMBED_VIDEO_ENPOINT } from "../utils/constants";
import useTrailer from "../hooks/useTrailer";
import { useSelector } from "react-redux";

const VideoBackground = ({ movieId }) => {
  useTrailer(movieId);
  const youtubeId = useSelector(store =>store.movies?.mainTrailerVideo);
  return (
    <div className="h-screen w-screen">
      {youtubeId && (
        <iframe
          className="h-full w-full"
          src={`${EMBED_VIDEO_ENPOINT}${youtubeId}?autoplay=1&mute=1&controls=0&showinfo=0`}
        ></iframe>
      )}
    </div>
  );
};

export default VideoBackground;

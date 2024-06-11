import React from "react";
import { EMBED_VIDEO_ENDPOINT } from "../utils/constants";
import useTrailer from "../hooks/useTrailer";
import { useSelector } from "react-redux";

const VideoBackground = ({ movieId }) => {
  useTrailer(movieId);
  const youtubeId = useSelector(store =>store.movies?.mainTrailerVideo);
  return (
    <div className="w-screen">
      {youtubeId && (
        <iframe
          className="aspect-video w-screen"
          src={`${EMBED_VIDEO_ENDPOINT}${youtubeId}?autoplay=1&mute=1&controls=0&showinfo=0&loop=1`}
          title="YouTube Trailer"
        ></iframe>
      )}
    </div>
  );
};

export default VideoBackground;

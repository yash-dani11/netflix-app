import React from "react";
import { EMBED_VIDEO_ENDPOINT, nowPlaying } from "../utils/constants";
import useTrailer from "../hooks/useTrailer";
import { useSelector } from "react-redux";

const VideoBackground = ({ movieId }) => {
  useTrailer(movieId,nowPlaying);
  const youtubeId = useSelector(store =>store.movies?.trailerList[nowPlaying]?.[movieId]);
  return (
    <div className="relative pb-[56.25%] pt-6 w-[300%] left-[-100%]">
      {youtubeId && (
        <iframe
          className="absolute top-0 left-0 w-full h-full"
          src={`${EMBED_VIDEO_ENDPOINT}${youtubeId}?autoplay=1&mute=1&controls=0&loop=1&${youtubeId}`}
          title="YouTube Trailer"
        ></iframe>
      )}
    </div>
  );
};

export default VideoBackground;

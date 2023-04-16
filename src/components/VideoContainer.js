import React, { useEffect, useState } from "react";
import { POPULAR_VIDEO_URL } from "../constants/endpint";
import VideoCard from "./VideoCard";
import { Link } from "react-router-dom";
const VideoContainer = () => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    getVideos();
  }, []);

  const getVideos = async () => {
    const data = await fetch(POPULAR_VIDEO_URL);
    const json = await data.json();
    setVideos(json.items);
  };
  return (
    <div className="flex flex-wrap overflow-auto h-[100vh]">
      {videos.length > 0 &&
        videos.map((video) => (
          <Link key={video.id} to={"/watch?v=" + video.id}>
            <VideoCard info={video} />
          </Link>
        ))}
    </div>
  );
};

export default VideoContainer;

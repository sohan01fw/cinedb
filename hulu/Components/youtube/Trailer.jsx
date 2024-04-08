import { useEffect, useState } from "react";
import YouTube from "react-youtube";
import { API_KEY } from "../../utils/request";

export default function Trailer() {
  const [videoId, setVideoId] = useState(null);

  useEffect(() => {
    fetch()
      .then((response) => response.json())
      .then((data) => {
        // Assuming the first video is the trailer
        const trailer = data.videos.results[0];

        if (trailer && trailer.site === "YouTube") {
          setVideoId(trailer.key);
        }
      });
  }, []);

  if (!videoId) {
    return <div>Loading...</div>;
  }

  return <YouTube videoId={videoId} />;
}

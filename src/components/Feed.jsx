import React, { useContext, useEffect } from "react";

import { Context } from "../context/contextApi";
import LeftNav from "./LeftNav";
import VideoCard from "./VideoCard";

const Feed = () => {
  const { loading, searchResults } = useContext(Context);
  const arr = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
    22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40,
  ];

  useEffect(() => {
    document.getElementById("root").classList.remove("custom-h");
  }, []);

  return (
    <div className="flex flex-row h-[calc(100%-56px)]">
      <LeftNav />
      <div className="grow w-[calc(100%-240px)] h-full overflow-y-auto bg-black">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 p-5">
          {searchResults.map((item) => {
            if (item.type !== "video") return false;
            return <VideoCard key={item?.video?.videoId} video={item?.video} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default Feed;

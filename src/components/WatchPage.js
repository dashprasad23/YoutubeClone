import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { closeMenu } from "../utils/appSlice";
import { useSearchParams } from "react-router-dom";
import CommentsContainer from "./CommentsContainer";

const WatchPage = () => {
  const [searchParams] = useSearchParams();
  const id = searchParams.get("v");

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(closeMenu());
  }, []);

  return (
    <div>
      <div className="px-5">
        <iframe
          width="1022"
          height="575"
          src={"https://www.youtube.com/embed/" + id}
          title="Nirmala Sitharaman arrives in US to attend Spring Annual Meetings of IMF-World Bank"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>
      </div>
      <CommentsContainer />
    </div>
  );
};

export default WatchPage;

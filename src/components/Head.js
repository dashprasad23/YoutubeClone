import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleMenu } from "../utils/appSlice";
import { YOUTUBE_SEARCH_API } from "../constants/endpint";
import { cacheSearch } from "../utils/searchSlice";

const Head = () => {
  const [searchQuery, setSerachQuery] = useState("");
  const [searchSugsestations, setSearchSugsestation] = useState([]);
  const [showSugestation, setShowSugestation] = useState(false);
  const searchCache = useSelector(store => store.search)
  const dispatch = useDispatch();
  useEffect(() => {
    let timer = setTimeout(() => {
      if(searchCache[searchQuery]) {
         setSearchSugsestation(searchCache[searchQuery]);
      } else {
        getSuggeSearchSugsestation();
      }
    }, 200);

    return () => {
      clearTimeout(timer);
    };
  }, [searchQuery]);

  const getSuggeSearchSugsestation = async () => {
    const data = await fetch(YOUTUBE_SEARCH_API + searchQuery);
    const json = await data.json();
    setSearchSugsestation(json[1]);
    dispatch(cacheSearch({[searchQuery]: searchSugsestations}))
  };

  const toggleMenuHandler = () => {
    dispatch(toggleMenu());
  };
  return (
    <div className="grid grid-flow-col p-4 shadow-md">
      <div className="flex col-span-1">
        <button onClick={toggleMenuHandler}>
          <i className="las la-bars ml-2 text-[30px]"></i>
        </button>
        <i className="lab la-youtube ml-2 text-red-600 text-[30px]"></i>
        <p className="text-lg font-bold">YouTube</p>
      </div>
      <div className="search-container col-span-10">
        <div className="flex  justify-center">
          <input
            type="text"
            className="w-1/2 border-2 border-gray-300  rounded-l-full p-2"
            value={searchQuery}
            onFocus={() => {
              setShowSugestation(true);
            }}
            onBlur={() => {
              setShowSugestation(false);
            }}
            onChange={(e) => setSerachQuery(e.target.value)}
          />
          <button className="text-center bg-gray-300 p-2 rounded-r-full">
            <i className="las la-search"></i>
          </button>
        </div>
        {showSugestation && (
          <div className="shadow-lg rounded-md fixed w-[40%] mx-[17%] bg-white p-2">
            <ul>
              {searchSugsestations.map((searhName, i) => (
                <li className="p-2" key={i}>
                  {" "}
                  <i className="las la-search"></i> {searhName}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
      <div className="flex col-span-1">
        <i className="las la-user-circle text-[30px]"></i>
      </div>
    </div>
  );
};

export default Head;

import React from "react";
import { Link } from "react-router-dom";
import DropDown from "./Dropdown";
function HorizontalCards({ data }) {
  return (
      

      <div className="w-[100%] h-[60vh] flex overflow-y-hidden pb-3 ">
        {data.map((d, i) => (
          <Link to={`/${d.media_type}/detail/${d.id}`} key={i} className="min-w-[20%] h-full bg-zinc-900 mr-5">
            <img
              className="w-full h-[50%] object-fill object-center"
              src={`https://image.tmdb.org/t/p/original/${
                d.backdrop_path || d.poster_path
              }`}
              alt=""
            />
            <h1 className=" text-xl font-semibold text-white p-2">
              {d.name || d.title || d.original_name || d.original_title}
            </h1>
            <p className="mt-3 text-white mb-3 p-2">
              {d.overview.slice(0, 100)}...
              <span className="text-zinc-300">more</span>{" "}
            </p>
          </Link>
        ))}
      </div>
  );
}

export default HorizontalCards;

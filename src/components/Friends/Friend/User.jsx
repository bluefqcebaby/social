import dolboeb from "../../../img/friedns/dolboeb.jpg";
import { Link } from "react-router-dom";

export default function User({ avatar, name, desc, followed, clickHandler, id }) {
  const link = `/social/profile/${id}`
  return (
    <div className="h-[158px] flex p-3 gap-4 border w-[450px]">
      <div className="">
        <Link to={link}>
          <img
            src={avatar ? avatar : dolboeb}
            alt="ava"
            className="h-[80px] rounded-full aspect-square mx-auto"
          />
        </Link>
        <button
          className="p-2 text-white bg-indigo-700 w-[100px] mt-3 rounded-lg"
          onClick={clickHandler}
        >
          {followed ? "Unfollow" : "Follow"}
        </button>
      </div>
      <div className="flex-1 flex-shrink-0 max-h-full max-w-full">
        <Link
          className="text-indigo-700 font-bold text-lg font-anton"
          to={link}
        >
          {name}
        </Link>
        <p className="text-gray-800 w-[300px] truncate">{desc}</p>
      </div>
    </div>
  );
}

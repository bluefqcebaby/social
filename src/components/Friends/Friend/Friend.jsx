export default function Friend({
  avatar,
  name,
  desc,
  city,
  followed,
  clickHandler,
}) {
  return (
    <div className="h-auto flex p-3 gap-4">
      <div className="">
        <img
          src={avatar}
          alt="ava"
          className="h-[80px] rounded-full aspect-square mx-auto"
        />
        <button
          className="p-2 text-white bg-indigo-700 w-[100px] mt-3 rounded-lg"
          onClick={clickHandler}
        >
          {followed ? "Follow" : "Unfollow"}
        </button>
      </div>
      <div className="flex-1 flex-shrink-0">
        <a className=" text-indigo-700 font-bold text-lg font-anton" href="/">
          {name}
        </a>
        <p className="text-gray-800 max-w-[300px]">{desc}</p>
      </div>
      <p className="text-lg">{city}</p>
    </div>
  );
}

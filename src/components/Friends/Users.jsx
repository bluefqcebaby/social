import User from "./Friend/User";
import { Loader } from "@mantine/core";
import { Link } from "react-router-dom";

export default function Users({
  users,
  isLoad,
  pagination,
  activePage,
  apiToggleFollow,
  error,
  buttonDisabled,
}) {
  if (error) {
    return (
      <div className='mx-auto '>
        <p className='text-xl mb-2'>
          Something <span className='text-indigo-700 font-bold'>Wrong</span> Happen
        </p>
        <p className='text-xl mb-2'>Try again in a few minutes</p>
      </div>
    );
  }
  const usersElement = users?.map(f => (
    <User
      key={f.id}
      name={f.name}
      desc={f.status}
      avatar={f.photos.small}
      followed={f.followed}
      apiToggleFollow={() => apiToggleFollow(f.id, f.followed)}
      id={f.id}
      buttonDisabled={buttonDisabled}
    />
  ));
  const paginationElements = pagination.range.map((num, index) => {
    if (num !== "dots") {
      return (
        <Link
          key={index}
          to={`/social/users/${num}`}
          onClick={() => pagination.setPage(num)}
          className={`p-1 border-2 rounded-md ${
            num === activePage ? "bg-indigo-700 text-white" : ""
          } min-w-[40px] h-[40px] flex items-center justify-center select-none cursor-pointer`}
        >
          {num}
        </Link>
      );
    } else {
      return (
        <p className={"text-xl text-black select-none"} key={index}>
          {". . ."}
        </p>
      );
    }
  });
  return users === null ? (
    <Loader color={"violet"} className={"m-4"} />
  ) : (
    <div className='min-w-[50%] flex flex-col gap-2 relative'>
      {isLoad && (
        <div className='absolute w-full h-full bg-white/40 flex justify-end transition-colors'>
          <Loader color={"violet"} className={"m-4"} />
        </div>
      )}
      <div className='grid grid-cols-2 gap-1 grid-rows-4 min-h-[644px]'>
        {usersElement}
      </div>
      <div className='flex mx-auto gap-3'>{paginationElements}</div>
    </div>
  );
}

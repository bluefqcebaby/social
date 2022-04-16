import { NavLink } from "react-router-dom";

export default function Dialog({ name, id, avatar, lastMessage }) {
  return (
    <NavLink
      className={({ isActive }) => (isActive ? "bg-slate-200" : "hover:bg-slate-200 ")}
      to={`/messages/${id}`}
    >
      <div className='flex gap-3 max-w-full py-3 px-2 overflow-hidden'>
        <img src={avatar} alt='avatar' className='rounded-xl h-[50px]' />
        <div className='max-w-[160px]'>
          <h2 className=' text-lg font-medium'>{name}</h2>
          <p className='text-ellipsis text-base whitespace-nowrap overflow-hidden text-gray-600'>
            {lastMessage}
          </p>
        </div>
      </div>
    </NavLink>
  );
}

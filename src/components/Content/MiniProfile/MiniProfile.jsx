import { useState } from "react";
import dolboeb from "../../../img/friedns/dolboeb.jpg";

export default function MiniProfile({
  avatar,
  name,
  desc,
  ownerProfile,
  status,
  setStatus,
}) {
  const [statusEdit, setStatusEdit] = useState(false);
  const [editStatusValue, setEditStatusValue] = useState(status || "");
  let statusClassNames = "";
  if (ownerProfile && status === null) {
    statusClassNames = "opacity-70 ";
  }
  const clickHandler = () => {
    setStatusEdit(prev => !prev);
  };

  const submitStatus = () => {
    if (status !== editStatusValue) setStatus(editStatusValue);
    setStatusEdit(false);
  };

  const inputOnChange = e => {
    const { value } = e.target;
    setEditStatusValue(value);
  };

  return (
    <article className='content-block h-full'>
      <div className='flex gap-4'>
        <img
          src={avatar ? avatar : dolboeb}
          alt='avatar'
          className='w-32 object-cover rounded-xl'
        />
        <div>
          <p className='whitespace-nowrap text-xl font-medium text-neutral-800'>{name}</p>
          {statusEdit ? (
            <div className='flex gap-3'>
              <input
                type='text'
                id='statusInput'
                className='border shadow outline-none px-2 text-base'
                maxLength={100}
                value={editStatusValue}
                onBlur={clickHandler}
                onChange={inputOnChange}
              />
              <button
                className='bg-indigo-700 text-white px-2 shadow'
                onClick={submitStatus}
              >
                Save
              </button>
            </div>
          ) : (
            <p
              className={`whitespace-nowrap text-sm font-medium text-neutral-800 ${
                ownerProfile ? "hover:bg-slate-200 cursor-pointer " : ""
              } ${statusClassNames}`}
              onClick={ownerProfile ? clickHandler : undefined}
            >
              {status ? status : ownerProfile ? "change status" : ""}
            </p>
          )}
        </div>
      </div>
      <div className='mt-3 flex items-center gap-2'>
        <p className=' text-base whitespace-nowrap'>About me</p>
        <span className='w-full h-[1px] bg-slate-300 mt-[1px]'></span>
      </div>
      <p className='mt-1 text-sm text-gray-600'>
        {desc ? desc : "User doesnt add description"}
      </p>
    </article>
  );
}

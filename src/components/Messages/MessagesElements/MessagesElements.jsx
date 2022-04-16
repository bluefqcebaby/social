import ava from "../../../img/avatar.jpg";
import {IoSend} from "react-icons/io5";
import {IconContext} from "react-icons";
import Message from "../Message/Message";



export default function MessagesElements({messages, newMessageText, onSubmitHandler, keyDownHandler, onChangeHandler}) {
  const messagesElements = messages.map(m => <Message text={m.text}/>)
  return (
    <div className='flex-[2] content-block flex flex-col'>
      <div className='flex gap-3 h-[60px] mb-3'>
        <img src={ava} alt='' className='rounded-full max-w-[60px]'/>
        <div>
          <h2 className='text-2xl font-open font-semibold'>Name</h2>
          <p>Was online 3d ago :(</p>
        </div>
      </div>
      <div className='border border-b-0 flex-auto p-4'>{messagesElements}</div>
      <div className='border px-6 py-4'>
        <form className='flex items-center justify-between' onSubmit={onSubmitHandler}>
          <textarea
            value={newMessageText}
            onKeyDown={keyDownHandler}
            onChange={onChangeHandler}
            className='resize-none h-[25px] outline-none w-full overflow-hidden'
            placeholder='Write message📝'
          />
          <button>
            <IconContext.Provider value={{className: "text-indigo-500 h-7 w-7"}}>
              <IoSend/>
            </IconContext.Provider>
          </button>
        </form>
      </div>
    </div>
  );
}

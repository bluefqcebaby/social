import {
  addPostActionCreator,
  postTextChangeActionCreator,
} from "../../../../redux/reducers/profile-reducer";

export default function CreateNewPost({submitHandler, newPostText, handleChange}) {
  return (
    <form className='content-block group flex flex-col' onSubmit={submitHandler}>
      <textarea
        placeholder='New post ✏️'
        className='w-full transition resize-none outline-none h-24 focus:transition-all focus:border-b-[1px]'
        value={newPostText}
        onChange={handleChange}
      />
      <button className='mt-3 float-right p-2 bg-indigo-500 text-white rounded-2xl transition hover:bg-indigo-600 '>
        Publish
      </button>
    </form>
  );
}

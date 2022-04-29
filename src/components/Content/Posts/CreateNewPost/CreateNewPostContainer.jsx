import CreateNewPost from "./CreateNewPost";
import {useDispatch, useSelector} from "react-redux";
import {addPost, postTextChange} from "../../../../redux/slices/profileSlice";


export default function CreateNewPostContainer(){

  const inputText = useSelector(store => {
    return store.profilePage.newPostText
  })
  const dispatch = useDispatch();

  const onTextChange = (e) => {
    const elem = e.target;
    const action = postTextChange(elem.value);
    dispatch(action);
  }

  const submitHandler = (e) => {
    e.preventDefault();
    const action = addPost();
    dispatch(action);
  }

  return (
    <CreateNewPost newPostText={inputText} handleChange={onTextChange} submitHandler={submitHandler}/>
  )
}

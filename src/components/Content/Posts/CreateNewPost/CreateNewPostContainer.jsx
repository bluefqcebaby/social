import {
  addPostActionCreator,
  postTextChangeActionCreator,
} from "../../../../redux/reducers/profile-reducer";
import CreateNewPost from "./CreateNewPost";
import {useSelector, useDispatch} from "react-redux";


export default function CreateNewPostContainer(){

  const inputText = useSelector(store => {
    return store.profilePage.newPostText
  })
  const dispatch = useDispatch();

  const onTextChange = (e) => {
    const elem = e.target;
    const action = postTextChangeActionCreator(elem.value);
    dispatch(action);
  }

  const addPost = (e) => {
    e.preventDefault();
    const action = addPostActionCreator();
    dispatch(action);
  }

  return (
    <CreateNewPost newPostText={inputText} handleChange={onTextChange} submitHandler={addPost}/>
  )
}

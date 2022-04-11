import {
  addPostActionCreator,
  postTextChangeActionCreator,
} from "../../../../redux/reducers/profile-reducer";
import CreateNewPost from "./CreateNewPost";
import {connect} from "react-redux";
const mapStateToProps = state => ({
  newPostText: state.profilePage.newPostText,
});

const mapDispatchToProps = dispatch => ({
  submitHandler: (e) => {
    e.preventDefault();
    const action = addPostActionCreator();
    dispatch(action);
  },
  handleChange: (e) => {
    const elem = e.target;
    const action = postTextChangeActionCreator(elem.value);
    dispatch(action);
  }
})

const CreateNewPostContainer = connect(mapStateToProps, mapDispatchToProps)(CreateNewPost);

export default CreateNewPostContainer;
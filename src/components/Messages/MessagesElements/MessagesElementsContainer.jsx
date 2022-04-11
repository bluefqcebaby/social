import {
  newMessageTextActionCreator,
  addMessageActionCreator,
} from "../../../redux/reducers/message-reducer";
import MessagesElements from "./MessagesElements";
import {connect} from "react-redux";

const mapStateToProps = state => ({
  messages: state.messagesPage.messages,
  newMessageText: state.messagesPage.newMessageText,
});

const mapDispatchToProps = dispatch => ({
  onChangeHandler: (e) => {
    const {value} = e.target;
    dispatch(newMessageTextActionCreator(value));
  },
  onSubmitHandler: (e) => {
    if (e) {
      e.preventDefault();
    }
    dispatch(addMessageActionCreator());
  },
  keyDownHandler: e => {
    if (e.key === "Enter") {
      this.onSubmitHandler();
    }
  }
})


const MessagesElementsContainer = connect(mapStateToProps, mapDispatchToProps)(MessagesElements)
export default MessagesElementsContainer
import { newMessageTextAC, addMessageAC } from "../../../redux/reducers/message-reducer";
import MessagesElements from "./MessagesElements";
import { connect, useDispatch, useSelector } from "react-redux";

export default function MessagesElementsContainer() {
  const { messages, newMessageText } = useSelector(state => state.messagesPage);

  const dispatch = useDispatch();

  const onChangeHandler = e => {
    const { value } = e.target;
    dispatch(newMessageTextAC(value));
  };

  const onSubmitHandler = e => {
    if (e) {
      e.preventDefault();
    }
    dispatch(addMessageAC());
  };

  const keyDownHandler = e => {
    if (e.key === "Enter") {
      onSubmitHandler();
    }
  };

  return (
    <MessagesElements
      messages={messages}
      newMessageText={newMessageText}
      keyDownHandler={keyDownHandler}
      onChangeHandler={onChangeHandler}
      onSubmitHandler={onSubmitHandler}
    />
  );
}

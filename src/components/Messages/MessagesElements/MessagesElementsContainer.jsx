import MessagesElements from "./MessagesElements";
import { useDispatch, useSelector } from "react-redux";
import { messageTextChange, addMessage } from "../../../redux/slices/messagesSlice";

export default function MessagesElementsContainer() {
  const { messages, newMessageText } = useSelector(state => state.messagesPage);

  const dispatch = useDispatch();

  const onChangeHandler = e => {
    const { value } = e.target;
    dispatch(messageTextChange(value));
  };

  const onSubmitHandler = e => {
    if (e) {
      e.preventDefault();
    }
    dispatch(addMessage());
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

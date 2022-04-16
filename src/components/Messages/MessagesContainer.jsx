import {useSelector} from "react-redux";
import Messages from "./Messages";

export default function MessagesContainer() {
  const dialogsData = useSelector(state => state.messagesPage.dialogs);
  return <Messages dialogsData={dialogsData}/>
}

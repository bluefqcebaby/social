import Message from "./Message/Message";
import Dialog from "./Dialog/Dialog";
import DialogsElements from "./DialogsElements/DialogsElements";
import MessagesElements from "./MessagesElements/MessagesElements";
import MessagesElementsContainer from "./MessagesElements/MessagesElementsContainer";


export default function Messages({ store }) {
  const dialogsData = store.getState().messagesPage.dialogs;
  return (
    <article className='flex gap-3 w-full h-[875px]'>
        <DialogsElements data={dialogsData}/>
        <MessagesElementsContainer store={store}/>
    </article>
  );
}

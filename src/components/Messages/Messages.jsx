import Message from "./Message/Message";
import Dialog from "./Dialog/Dialog";
import DialogsElements from "./DialogsElements/DialogsElements";
import MessagesElements from "./MessagesElements/MessagesElements";
import MessagesElementsContainer from "./MessagesElements/MessagesElementsContainer";


export default function Messages({dialogsData}) {
  return (
    <article className='flex gap-3 w-full h-[875px]'>
        <DialogsElements data={dialogsData}/>
        <MessagesElementsContainer/>
    </article>
  );
}

import Dialog from "../Dialog/Dialog";


export default function DialogsElements({ data }) {
  const dialogsElements = data.map(d => (
    <Dialog name={d.name} id={d.id} avatar={d.avatar} lastMessage={d.lastMessage} />
  ));
  return (
    <div className='flex-[1] flex flex-col content-block'>
      <div className='p-4'>
        <h2 className='text-4xl font-open font-semibold'>Messages</h2>
      </div>
      <div className='flex-col flex border-t overflow-y-auto pt-2'>{dialogsElements}</div>
    </div>
  );
}

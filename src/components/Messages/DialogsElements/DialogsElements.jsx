import Dialog from "../Dialog/Dialog";
import styled from "styled-components";

const Title = styled.h2`
  font-size: 20px;
  font-family: "Open Sans", "sans-serif";
  font-weight: 500;
`

export default function DialogsElements({ data }) {
  const dialogsElements = data.map(d => (
    <Dialog name={d.name} id={d.id} avatar={d.avatar} lastMessage={d.lastMessage} />
  ));
  return (
    <div className='flex-[1] flex flex-col content-block'>
      <div className='p-4'>
        <Title className='text-4xl font-open font-semibold'>Messages</Title>
      </div>
      <div className='flex-col flex border-t overflow-y-auto pt-2'>{dialogsElements}</div>
    </div>
  );
}

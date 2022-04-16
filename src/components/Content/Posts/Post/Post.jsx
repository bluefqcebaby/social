export default function Post({ avatar, text }) {
  return (
    <article className='content-block mt-5'>
      <div className='flex gap-3'>
        <img src={avatar} alt='avatar' className='w-14 h-14 object-cover rounded-full' />
        <p>{text}</p>
      </div>
    </article>
  );
}

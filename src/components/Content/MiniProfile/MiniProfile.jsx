import dolboeb from "../../../img/friedns/dolboeb.jpg"

export default function MiniProfile({ avatar, name, desc }) {
  return (
    <article className='content-block h-full'>
      <div className='flex gap-4'>
        <img src={avatar ? avatar : dolboeb} alt='avatar' className='w-32 object-cover rounded-xl' />
        <div className=''>
          <p className='whitespace-nowrap text-xl font-medium text-neutral-800'>
            {name}🥱
          </p>
          <p className='whitespace-nowrap text-sm font-medium text-neutral-800'>
            Kaizukoni orawa naru
          </p>
        </div>
      </div>
      <div className='mt-3 flex items-center gap-2'>
        <p className=' text-base whitespace-nowrap'>About me</p>
        <span className='w-full h-[1px] bg-slate-300 mt-[1px]'></span>
      </div>
      <p className='mt-1 text-sm text-gray-600'>{desc ? desc : "User doesnt add description 😢"}</p>
    </article>
  );
}

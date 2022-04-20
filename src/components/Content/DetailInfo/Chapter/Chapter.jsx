const Chapter = ({ name }) => {
  return (
    <div className="flex items-center gap-2 relative">
      <p className="text-lg font-bold z-10 p-1 bg-white mx-auto">{name}</p>
      <span className="absolute w-full h-[2px] bg-slate-300 mt-[1px]"></span>
    </div>
  );
};
export default Chapter;
import logo from "../../img/wt.png";

const Header = () => {
  return (
    <header className='bg-white shadow-2xl'>
      <div className='container py-1 flex items-center gap-5'>
        <img src={logo} alt='' className=' w-10' />
        <p className='font-rubik tracking-widest text-4xl text-blue-400 logo-shadow font-semibold pb-2'>
          WorldTalk
        </p>
      </div>
    </header>
  );
};
export default Header;

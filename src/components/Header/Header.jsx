import { Link } from "react-router-dom";
import logo from "../../img/wt.png";
import Logo from "../CommonComponents/Logo";

const Header = ({ id, name, isAuth }) => {
  return (
    <header className=' bg-white shadow-2xl '>
      <div className='container flex justify-between items-center'>
        <div className='py-1 flex items-center gap-5'>
          <img src={logo} alt='' className=' w-10' />
          <Logo />
        </div>
        <div className=''>
          <p className='text-xl'>
            Hello, {isAuth ? <Name name={name} id={id} /> : "guest"}
          </p>
        </div>
      </div>
    </header>
  );
};
const Name = ({ name, id }) => {
  return (
    <Link className='text-indigo-700' to={`/social/profile/${id}`}>
      {name}
    </Link>
  );
};
export default Header;

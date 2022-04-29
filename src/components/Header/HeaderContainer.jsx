import Header from "./Header";
import { useSelector} from "react-redux";

const HeaderContainer = () => {
  const {id, login, isAuth} = useSelector(state => state.auth)
  return <Header id={id} name={login} isAuth={isAuth}/>;
};
export default HeaderContainer;

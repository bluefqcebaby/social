import Header from "./Header";
import { useEffect } from "react";
import axios from "axios";
import {useDispatch, useSelector} from "react-redux";
import { setAuthAC } from "../../redux/reducers/auth-reducer";
import {changeProfileAC} from "../../redux/reducers/aside-reducer";

const HeaderContainer = () => {
  const dispatcher = useDispatch();
  const setAuth = (id = null, name = null, email = null, auth) => {
    dispatcher(setAuthAC(id, name, email, auth));
  };
  const {id, name, isAuth} = useSelector(state => state.auth)
  useEffect(() => {
    const apiCall = async () => {
      const response = await axios.get(
        "https://social-network.samuraijs.com/api/1.0/auth/me",
        {
          withCredentials: true,
        }
      );
      if (response.data.resultCode === 0) {
        const { id, login, email } = response.data.data;
        setAuth(id, login, email, true);
        dispatcher(changeProfileAC(id));
      } else{
        setAuth(null, null, null,false)
      }
    };
    apiCall();
  }, []);

  return <Header id={id} name={name} isAuth={isAuth}/>;
};
export default HeaderContainer;

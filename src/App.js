import { BrowserRouter, Route, Routes } from "react-router-dom";
import News from "./components/News/News";
import Groups from "./components/Groups/Groups";
import Games from "./components/Games/Games";
import Help from "./components/Help/Help";
import Music from "./components/Music/Music";
import ContentContainer from "./components/Content/ContentContainer";
import MessagesContainer from "./components/Messages/MessagesContainer";
import UsersContainer from "./components/Friends/UsersContainer";
import MainTemplate from "./components/MainTemplate/MainTemplate";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchAuthInfo } from "./redux/slices/authSlice";
import Landing from "./components/Landing/Langing";

export default function App({}) {
  const { isAuth } = useSelector(state => state.auth);
  const [isLoad, setIsLoad] = useState(true);
  const dispatcher = useDispatch();
  useEffect(() => {
    const api = async () => {
      await dispatcher(fetchAuthInfo());
      setIsLoad(false);
    };
    api();
  }, []);
  if (isLoad) {
    // some sort of loader
    return;
  }
  return (
    <BrowserRouter>
      <Routes>
        {isAuth ? (
          <Route path='/social' element={<MainTemplate />}>
            <Route path='profile/:userId' element={<ContentContainer />} />
            <Route path='news' element={<News />} />
            <Route path='messages/*' element={<MessagesContainer />} />
            <Route path='music' element={<Music />} />
            <Route path='users/:pageNum' element={<UsersContainer />} />
            <Route path='groups' element={<Groups />} />
            <Route path='games' element={<Games />} />
            <Route path='help' element={<Help />} />
          </Route>
        ) : (
          <Route path='/social' element={<Landing />}></Route>
        )}
      </Routes>
    </BrowserRouter>
  );
}

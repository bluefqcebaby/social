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
import Users from "./components/Friends/Users";

export default function App({}) {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="social" element={<MainTemplate />}>
          <Route path="profile/:userId" element={<ContentContainer />} />
          <Route path="news" element={<News />} />
          <Route path="messages/*" element={<MessagesContainer />} />
          <Route path="music" element={<Music />} />
          <Route path="users" element={<UsersContainer />} >
            <Route path=":pageNum" element={<Users/>}/>
          </Route>
          <Route path="groups" element={<Groups />} />
          <Route path="games" element={<Games />} />
          <Route path="help" element={<Help />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

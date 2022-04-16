import Header from "./components/Header/Header";
import Aside from "./components/Aside/Aside";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import News from "./components/News/News";
import Groups from "./components/Groups/Groups";
import Games from "./components/Games/Games";
import Help from "./components/Help/Help";
import Music from "./components/Music/Music";
import ContentContainer from "./components/Content/ContentContainer";
import MessagesContainer from "./components/Messages/MessagesContainer";
import FriendsContainer from "./components/Friends/FriendsContainer";
import AsideContainer from "./components/Aside/AsideContainer";

export default function App({}) {
  return (
    <BrowserRouter>
      <Header />
      <main className='pt-4 bg-[#f7f8fa] pb-52'>
        <div className='container'>
          <div className='flex gap-2'>
            <AsideContainer/>
            <Routes>
              <Route path='/profile' element={<ContentContainer />} />
              <Route path='/news' element={<News />} />
              <Route path='/messages/*' element={<MessagesContainer />} />
              <Route path='/music' element={<Music />} />
              <Route path='/friends' element={<FriendsContainer />} />
              <Route path='/groups' element={<Groups />} />
              <Route path='/games' element={<Games />} />
              <Route path='/help' element={<Help />} />
            </Routes>
          </div>
        </div>
      </main>
    </BrowserRouter>
  );
}


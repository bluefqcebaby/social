import Header from "./components/Header/Header";
import Aside from "./components/Aside/Aside";
import Content from "./components/Content/Content";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import News from "./components/News/News";
import Friends from "./components/Friends/Friends";
import Groups from "./components/Groups/Groups";
import Games from "./components/Games/Games";
import Help from "./components/Help/Help";
import Music from "./components/Music/Music";
import Messages from "./components/Messages/Messages";

function App({store}) {
  const state = store.getState();
  return (
    <BrowserRouter>
      <Header />
      <main className='pt-4 bg-[#f7f8fa] pb-52'>
        <div className='container'>
          <div className='flex gap-2'>
            <Aside aside={state.aside} />
            <Routes>
              <Route
                path='/profile'
                element={<Content store={store} />}
              />
              <Route path='/news' element={<News />} />
              <Route
                path='/messages/*'
                element={<Messages store={store} />}
              />
              <Route path='/music' element={<Music />} />
              <Route path='/friends' element={<Friends />} />
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

export default App;

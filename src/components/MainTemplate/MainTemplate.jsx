import { Outlet } from "react-router-dom";
import AsideContainer from "../Aside/AsideContainer";
import HeaderContainer from "../Header/HeaderContainer";
import MainScreen from "../CommonComponents/MainScreen";

export default function MainTemplate({}) {
  return (
    <>
      <HeaderContainer />
      <MainScreen>
        <div className='flex gap-2'>
          <AsideContainer />
          <Outlet />
        </div>
      </MainScreen>
    </>
  );
}

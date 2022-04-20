import { Outlet } from "react-router-dom";
import Header from "../Header/Header";
import AsideContainer from "../Aside/AsideContainer";
import HeaderContainer from "../Header/HeaderContainer";

export default function MainTemplate({}) {
  return (
    <>
      <HeaderContainer />
      <main className="pt-4 bg-[#f7f8fa] pb-52">
        <div className="container">
          <div className="flex gap-2">
            <AsideContainer />
            <Outlet />
          </div>
        </div>
      </main>
    </>
  );
}

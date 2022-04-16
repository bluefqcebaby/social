import { useSelector } from "react-redux";
import Aside from "./Aside";

export default function AsideContainer() {
  const menuItems = useSelector(state => state.aside.menuItems);
  return (
    <Aside menuItems={menuItems}/>
  );
}

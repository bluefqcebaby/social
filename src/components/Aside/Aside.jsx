import MenuItem from "./MenuItem/MenuItem";
import { CgProfile } from "react-icons/cg";
import { BiHelpCircle, BiNews } from "react-icons/bi";
import { SiGooglemessages } from "react-icons/si";
import { ImMusic } from "react-icons/im";
import { BsPeopleFill } from "react-icons/bs";
import { HiUserGroup } from "react-icons/hi";
import { RiGamepadFill } from "react-icons/ri";
const menuItems = [
  { id: 1, text: "Profile", logo: <CgProfile /> },
  { id: 2, text: "News", logo: <BiNews /> },
  { id: 3, text: "Messages", logo: <SiGooglemessages /> },
  { id: 4, text: "Music", logo: <ImMusic /> },
  { id: 5, text: "Friends", logo: <BsPeopleFill /> },
  { id: 6, text: "Groups", logo: <HiUserGroup /> },
  { id: 7, text: "Games", logo: <RiGamepadFill /> },
  { id: 8, text: "Help", logo: <BiHelpCircle /> },
];

export default function Aside({ routes }) {
  const menuItemsElements = menuItems.map(({ id, text, logo }, index) => (
    <MenuItem key={id} text={text} logo={logo} route={routes[index].route} />
  ));
  return (
    <aside className="w-40 text-xl text-zinc-700">
      <nav>{menuItemsElements}</nav>
    </aside>
  );
}

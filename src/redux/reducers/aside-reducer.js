import {CgProfile} from "react-icons/cg";
import {BiHelpCircle, BiNews} from "react-icons/bi";
import {SiGooglemessages} from "react-icons/si";
import {ImMusic} from "react-icons/im";
import {BsPeopleFill} from "react-icons/bs";
import {HiUserGroup} from "react-icons/hi";
import {RiGamepadFill} from "react-icons/ri";

const initialState = {
    menuItems: [
        {
            text: "Profile",
            logo: <CgProfile />,
            route: "/profile",
        },
        {
            text: "News",
            logo: <BiNews />,
            route: "/news",
        },
        {
            text: "Messages",
            logo: <SiGooglemessages />,
            route: "/messages",
        },
        {
            text: "Music",
            logo: <ImMusic />,
            route: "/music",
        },
        {
            text: "Friends",
            logo: <BsPeopleFill />,
            route: "/friends",
        },
        {
            text: "Groups",
            logo: <HiUserGroup />,
            route: "/groups",
        },
        {
            text: "Games",
            logo: <RiGamepadFill />,
            route: "/games",
        },
        {
            text: "Help",
            logo: <BiHelpCircle />,
            route: "/help",
        },
    ],
}

const AsideReducer = (state = initialState, action) => state;
export default AsideReducer;

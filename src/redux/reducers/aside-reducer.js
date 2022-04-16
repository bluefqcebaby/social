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
            id: 1,
            text: "Profile",
            logo: <CgProfile />,
            route: "/profile",
        },
        {
            id: 2,
            text: "News",
            logo: <BiNews />,
            route: "/news",
        },
        {
            id: 3,
            text: "Messages",
            logo: <SiGooglemessages />,
            route: "/messages",
        },
        {
            id: 4,
            text: "Music",
            logo: <ImMusic />,
            route: "/music",
        },
        {
            id: 5,
            text: "Friends",
            logo: <BsPeopleFill />,
            route: "/friends",
        },
        {
            id: 6,
            text: "Groups",
            logo: <HiUserGroup />,
            route: "/groups",
        },
        {
            id: 7,
            text: "Games",
            logo: <RiGamepadFill />,
            route: "/games",
        },
        {
            id: 8,
            text: "Help",
            logo: <BiHelpCircle />,
            route: "/help",
        },
    ],
}

const AsideReducer = (state = initialState, action) => state;
export default AsideReducer;

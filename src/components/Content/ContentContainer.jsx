import {useSelector} from "react-redux";
import Content from "./Content";

export default function ContentContainer() {
  const state = useSelector(state => state.profilePage);
  return <Content data={state}/>
}

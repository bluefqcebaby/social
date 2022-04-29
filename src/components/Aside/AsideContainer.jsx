import {useSelector} from "react-redux";
import Aside from "./Aside";

export default function AsideContainer() {
  const routes = useSelector(state => state.aside.routes);

  return (
    <Aside routes={routes}/>
  );
}

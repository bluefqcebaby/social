import {useDispatch, useSelector} from "react-redux";
import Content from "./Content";
import {useEffect} from "react";
import axios from "axios";
import {updateUserAC} from "../../redux/reducers/profile-reducer";
import {useParams} from "react-router-dom";

export default function ContentContainer() {
  const state = useSelector(state => state.profilePage.profileInfoAPI);
  const dispatch = useDispatch();
  const updateUser = (user) => {
    dispatch(updateUserAC(user))
  }
  let { userId } = useParams();
  useEffect(()=>{
      const apiCall = async () => {
        const response = await axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${userId}`)
        updateUser(response.data)
      }
      apiCall()
  },[])
  return <Content data={state} />
}

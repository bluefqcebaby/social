import { useDispatch, useSelector } from "react-redux";
import { setFriendsAC, toggleFollowAC } from "../../redux/reducers/friends-reducer";
import Friends from "./Friends";

export default function FriendsContainer() {
  const friendList = useSelector(state => state.friendsPage.friends);
  const dispatch = useDispatch();
  const toggleFollow = id => {
    dispatch(toggleFollowAC(id));
  };
  const getFriends = (friends) => {
    dispatch(setFriendsAC(friends))
  }
  return <Friends toggleFollow={toggleFollow} friends={friendList} getFriends={getFriends}/>;
}

import Friend from "./Friend/Friend";
import axios from "axios";

export default function Friends({ friends, toggleFollow, getFriends }) {
  if (friends.length === 3) {
    axios
      .get("https://social-network.samuraijs.com/api/1.0/users")
      .then((response) => getFriends(response.data.items))
  }
  const friendsElements = friends.map((f) => (
    <Friend
      key={f.id}
      name={f.name}
      desc={f.description}
      city={f.city}
      avatar={f.photo}
      followed={f.followed}
      clickHandler={() => toggleFollow(f.id)}
    />
  ));
  return (
    <div className="min-w-[50%] flex flex-col gap-2">{friendsElements}</div>
  );
}

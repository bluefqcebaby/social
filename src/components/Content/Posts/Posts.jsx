import CreateNewPost from "./CreateNewPost/CreateNewPost";
import Post from "./Post/Post";
import CreateNewPostContainer from "./CreateNewPost/CreateNewPostContainer";
function Posts({ avatar, posts}) {
  const postsElements = posts.map(p => <Post avatar={avatar} text={p.text} />);
  return (
    <div className='w-2/3'>
      <CreateNewPostContainer/>
      {postsElements.reverse()}
    </div>
  );
}

export default Posts;

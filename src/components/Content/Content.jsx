import MiniProfile from "./MiniProfile/MiniProfile";
import CreateNewPostContainer from "./Posts/CreateNewPost/CreateNewPostContainer";
import DetailInfo from "./DetailInfo/DetailInfo";

export default function Content({ data }) {
  if (data === null) {
    return <h1>Pending...</h1>;
  }
  const {
    fullName,
    aboutMe,
    photos,
    lookingForAJob,
    lookingForAJobDescription,
    contacts,
  } = data;
  // const bannersElements = banners.map((b) => (
  //   <img alt="banner" src={b} className="h-60 object-cover rounded-lg" />
  // ));
  return (
    <section className="w-full font-open flex flex-col gap-5">
      <MiniProfile name={fullName} desc={aboutMe} avatar={photos.small} />
      <div className="flex gap-5">
        {/*<Posts avatar={avatar} posts={data.posts} />*/}
        <CreateNewPostContainer />
        <DetailInfo
          lookingForAJob={lookingForAJob}
          lookingForAJobDescription={lookingForAJobDescription}
          contacts={contacts}
          largePhoto={photos.large}
        />
      </div>
    </section>
  );
}

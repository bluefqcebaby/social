import CreateNewPostContainer from "./Posts/CreateNewPost/CreateNewPostContainer";
import DetailInfo from "./DetailInfo/DetailInfo";
import { Loader } from "@mantine/core";
import MiniProfileContainer from "./MiniProfile/MiniProfileContainer";
export default function Content({
  setStatus,
  data,
  profileLoading,
  ownerProfile,
  status,
}) {
  if (data === null || profileLoading) {
    return <Loader color='violet' />;
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
    <section className='w-full font-open flex flex-col gap-5'>
      <MiniProfileContainer
        name={fullName}
        desc={aboutMe}
        avatar={photos.small}
        ownerProfile={ownerProfile}
        status={status}
        setStatus={setStatus}
      />
      <div className='flex gap-5'>
        {/* {<Posts avatar={avatar} posts={data.posts} />} */}
        {ownerProfile && <CreateNewPostContainer />}
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

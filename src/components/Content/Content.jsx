import MiniProfile from "./MiniProfile/MiniProfile";
import Posts from "./Posts/Posts";

export default function Content({ data }) {
  const { name, description, avatar, banners } = data.profileInfo;
  const bannersElements = banners.map((b) => (
    <img alt="banner" src={b} className="h-60 object-cover rounded-lg" />
  ));
  return (
    <section className="w-full font-open flex flex-col gap-5">
      <MiniProfile name={name} desc={description} avatar={avatar} />
      <div className="flex gap-5">
        <Posts avatar={avatar} posts={data.posts} />
        <div className="flex flex-col gap-5">{bannersElements}</div>
      </div>
    </section>
  );
}

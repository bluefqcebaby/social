import ContentBlock from "../../CommonComponents/ContentBlock";
import Chapter from "./Chapter/Chapter";

export default function DetailInfo({
  lookingForAJob,
  contacts,
  lookingForAJobDescription,
}) {
  const emoji = lookingForAJob ? "✅" : "❌";
  const contactsInfo = [];
  for (let [key, value] of Object.entries(contacts)) {
    contactsInfo.push({ socialMediaName: key, link: value });
  }
  const contactsElements = contactsInfo
    .filter((e) => e.link)
    .map((c) => (
      <p>
        <span className="font-semibold">
          {c.socialMediaName[0].toUpperCase() + c.socialMediaName.slice(1)}
        </span>
        :{` ${c.link}`}
      </p>
    ));
  return (
    <ContentBlock className="flex-[1] h-min">
      <Chapter name={"Job"} />
      <p className="text-xl text-center">
        Hiring:<span className="text-2xl">{emoji}</span>{" "}
      </p>
      <p className="text-lg text-center">{lookingForAJobDescription ?? "User doesnt add job description"}</p>
      <Chapter name={"Contacts"} />
      {contactsElements.length === 0 ? "User doesnt add contacts" : contactsElements}
    </ContentBlock>
  );
}


import photo from "../../../assets/photo/Pirates_cat.png";
import HobbyList from "../Hobby/HobbyList";
import LangueList from "../Langue/LangueList";

const PersonalInformation = () => {
  return (
    <div className="rounded-md bg-white h-full p-2">
      <img src={photo} className="rounded-full" />
      <p className="text-black mt-2 mx-auto mb-0 font-thin text-center">Cat Sparrow</p>
<p  className="italic font-thin text-xs text-center ">Cat'pitaine Pattoune</p>
      <div className="border-t w-8 mx-auto"></div>
      <LangueList />
      <HobbyList />
    </div>
  );
};

export default PersonalInformation;

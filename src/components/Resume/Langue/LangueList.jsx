import { language } from "../../../data/language";
import Langue from "./Langue";

const LangueList = () => {
  return (
    <div className=" m-0 ">
      <p className="text-xs mt-4 font-thin">Langues</p>
      {language.map((e, i) => {
        return <Langue key={i} langue={e} />;
      })}
      <div className="border-t w-8 mt-4 mx-auto"></div>
    </div>

  );
};

export default LangueList;

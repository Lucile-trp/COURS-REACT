import { experiences } from "../../../data/experience";
import Experiences from "../Experience/Experience";

const ExperienceList = () => {
  return (
    <div className="m-2 p-2 h-1/4 bg-white rounded-md">
      <p className="text-black">Experiences</p>
      <ul>
        {experiences.map((e, i) => {
          return <Experiences key={i} props={e} />;
        })}
      </ul>
    </div>
  );
};

export default ExperienceList;

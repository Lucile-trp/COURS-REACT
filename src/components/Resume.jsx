import PersonalInformation from "./Resume/CV/PersonalInformation";
import FormationList from "./Resume/CV/FormationList";
import ExperienceList from "./Resume/CV/ExperienceList";
import Abstract from "./Resume/CV/Abstract";
import SkillList from "./Resume/CV/SkillList";


const Resume = () => {
  return (
    <div className="bg-neutral-100 w-4/5 h-full flex mx-auto rounded-md border drop-shadow-2">
      <div className="w-56 my-4 ml-4">
        <PersonalInformation />
      </div>
      <div className="m-4 w-full">
        <Abstract />
        <FormationList />
        <ExperienceList />
        <SkillList />
      </div>
    </div>
  );
};

export default Resume;

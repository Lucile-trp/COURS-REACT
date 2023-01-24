import Skill from "../Skill/Skill";
import { skill } from "../../../data/skill";

const SkillList = () => {
  return (
    <div className="m-2 p-2 h-1/4 bg-white rounded-md">
      <p className="text-black mb-2">Compétences</p>
      <ul>
        {skill.map((e, i) => {
          return <Skill key={i} skill={e} />;
        })}
      </ul>
    </div>
  );
};

export default SkillList;

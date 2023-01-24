const Skill = (props) => {
  return (
    <div className="flex items-center">
      <p className="text-xs font-thin m-0 italic">{props.skill.name}</p>
    </div>
  );
};

export default Skill;

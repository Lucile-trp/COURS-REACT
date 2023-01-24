import { formations } from "../../../data/formation";
import Formation from "../Formation/Formation";

const FormationList = () => {
  return (
    <div className="m-2 p-2 h-1/4 bg-white rounded-md">
      <p className="text-black">Formations</p>
      <ul>
        {formations.map((e, index) => {
          return <Formation key={index} props={e} />;
        })}
      </ul>
    </div>
  );
};

export default FormationList;

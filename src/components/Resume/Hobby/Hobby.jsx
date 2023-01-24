const Hobby = (props) => {

  return (
    <div className="m-1">
      <img src={props.hobby.img} className="w-8 h-8"></img>
      <li className="text-xs font-light list-none">{props.hobby.name}</li>
    </div>
  );
};

export default Hobby;

const Experiences = (props) => {

  return (
    <div className="flex m-0 items-center">
      <p className="text-sm m-0 font-light"> {props.props.name}  - <span className="italic text-xs">{props.props.bateau}</span> <span className="text-xs font-thin m-0 mx-2 bg-green-400 rounded-md px-2">{props.props.duration}</span></p>
    </div>
  );
};

export default Experiences;

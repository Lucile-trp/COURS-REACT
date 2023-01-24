const Langue = (props) => {
    return (
      <div className="m-2 flex items-center">
        <img src={props.langue.img} className="w-6 h-6 mr-2"></img>
        <p className="text-xs m-0">{props.langue.name}</p>
      </div>
    );
  };
  
  export default Langue;
  
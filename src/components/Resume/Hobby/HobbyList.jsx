import { hobby } from "../../../data/hobby";
import Hobby from "./Hobby";
import { useContext, useEffect, useState } from "react";
import ModalHobby from "./Modal";
import {Context} from "../../Context";

import { useSelector, useDispatch } from 'react-redux'
import { increment } from '../counter/counterSlice'


function ContainerButton({setShow }) {
  return (
    <div className="">
      <ButtonList
        setShow={setShow}
      />
    </div>
  );
}

function ButtonList({ setShow }) {
  return (
    <div className="">
      <AddButton
        setShow={setShow}
      />
    </div>
  );
}

function AddButton({setShow }) {
  const[context, setContext] = useContext(Context);
  const count = useSelector((state) => state.counter.value)
  const dispatch = useDispatch()

  return (
    <div>
      <div
        className="w-8 h-8 bg-green-500 flex justify-center align-center rounded-md"
        onClick={() => setShow(true)}
      >
        <p className="text-white text-md">+</p>
      </div>
      {/* <div
        className="w-8 h-8 bg-green-500 flex justify-center align-center rounded-md my-2"
        onClick={() => setContext(context + 1)}
      >
        <p className="text-white text-lg">{context}</p>
      </div> */}
      <div
        className="w-8 h-8 bg-green-500 flex justify-center align-center rounded-md my-2"
        onClick={() => dispatch(increment())}
      >
        <p className="text-white text-lg">{count}</p>
      </div>
    </div>
  );
}

const HobbyList = () => {
  const [show, setShow] = useState(false);
  const [context] = useContext(Context);
  const [list, setList] = useState(hobby)
  // const [list, setList] = useState(() => {
  //   const saved = localStorage.getItem("hobby")
  //   const initialeValue = JSON.parse(saved)
  //   console.log(initialeValue, hobby)
  //   return initialeValue || hobby;
    
  // }) 

  // const countIncrement = (x) => {
  //   setCounter(counter + x);
  // };

  const updateList = (value, url) => {
    setList([...list, { name: value, img: url }]);
    setShow(false);
    // const _list = list.concat({name: value, img: url})
    // console.log(_list)
    // localStorage.setItem('hobby', JSON.Stringify(_list))

  };

  return (
    <div>
      {show && <ModalHobby setShow={setShow} updateList={updateList}/>}

      <div className=" mt-4">
        <p className="text-xs mb-2 font-thin">HoobyList</p>
        <div className="flex">
          {list.map((e, i) => {
            return <Hobby key={i} hobby={e} />;
          })}
        </div>
        <div className="flex">
          <ContainerButton
            setShow={setShow}
          />
          <h3 className="ml-4"></h3>
        </div>
      </div>
    </div>
  );
};

export default HobbyList;

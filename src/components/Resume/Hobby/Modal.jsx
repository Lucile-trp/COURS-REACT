import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import {useState} from 'react';

const ModalHobby = ({setShow, updateList}) => {
    const [text, setText] = useState();
    const [url, setUrl] = useState();

  return (
    <div className="absolute top-0 left-0 w-screen h-screen bg-white/50 flex items-center justify-center backdrop-blur-sm">
      <div
        className="bg-white w-1/3 h-1/3 rounded-lg border p-2"
        //   style={{ display: 'block', position: 'initial' }}
      >
        <Modal.Dialog>
          <Modal.Header closeButton onClick={() => setShow(false)}>
            <Modal.Title>Ajouter un Hobby</Modal.Title>
          </Modal.Header>

          <Modal.Body className="font-light text-xs">
            <p className="border-t py-2">Quel Hobby souhaitez vous ajouter ?</p>
            <label for="input-text" >nom</label>
            <input id="input-text"type="text" className="border rounded w-full my-2" onChange={(e) => setText(e.target.value)}></input>
            <label for="input-url">url</label>
            <input id="input-url" type="url" className="border rounded w-full my-2" onChange={(e) => setUrl(e.target.value)}/>
          </Modal.Body>

          <Modal.Footer className=" w-full">
            <Button  variant="danger" className="mx-2" onClick={() => setShow(false)}>Close</Button>
            <Button variant="primary" onClick={()=> updateList(text, url)}>Save changes</Button>
          </Modal.Footer>
        </Modal.Dialog>
      </div>
    </div>
  );
};

export default ModalHobby;

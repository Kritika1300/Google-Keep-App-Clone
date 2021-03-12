import React from 'react';
import "./index.css";
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
import { useState } from 'react';
const CreateNote = (props) => {
  const [note,setNote] = useState({
        title: " ",
        content: " ",
 });
  const InputEvent = (event) => {
      const {name,value} = event.target;
      setNote((prevData) =>{
          return ({
              ...prevData,
              [name]: value,
          });
      });
  };
  const addEvent = () => {
    props.passNote(note);
    setNote({
        title: " ",
        content: " ",
 });
  };
  return (
  <>
  <div className = "main_note">
      <form>
          <input type = "text" 
          value = {note.title} 
          placeholder ="Title" 
          name = "title"
          autoComplete= "off" 
          onChange = {InputEvent} />
          <textarea 
          rows = " " column = " "
          placeholder = "Write a note..."
          value= {note.content}
          name = "content"
          onChange = {InputEvent}></textarea>
          <Button>
            <AddIcon className = "plus_sign" onClick = {addEvent}/>
          </Button>
      </form>
  </div>
  </>
  );
}
export default CreateNote;

import React from 'react';
import "./index.css";
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
import { useState } from 'react';
const CreateNote = (props) => {
  const [expand,setExpand] = useState(false);
  const [note,setNote] = useState({
        title: " ",
        content: " ",
 });
  const InputEvent = (event) => {
      const {name,value} = event.target;
      setNote((prevData) =>{
          return {
              ...prevData,
              [name]: value,
          }
      });
  };
  const addEvent = () => {
    props.passNote(note);
    setNote({
        title: " ",
        content: " ",
 });
  };
  const expandIt = () =>{
      setExpand(true);
  }
  const btoNormal = () =>{
    setExpand(false);
  }
  return (
  <>
  <div className = "main_note"  onDoubleClick = {btoNormal}>
      <form>
       {expand?
          <input type = "text" 
          value = {note.title} 
          onChange = {InputEvent}
          placeholder ="Title" 
          name = "title"
          autoComplete= "off" 
          /> : null}
          <textarea 
          rows = " " column = " "
          onChange = {InputEvent}
          placeholder = "Write a note..."
          value= {note.content}
          name = "content"
          onClick = {expandIt}
          ></textarea>
          {expand?
          <Button onClick = {addEvent}>
            <AddIcon className = "plus_sign" />
          </Button>: null}
      </form>
  </div>
  </>
  );
}
export default CreateNote;

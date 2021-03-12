import React from 'react';
import "./index.css";
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
import { useState } from 'react';
const CreateNote = () => {
  const [note,setNote] = useState({
      title: " ",
      content: " ",
  });
  return (
  <>
  <div className = "main_note">
      <form>
          <input type = "text" placeholder ="Title" autoComplete= "off" />
          <textarea rows = " " column = " " placeholder = "Write a note..."></textarea>
          <Button>
            <AddIcon className = "plus_sign"/>
          </Button>
      </form>
  </div>
  </>
  );
}
export default CreateNote;

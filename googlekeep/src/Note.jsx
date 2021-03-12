import React from 'react';
import "./index.css"
import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline';
const Note = () => {
  return (
  <>
  <div className = "note">
      <h1>title</h1>
      <br/>
      <p>This is the content</p>
      <button className ="btn">
      <DeleteOutlineIcon className = "deleteIcon" />
      </button>
  </div>
  </>
  );
}
export default Note;

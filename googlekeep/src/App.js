import React from 'react';
import Header from "./Header";
import Footer from "./Footer";
import CreateNote from "./CreateNote ";
import Note from './Note';
import { useState } from 'react';
const App = () => {
  const [addItem,setAddItem] = useState([]);
  const addNote = (note) =>{
    setAddItem((prevData) =>{
        return [...prevData,note];
    });
  } 
  const onDelete = (id) =>{
    setAddItem((oldData) => (
        oldData.filter((currdata ,indx) => indx !== id ))
    );
  }
  return (
  <div className="app">
    <Header/>
    <CreateNote passNote = {addNote} />
    <div className="notes">
   {addItem.map((val,index) => {
    return (
    <Note 
    key = {index} 
    id = {index} 
    title = {val.title} 
    content = {val.content}
    deleteItem = {onDelete} 
    />
    );
   })}
   </div>
  <Footer/>
  </div>
  );
}
export default App;

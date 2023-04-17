import React, { useState } from "react";
import Todolist from "./Todolist";
import AddRoundedIcon from '@mui/icons-material/AddRounded';
import Button from '@mui/material/Button';
import './index.css';
import Alert from '@mui/material/Alert';

function App() {

  const [inputValue, setinputValue] = useState("")
  const [Items, setItems] = useState([])

  const itemEvent = (event) => {
    setinputValue(event.target.value)
  }

  const listofItem = () => {
    inputValue ? setItems([...Items, inputValue]) :alert("BetiChod Kuch Likh")

    // setItems((oldItems) => {
    //   console.log(oldItems)
    //   return [...oldItems, inputValue]
    // });
    setinputValue("")
  };
  const deleteItem = (a) => {
    let updated = Items.filter((array, index) => {
      return index !== a
    })
    setItems(updated)

  }

  return (
    <>
      <div className="main">
        <div className="center">
          <br />
          <h1>To Do List</h1>
          <br />
          <input type="text" placeholder="Add a Item" value={inputValue} onChange={itemEvent} />
          <Button className="addButton" onClick={listofItem} variant="text">
            <AddRoundedIcon />
          </Button>
          <ol>
            {
              Items.map((itemval, index) => {
                return <Todolist id={index} key={index} delete={deleteItem} text={itemval} />
              })
            }
            
          </ol>
        </div>
      </div>

    </>
  )
}
export default App

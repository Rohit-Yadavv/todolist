import React from 'react'
import DeleteForeverTwoToneIcon from '@mui/icons-material/DeleteForeverTwoTone';
import Button from '@mui/material/Button';
export default function Todolist(props) {

    return (
        <>
            <div className="todo_style">

                <Button className='deleteButton' onClick={() => {
                    props.delete(props.id)
                }} ><DeleteForeverTwoToneIcon className='deleteIcon'/> </Button>
                <li>{props.text}</li>
            </div>
        </>
    )
}

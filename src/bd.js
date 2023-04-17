import React from 'react'
import { useState } from 'react'

export default function bd() {
    const [num, setNUm] = useState(0)

    useEffect(() => {
      alert("ckicked")
    });
    
    return (
        <button onClick={()=>{
            setNum(num++)
        }}>
        click me {num}
        </button>
    )
}

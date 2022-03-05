import React, { useRef, useState } from "react";

export default function TodoInput(props) {
    const [inputState, setInputState] = useState('')
    const refInput = useRef(inputState)
    return(
        <input ref={refInput} className="my-input" type="text" onChange={handler} value={inputState}/>
    )
    function handler() {
        setInputState(refInput.current.value)
        props.changer(refInput.current.value)
    }
}
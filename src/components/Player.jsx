import { useState } from "react"

export default function Player({initialName, symbol, isActive, onChangeName}){

    const [isEditing, setIsEditing] = useState(false)
    const [name, setName] = useState(initialName)

    function handleClick(){
        setIsEditing((editing)=>!editing)
        if(isEditing){
            onChangeName(symbol,name)
        }
    }

    function handleNameChange(event){
        setName(event.target.value)
    }

    let playerName =  <span id="player-name">{name}</span>
    let btnCaption = "Edit"

    if(isEditing){
        playerName = <input type="text" required value={name} onChange={handleNameChange}/>
        btnCaption="Save"
    }

    return(
        <li className={isActive? 'active': ""} >
        <span className="player">
            {playerName}
            <span id="player-symbol">{symbol}</span>
        </span>
        <button onClick={handleClick}>{btnCaption}</button>
      </li>
    )
}
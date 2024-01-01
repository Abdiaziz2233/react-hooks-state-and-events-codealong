import React, {useState} from "react";

function Toggle() {
  const [isON, seiIsOn] = useState(false)

  function handleClick (){
    seiIsOn((isON) => !isON)
  }

  const color = isON ? "green" : "red"

  return <button style={{ background: color }} onClick={handleClick}>{isON ? "ON" : "OFF"}</button>;
}

export default Toggle;

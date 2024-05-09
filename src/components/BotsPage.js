import React, {useEffect, useState} from "react";
import YourBotArmy from "./YourBotArmy";
import BotCollection from "./BotCollection";




function BotsPage() {
  
  const [bots,setBots]=useState([])

useEffect(()=>{
  fetch("http://localhost:3000/bots")
  .then(res=>res.json())
  .then(data=>setBots(data))
},[])

const updateBot=(id)=>{
  {
    setBots(bots.map(bot => id === bot.id ? {...bot, isAdded:true} : bot))
  }
}

const removeBot= (id)=>{
  {
    setBots(bots.map(bot => id === bot.id ? {...bot, isAdded:false} : bot))
  }
}
const deleteBot=(id) => {
  fetch(`http://localhost:3000/bots${id}`,{
  method:"DELETE"
}).then (() =>setBots ((previousData)=>previousData.filter(bot =>bot.id !== id)))
}
return (
    <div>
      <YourBotArmy bots={bots.filter(bot=>bot.isAdded)}
      handleClick={removeBot}
    handleDelete={deleteBot}
      
      />
      <BotCollection bots={bots}
     handleClick={updateBot}
    handleDelete={deleteBot}
     />
    </div>
  )
}

export default BotsPage;

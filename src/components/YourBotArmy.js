import React from "react";
import BotCard from "./BotCard";

function YourBotArmy({ bots, removeBot, deleteBot }) {
  // Define a function to handle removing the bot from the bot army
  const handleRemoveBot = (bot) => {
    // Call the removeBot function passed as a prop and pass the bot object as an argument
    removeBot(bot);
  };

  // Define a function to handle deleting the bot
  const handleDeleteBot = (bot) => {
    // Call the deleteBot function passed as a prop and pass the bot object as an argument
    deleteBot(bot);
  };

  // Map over the bots array and create a BotCard component for each bot
  const botArmy = bots.map((bot) => {
    return (
      // Create a BotCard component with the bot's ID as the key
      // Pass the bot object, handleRemoveBot function, and handleDeleteBot function as props
      <BotCard
        key={bot.id}
        bot={bot}
        clickEvent={handleRemoveBot}
        deleteBot={handleDeleteBot}
      />
    );
  });

  return (
    <div style={{ background: "olive" }}>
      {/* Define a div element that contains the BotCard components */}
      <div style={{ display: "flex", justifyContent: "center" }}>
        <div style={{ display: "flex", flexWrap: "wrap", maxWidth: "1000px" }}>
          {/* Render the BotCard components */}
          {botArmy}
        </div>
      </div>
    </div>
  );
}

export default YourBotArmy;
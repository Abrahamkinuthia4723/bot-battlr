import React from "react";
import BotCard from "./BotCard";

// Define the BotCollection component
function BotCollection({ bots, enlistBot, deleteBot }) {
  // Map over the bots array and create a BotCard component for each bot
  const botItems = bots.map((bot) => {
    return (
      // Create a BotCard component with the bot's ID as the key
      // Pass the bot object, enlistBot function, and deleteBot function as props
      <BotCard
        key={bot.id}
        bot={bot}
        enlistBot={enlistBot}
        deleteBot={deleteBot}
      />
    );
  });

  // Return a div element that contains the BotCard components
  // Use CSS grid layout to arrange the BotCard components in a grid
  return (
    <div style={{
      // Set the display property to grid
      display: "grid",
      // Set the grid template columns to repeat every 4 columns
      gridTemplateColumns: "repeat(4, 1fr)",
      // Add a gap of 1rem between the grid cells
      gap: "1rem"
    }}>
      {botItems}
    </div>
  );
}

export default BotCollection;
import React from "react";

const botTypeClasses = {
  Assault: "icon military",
  Defender: "icon shield",
  Support: "icon plus circle",
  Medic: "icon ambulance",
  Witch: "icon magic",
  Captain: "icon star",
};

function BotCard({ bot, enlistBot, deleteBot }) {
  // Define a function to handle enlisting the bot
  const handleEnlistBot = () => {
    // Call the enlistBot function passed as a prop and pass the bot object as an argument
    enlistBot(bot);
  };

  // Define a function to handle deleting the bot
  const handleDeleteBot = () => {
    // Call the deleteBot function passed as a prop and pass the bot object as an argument
    deleteBot(bot);
  };

  return (
    <div className="bot-card">
      {/* Define a div element that contains the bot's avatar and name */}
      <div style={{ cursor: "pointer" }} key={bot.id} onClick={handleEnlistBot}>
        {/* Define a div element that contains the bot's avatar */}
        <div>
          <img alt="OH NO!" src={bot.avatar_url} style={{ borderRadius: "50%" }} />
        </div>
        {/* Define a div element that contains the bot's name and class icon */}
        <div>
          <div>
            {bot.name}
            {/* Define an i element that displays the bot's class icon */}
            <i className={botTypeClasses[bot.bot_class]} />
          </div>
          {/* Define a div element that contains the bot's catchphrase */}
          <div style={{ maxWidth: "150px" }}>
            <small>{bot.catchphrase}</small>
          </div>
        </div>
        {/* Define a div element that contains the bot's health, damage, and armor */}
        <div>
          {/* Define a span element that displays the bot's health */}
          <span>
            <i className="icon heartbeat" />
            {bot.health}
          </span>
          {/* Define a span element that displays the bot's damage */}
          <span>
            <i className="icon lightning" />
            {bot.damage}
          </span>
          {/* Define a span element that displays the bot's armor */}
          <span>
            <i className="icon shield" />
            {bot.armor}
          </span>
          {/* Define a span element that contains the delete button */}
          <span>
            <div style={{ textAlign: "center" }}>
              {/* Define a button element that displays the delete button */}
              <button
                style={{ padding: "0", background: "none", border: "none", color: "red" }}
                onClick={(event) => {
                  event.stopPropagation();
                  handleDeleteBot();
                }}
              >
                x
              </button>
            </div>
          </span>
        </div>
      </div>
    </div>
  );
}

export default BotCard;
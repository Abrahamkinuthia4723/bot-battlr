import React from "react";

const botTypeClasses = {
  Assault: "icon military",
  Defender: "icon shield",
  Support: "icon plus circle",
  Medic: "icon ambulance",
  Witch: "icon magic",
  Captain: "icon star",
};

function BotSpecs({ bot }) {
  // Define a function to handle enlisting the bot
  const handleEnlistBot = () => {
    // Call the enlistBot function passed as a prop and pass the bot object as an argument
    enlistBot(bot);
  };

  return (
    <div style={{ margin: "1em" }}>
      {/* Define a div element that contains the bot's avatar */}
      <div style={{ display: "flex", justifyContent: "center" }}>
        <div style={{ width: "25%" }}>
          <img
            alt="oh no!"
            style={{ borderRadius: "50%", border: "3px solid black", width: "100%" }}
            src={bot.avatar_url}
          />
        </div>
        {/* Define a div element that contains the bot's name, class icon, and catchphrase */}
        <div style={{ width: "50%", marginLeft: "1em" }}>
          <h2>Name: {bot.name}</h2>
          <p>
            <strong>Catchphrase: </strong>
            {bot.catchphrase}
          </p>
          <strong>
            Class: {bot.bot_class}
            {/* Define an i element that displays the bot's class icon */}
            <i style={{ marginLeft: "1em" }} className={botTypeClasses[bot.bot_class]} />
          </strong>
          <br />
          {/* Define a div element that contains the bot's health, damage, and armor */}
          <div style={{ margin: "1em 0" }}>
            {/* Define a div element that contains the bot's health */}
            <div style={{ display: "flex", justifyContent: "center" }}>
              <div style={{ textAlign: "center", width: "33%" }}>
                {/* Define an i element that displays the bot's health */}
                <i style={{ fontSize: "3em", color: "red" }} className="icon circular heartbeat" />
                {/* Define a strong element that displays the bot's health */}
                <strong>{bot.health}</strong>
              </div>
              {/* Define a div element that contains the bot's damage */}
              <div style={{ textAlign: "center", width: "33%" }}>
                {/* Define an i element that displays the bot's damage */}
                <i style={{ fontSize: "3em", color: "yellow" }} className="icon circular lightning" />
                {/* Define a strong element that displays the bot's damage */}
                <strong>{bot.damage}</strong>
              </div>
              {/* Define a div element that contains the bot's armor */}
              <div style={{ textAlign: "center", width: "33%" }}>
                {/* Define an i element that displays the bot's armor */}
                <i style={{ fontSize: "3em", color: "blue" }} className="icon circular shield" />
                {/* Define a strong element that displays the bot's armor */}
                <strong>{bot.armor}</strong>
              </div>
            </div>
          </div>
          {/* Define a button element that displays the go back button */}
          <button
            style={{ marginBottom: "1em" }}
            onClick={() =>
              console.log("connect this to a function that shows all bots")
            }
          >
            Go Back
          </button>
          {/* Define a button element that displays the enlist button */}
          <button
            onClick={handleEnlistBot}
          >
            Enlist
          </button>
        </div>
      </div>
    </div>
  );
}

export default BotSpecs;
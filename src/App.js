import React, { useEffect, useState } from "react";
import './App.css';
import BotCollection from "./components/BotCollection";
import YourBotArmy from "./components/YourBotArmy";

// Define the App component
function App() {
  // Initialize state variables for bots, loading, and error
  const [bots, setBots] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Use the useEffect hook to fetch data when the component mounts
  useEffect(() => {
    // Define an async function to fetch data from the API
    async function fetchData() {
      try {
        // Fetch data from the API
        const response = await fetch(`http://localhost:3000/bots`);
        const data = await response.json();
        // Update the bots state with the fetched data
        setBots(data);
        // Set loading to false to indicate that the data has been loaded
        setLoading(false);
      } catch (error) {
        // Catch any errors that occur during data fetching
        setError(error.message);
        // Set loading to false to indicate that an error occurred
        setLoading(false);
      }
    }

    // Call the fetchData function
    fetchData();
  }, []);

  // Define a function to handle enlisting a bot
  const handleEnlistBot = (bot) => {
    // Update the bots state by setting the army property to true for the selected bot
    setBots(bots.map((b) => (b.id === bot.id ? { ...b, army: true } : b)));
  };

  // Define a function to handle removing a bot from the army
  const handleRemoveBot = (bot) => {
    // Update the bots state by setting the army property to false for the selected bot
    setBots(bots.map((b) => (b.id === bot.id ? { ...b, army: false } : b)));
  };

  // Define a function to handle deleting a bot
  const handleDeleteBot = async (bot) => {
    try {
      // Send a DELETE request to the API to delete the bot
      await fetch(`http://localhost:3000/bots/${bot.id}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        }
      });
      // Update the bots state by removing the deleted bot
      setBots(bots.filter((b) => b.id !== bot.id));
    } catch (error) {
      // Catch any errors that occur during bot deletion
      setError(error.message);
    }
  };

  // Render a loading message if the data is still loading
  if (loading) {
    return <div>Loading...</div>;
  }

  // Render an error message if an error occurred
  if (error) {
    return <div>Error: {error}</div>;
  }

  // Render the BotCollection and YourBotArmy components with the fetched data
  return (
    <div>
      <YourBotArmy
        bots={bots.filter((b) => b.army)}
        removeBot={handleRemoveBot}
        deleteBot={handleDeleteBot}
      />
      <BotCollection bots={bots} enlistBot={handleEnlistBot} deleteBot={handleDeleteBot} />
    </div>
  );
}

export default App;

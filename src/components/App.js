import React, { useState } from "react";
import ShoppingList from "./ShoppingList";
import itemData from "../data/items";

function App() {
  // replace 'false' with a state variable that can be toggled between true and false
  // this will be used for the Dark Mode Toggle feature
  const [darkMode, setDarkMode] = useState(false);

  function handleClick() {
    // call setDarkMode with the updated value using the function form of setState to ensure the latest value is used
    setDarkMode((prevState) => !prevState);
  }

  // Use darkMode instead of the hard-coded boolean value to set the appClass
  const appClass = darkMode ? "App dark" : "App light";

  return (
    <div className={appClass}>
      <header>
        <h2>Shopster</h2>
        {/* add an onClick handler to the Dark Mode button */}
        <button onClick={handleClick}>{darkMode ? "Light Mode" : "Dark Mode"}</button>
      </header>
      <ShoppingList items={itemData} />
    </div>
  );
}

export default App;
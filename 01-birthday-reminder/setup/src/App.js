import React, { useState } from "react";
import data from "./data";
import List from "./List";
function App() {
  const [people, setPeople] = useState(data);
  const [color, setColor] = useState("inherit");

  const changeThemecolor = () => {
    setColor("#fff");
  }
  return (
    <main style={{ background: `${color}` }}>
      <section className="container">
        <h3>{people.length} Birthdays Today</h3>
        <List people={people} color={color} />
        <button onClick={() => setPeople([])}>Clear All</button>
        <button onClick={() => changeThemecolor()}>Change Theme Color</button>
      </section>
    </main>
  );
}

export default App;

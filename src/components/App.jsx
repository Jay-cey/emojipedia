import React from "react";
import emoji from "../emojipedia";
import Build from "./Build";

function App() {
  return (
    <div>
      <h1>
        <span>emojipedia</span>
      </h1>
      <div className="dictionary">{emoji.map(Build)}</div>
    </div>
  );
}

export default App;

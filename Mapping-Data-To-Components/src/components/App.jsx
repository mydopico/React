import React from "react";
import Entry from "./Entry.jsx";
import emojipedia from "../emojipedia.js";

// 1 - Create Entry Component
// 2 - Create props to replace hardcoded data
// 3 - Import the emojipedia conts.
// 3b -Map through the emojipedia array and render Entry components

function createdEntry(emojiTerm) {
  return (
    <Entry
      id={emojiTerm.id}
      key={emojiTerm.id}
      emoji={emojiTerm.emoji}
      name={emojiTerm.name}
      meaning={emojiTerm.meaning}
    />
  );
}
function App() {
  return (
    <div>
      <h1>
        <span>emojipedia</span>
      </h1>
      <dl className="dictionary">{emojipedia.map(createdEntry)}</dl>
    </div>
  );
}

export default App;

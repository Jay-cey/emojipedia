import React from "react";
import Entry from "./Entry";

function createEmoji(entry) {
  return (
    <Entry
      key={entry.id}
      emoji={entry.emoji}
      name={entry.name}
      meaning={entry.meaning}
    />
  );
}

export default createEmoji;

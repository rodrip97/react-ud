import React from "react";

export default function Stats({ items }) {
  if (!items.length)
    return (
      <p className="stats">
        <em>Start Adding Items to Your List!! 🛄🛄🛄🛄</em>
      </p>
    );

  const numItems = items.length;
  const numPacked = items.filter((item) => item.packed).length;
  const percentage = Math.round((numPacked / numItems) * 100);

  return (
    <footer className="stats">
      <em>
        {percentage === 100
          ? "You have packed everything get ready !!! ✈️🌎"
          : `You have ${numItems} items on your list, and you already packed:
          ${numPacked} (${percentage}%)`}
      </em>
    </footer>
  );
}

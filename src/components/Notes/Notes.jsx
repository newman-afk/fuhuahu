import React, { useState } from "react";
import "./Notes.css";
import myNotes from "../../notes.txt";
import { useEffect } from "react";

const Notes = () => {
  const [notes, setNotes] = useState(null);
  const fetchNotes = async () => {
    const response = await fetch(myNotes);
    const result = await response.text();
    setNotes(result);
  };
  useEffect(() => {
    fetchNotes();
  }, []);
  return (
    <div className="notes container">
      <h1>Notes</h1>
      <p>{notes}</p>
    </div>
  );
};

export default Notes;

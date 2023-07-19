import React, { useState, useEffect, useCallback } from 'react';
import './Dialogues.css'

const Dialogues = () => {
  const [changed, setChanged] = useState("");

  const dialogues_arr = useCallback(() => {
    const dialogues = ["Hungry?", "Movie marathon?", "Late night at office?", "Unexpected guests?", "Cooking gone wrong?", "Game night?", "Craving food?"]
    setChanged(dialogues[(Math.floor(Math.random() * dialogues.length))])
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      dialogues_arr()
    }, 3000);
    return () => clearInterval(interval);
  }, [dialogues_arr]);

  return <p className='fade-in dialogue_display'>{changed}</p>
    
}

export default Dialogues



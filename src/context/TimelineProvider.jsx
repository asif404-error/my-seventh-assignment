import React, { createContext, useContext, useState } from 'react';

const TimelineContext = createContext();

export const TimelineProvider = ({ children }) => {
  const [interactions, setInteractions] = useState([]);
  return (
    <TimelineContext.Provider value={{ interactions, setInteractions }}>
      {children}
    </TimelineContext.Provider>
  );
};

export const useTimeline = () => useContext(TimelineContext);
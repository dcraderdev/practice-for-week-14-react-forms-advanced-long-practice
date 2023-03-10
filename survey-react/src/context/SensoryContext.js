import {createContext, useContext, useState} from 'react'


export const SensoryContext = createContext();

export const useSensory = () => useContext(SensoryContext);

export default function SensoryProvider({ children }) {
  const [themeMode, setThemeMode] = useState("dark"); //dark/light

  return (
    <SensoryContext.Provider
      value={{
        themeMode,
        setThemeMode
      }}
    >
      {children}
    </SensoryContext.Provider>
  );
}
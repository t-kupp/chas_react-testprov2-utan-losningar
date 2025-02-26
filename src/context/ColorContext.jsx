import { createContext, useState } from 'react';

export const ColorContext = createContext();

export default function ColorProvider({ children }) {
  const [color, setColor] = useState('');

  return <ColorContext.Provider value={{ color, setColor }}>{children}</ColorContext.Provider>;
}

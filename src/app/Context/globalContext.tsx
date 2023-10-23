'use client';
import { Dispatch, createContext, useContext, useState } from 'react';

interface IGlobalContextState {
  Tuser: { name: string; id: number };
  setUser: Dispatch<React.SetStateAction<IGlobalContextState['Tuser']>>;
}

const GlobalContext = createContext<IGlobalContextState>({
  Tuser: { name: '', id: 0 },
  setUser: () => {},
});

export const GlobalContextProvider: React.FC<{ children: React.ReactNode }> =
({ children }: { children: React.ReactNode }) => {
  const [Tuser, setUser] = useState<IGlobalContextState['Tuser']>({ name:'', id:0 });

  return (
  <GlobalContext.Provider value={{ Tuser, setUser }}>
  {children}
  </GlobalContext.Provider>
  );
};

export const useGlobalContext: () => IGlobalContextState = () => {
  const context = useContext(GlobalContext);

  if (!context) {
    throw new Error('useGlobalContext must be used inside a GlobalContextProvider');
  }

  return context;
};


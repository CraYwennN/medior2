// toto nemá v co dělat ve složce app, tady jsou stránky, které se renderují
'use client';
import { Dispatch, createContext, useContext, useState } from 'react';

// type TUser = { name: string; id: number };
interface IGlobalContextState {
  Tuser: { name: string; id: number }; // savedUser: TUser; Co je to T  v Tuser? Ta proměnná mi nedává žádný kontext
  setUser: Dispatch<React.SetStateAction<IGlobalContextState['Tuser']>>; // tady by snad stačilo (user: TUser) => void
}

const GlobalContext = createContext<IGlobalContextState>({
  Tuser: { name: '', id: 0 },
  setUser: () => {},
});

// interface IProps {
//   children: ReactNode;
// }

export const GlobalContextProvider: React.FC<{ children: React.ReactNode }> = // 1. React.FC => FC; 2. Zbytečné => viz IProps a návratový typ
({ children }: { children: React.ReactNode }) => { // ({ children }: IProps): ReactNode
  const [Tuser, setUser] = useState<IGlobalContextState['Tuser']>({ name:'', id:0 });  // useState<Tuser>

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

// Rozdělil bych to do tří souborů: createContext, GlobalContextProvider, useGlobalContext
// Název složky spíš GlobalContext, protože to je smyslem souborů ve složce

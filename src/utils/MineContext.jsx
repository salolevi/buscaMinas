import { useContext, createContext, useState } from "react"

const MineContext = createContext();

export function MineProvider ({children}) {

  const MINE_NUM = 5;
  const FLAGS_NUM = 5;

  const [gameState, setGameState] = useState({
    mines_num: MINE_NUM,
    flags_num: FLAGS_NUM,
    rows: 10,
    columns: 5
  })


  return <MineContext.Provider value={{gameState, setGameState}} >
    {children}
  </MineContext.Provider>
}

export function useMine () { return useContext(MineContext);}
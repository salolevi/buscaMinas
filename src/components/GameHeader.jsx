import { useMine } from "../utils/MineContext"
import { useEffect, useState } from "react"

export const GameHeader = () => {

  const {gameState} = useMine();
  const [timer, setTimer] = useState(0);

  useEffect(() => {
    const int = setInterval(() => {
      setTimer(prev => prev + 1);
    }, 1000)

    return () => clearInterval(int)
  }, [])

  return <header>
    <div className="timer">{timer}</div>
    <p>{gameState.mines_num ?? 0}</p>
  </header>
}
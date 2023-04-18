import { useState, useEffect} from "react"
import { useMine } from "../utils/MineContext"
import { Tile } from "./Tile";

export const GameBody = () => {
  const {rows, columns, mines_num} = useMine()?.gameState;
  const [totalSquares, setTotalSquares] = useState(rows * columns);

  const [squareArray, setSquareArray] = useState([])

  useEffect(() => {
    let minesPlanted;
    const MINE_PROB = mines_num/totalSquares;

    let sqA;
    while(minesPlanted !== mines_num) {
      minesPlanted = 0;
      sqA = new Array(totalSquares).fill(0).map(square => {
       const num = Math.random();
       if (num <= MINE_PROB && minesPlanted < mines_num)  {
         minesPlanted++;
        return 1;
      };
       return 0;
     })
    }
    setSquareArray(sqA); 
  }, [])
  
  const styles = {
    'display': 'grid',
    'grid-template-rows': `repeat(${rows}, 1fr)`,
    'grid-template-columns': `repeat(${columns}, 1fr)`,
    'gap': '10px'
  }


  
  return <section style={styles}>
    {squareArray.map((square, index) => <Tile row={Math.floor(index/rows)} column={Math.floor(index/columns)} mine={square} key={index}/>)}
  </section>
}
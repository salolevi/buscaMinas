import { GameBody } from "../components/GameBody";
import { GameHeader } from "../components/GameHeader";


export const Game = () => {

  const styles = {
    'background': '#333',
    'border-radius' : '8px',
    'box-shadow': '0px 0px 6px rgba(255 255 255 /.3)',
    'padding': '.5em 1.5em'
  }

  return <article style={styles}>
    <GameHeader />
    <GameBody />
  </article>
}

export const Tile = ({row, column, mine}) => {

  const styles = {
    'font-size': '1.1em'
  }
  return <button style={styles}>{mine}</button>
}
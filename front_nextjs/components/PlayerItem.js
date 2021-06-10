import react, { useState } from 'react'

const PlayerItem = ({ player }) => {
  const [count, setCount] = useState(player.nb)
  return (
    <tr>
      <td>{player.name}</td>
      <td>{player.nb}</td>
      <td>
        <button onClick={() => setCount(count + 1)}>+1</button>
      </td>
      <td>{count}</td>
    </tr>
  )
}

export default PlayerItem

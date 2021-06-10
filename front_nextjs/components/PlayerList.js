import PlayerItem from './PlayerItem'
import { useState } from 'react'

const PlayerList = ({ players }) => {
  const [value, setValue] = useState('')

  const onChange = event => {
    setValue(event.target.value)
  }

  return (
    <div>
      <input value={value} onChange={onChange}></input>
      {value}
      <table id='table'>
        <tbody>
          {players.map(player => (
            <PlayerItem key={player.id} player={player} />
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default PlayerList

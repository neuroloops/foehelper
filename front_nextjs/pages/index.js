import { server } from '../config'

import PlayerList from '../components/PlayerList'

export default function Home({ players }) {
  return (
    <div>
      <PlayerList players={players} />
    </div>
  )
}

export const getStaticProps = async () => {
  const res = await fetch(`${server}/api/players`)

  const players = await res.json()
  return {
    props: {
      players,
    },
  }
}

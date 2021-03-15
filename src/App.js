import React, { Fragment, useState } from 'react'
import Menu from './components/menu'
import Status from './components/status'
import Game from './components/game'
import servers from './data/servers'

function App () {
  const [level, setLevel] = useState(0)
  const [status, setStatus] = useState('round-select')
  const [server, setServer] = useState(servers[1].value)

  const startGame = (newLevel) => {
    setLevel(newLevel)
    setStatus('playing')
  }

  return (
    <main>
      <Menu level={level} changeLevel={startGame} server={server} setServer={setServer} />
      {status !== 'round-select'
        ? <Game level={level} />
        : <Fragment />}
      <Status status={status} />
      {status !== 'round-select'
        ? <p><i>Use q, w, e, a, s, d keys for move</i></p>
        : <Fragment />}
    </main>
  )
}

export default App

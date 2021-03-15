import React, { Fragment, useState } from 'react'
import Menu from './components/menu'
import Status from './components/status'
import Game from './components/game'
import servers from './data/servers'
import statuses from './data/statuses'

function App () {
  const [level, setLevel] = useState(0)
  const [status, setStatus] = useState(statuses.roundSelect)
  const [server, setServer] = useState(servers[1].value)
  const [cells, setCells] = useState([])

  const startGame = async (newLevel) => {
    setStatus(statuses.playing)
    await setLevel(newLevel)
    await setCells([])
    sendRequest(server, newLevel, [])
  }

  const sendRequest = (server, level, cells) => {
    fetch(server + '/' + level, {
      method: 'POST',
      body: JSON.stringify(cells)
    }).then(response => response.json())
      .then(data => setCells(data))
      .catch(() => setStatus(statuses.networkUnavailable))
  }

  return (
    <main>
      <Menu level={level} changeLevel={startGame} server={server} setServer={setServer} />
      {status.showArea
        ? <Game level={level} cells={cells} />
        : <Fragment />}
      <Status status={status} />
      {status.showArea
        ? <p><i>Use q, w, e, a, s, d keys for move</i></p>
        : <Fragment />}
    </main>
  )
}

export default App

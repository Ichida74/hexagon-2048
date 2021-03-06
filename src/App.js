import React, { Fragment, useState, useEffect, useCallback, useRef } from 'react'
import Menu from './components/menu'
import Status from './components/status'
import Game from './components/game'
import servers from './data/servers'
import statuses from './data/statuses'
import move from './services/movement'

function useEventListener (eventName, handler, element = window) {
  const savedHandler = useRef()

  useEffect(() => {
    savedHandler.current = handler
  }, [handler])

  useEffect(
    () => {
      const isSupported = element && element.addEventListener
      if (!isSupported) return

      const eventListener = event => savedHandler.current(event)

      element.addEventListener(eventName, eventListener)

      return () => {
        element.removeEventListener(eventName, eventListener)
      }
    },
    [eventName, element]
  )
}

function App () {
  const [level, setLevel] = useState(0)
  const [status, setStatus] = useState(statuses.roundSelect)
  const [server, setServer] = useState(servers[0].value)
  const [cells, setCells] = useState([])
  const [cellsCount, setCellsCount] = useState(0)

  const startGame = useCallback((newLevel) => {
    setStatus(statuses.playing)
    setLevel(newLevel)
    setCells([])
    sendRequestToRNGServer(newLevel, [])
  }, [server])

  const keyDownHandler = useCallback(
    (event) => {
      if (status.title === statuses.playing.title) {
        let afterMove = null

        switch (event.keyCode) {
          case 81:
            // q
            afterMove = move(cells, 'z', 'y', 'x', level)
            break

          case 87:
            // w
            afterMove = move(cells, 'x', 'y', 'z', level)
            break

          case 69:
            // e
            afterMove = move(cells, 'y', 'x', 'z', level)
            break

          case 65:
            // a
            afterMove = move(cells, 'y', 'z', 'x', level)
            break

          case 83:
            // s
            afterMove = move(cells, 'x', 'z', 'y', level)
            break

          case 68:
            // d
            afterMove = move(cells, 'z', 'x', 'y', level)
            break
        }

        if (afterMove && afterMove.hasMoved) {
          setCells(afterMove.newCells)
          sendRequestToRNGServer(level, afterMove.newCells)
        }
      }
    },
    [status, cells, level]
  )

  useEventListener('keydown', keyDownHandler)

  const sendRequestToRNGServer = useCallback((level, cells) => {
    fetch(server + '/' + level, {
      method: 'POST',
      body: JSON.stringify(cells)
    }).then(response => response.json())
      .then(newCells => setCells(cells.concat(newCells)))
      .catch(() => setStatus(statuses.networkUnavailable))
  }, [server, level])

  // ???????????????? ???? ?????????? ????????
  useEffect(() => {
    if (level && cells.length === cellsCount && !cells.some(cell => {
      // ?????????????? ?????????????? ?????????? ?? ?????????????????? ???? ????????????????
      return cells.filter(filterCell =>
        (filterCell.x === cell.x - 1 && filterCell.y === cell.y && filterCell.z === cell.z + 1) ||
        (filterCell.x === cell.x && filterCell.y === cell.y - 1 && filterCell.z === cell.z + 1) ||
        (filterCell.x === cell.x + 1 && filterCell.y === cell.y - 1 && filterCell.z === cell.z))
        .some(filterCell => filterCell.value === cell.value)
    })
    ) {
      setStatus(statuses.gameOver)
    }
  }, [level, cells, cellsCount])

  // ?????????????????????????? ?????????? ???????????????????? ?????????? ?????????? ?????????????????? ????????????
  useEffect(() => {
    setCellsCount(3 * Math.pow(level, 2) - 3 * level + 1)
  }, [level])

  // ?????????????????? ???????? ??????????, ???????? ?????? ????????????????????
  useEffect(() => {
    switch (window.location.hash) {
      case '#test2':
        startGame(2)
        break

      case '#test3':
        startGame(3)
        break

      case '#test4':
        startGame(4)
        break
    }
  }, [])

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

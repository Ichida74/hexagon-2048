import React, { useCallback } from 'react'
import servers from '../data/servers'

export default function Menu (props) {
  const { level, changeLevel, server, setServer } = props

  const levels = []

  for (let i = process.env.REACT_APP_FIRST_LEVEL; i <= process.env.REACT_APP_LAST_LEVEL; i++) {
    levels.push(<button key={i} className={level === i ? 'active' : ''} onClick={() => changeLevel(i)}>{i}</button>)
  }

  const changeServer = useCallback((event) => {
    setServer(event.target.value)
  }, [server])

  return (
    <div className="menu">
      <dl className="menu-item">
        RNG-server url
        <select id="url-server" onChange={changeServer} value={server}>
          {servers.map((eServer, index) => (<option
            key={index}
            id={eServer.id}
            value={eServer.value}>
              {eServer.value}
          </option>))}
        </select>
      </dl>
      <dl className="menu-item">
        <dt className="menu-title">Select radius</dt>
        <dd className="menu-items">
          { levels }
        </dd>
      </dl>
    </div>
  )
}

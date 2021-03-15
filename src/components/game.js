import React from 'react'

export default function Game (props) {
  const { level } = props
  const columns = []

  for (let x = -level + 1; x < level; x++) {
    const column = []
    let y = level - 1 - (x <= 0 ? 0 : x)

    for (let row = 0; row < 2 * level - 1 - Math.abs(x); row++) {
      const z = 0 - x - y

      column.push(<div key={row} className="hexagon" data-value="0" data-x={x} data-y={y} data-z={z}>
        <span className="value">{0}</span>
      </div>)

      y--
    }
    columns.push(column)
  }

  return (
    <div className={'game level-' + level}>
      {columns.map((column, index) => (<div key={index} className="column">{column}</div>))}
    </div>
  )
}

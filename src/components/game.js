import React from 'react'

export default function Game (props) {
  const { level, cells } = props
  const columns = []

  for (let x = -level + 1; x < level; x++) {
    const column = []
    const currentCells = cells.filter(cell => cell.x === x)
    let y = level - 1 - (x <= 0 ? 0 : x)

    for (let row = 0; row < 2 * level - 1 - Math.abs(x); row++) {
      const z = 0 - x - y
      const currentCell = currentCells.filter(cell => cell.y === y && cell.z === z)[0]
      const value = (currentCell && currentCell.value) || 0

      column.push(<div key={row} className="hexagon" data-value={value} data-x={x} data-y={y} data-z={z}>
        <span className="value">{value}</span>
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

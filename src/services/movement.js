const move = (cells, firstAxis, secondAxis, thirdAxis, level) => {
  let newCells = []
  let hasMoved = false

  // проходим по всем колонкам
  for (let currentColumn = level - 1; currentColumn > -level; currentColumn--) {
    const currentCells = cells.filter(cell => cell[firstAxis] === currentColumn)
    let secondAxisMax = level - 1 - (currentColumn <= 0 ? 0 : currentColumn)
    let secondAxisCurrent = secondAxisMax

    // проходим по всем строкам в колонке
    for (let row = 0; row < 2 * level - 1 - Math.abs(currentColumn); row++) {
      const thirdAxisCurrent = 0 - currentColumn - secondAxisCurrent
      const currentCellIndex = currentCells.findIndex(cell =>
        cell[secondAxis] === secondAxisCurrent &&
        cell[thirdAxis] === thirdAxisCurrent)

      if (currentCellIndex !== -1) {
        let currentCell = currentCells.splice(currentCellIndex, 1)[0]

        // пытаемся переместить значение в следующую ячейку
        for (let downSecondAxis = secondAxisCurrent + 1; downSecondAxis <= secondAxisMax; downSecondAxis++) {
          const downCellIndex = currentCells.findIndex(cell =>
            cell[secondAxis] === downSecondAxis &&
            cell[thirdAxis] === 0 - currentColumn - downSecondAxis)

          if (downCellIndex === -1) {
            currentCell[secondAxis] = downSecondAxis
            currentCell[thirdAxis] = 0 - currentColumn - downSecondAxis
            hasMoved = true
          } else {
            if (currentCells[downCellIndex].value !== currentCell.value) {
              secondAxisMax = downSecondAxis
              break
            }

            if (currentCells[downCellIndex].value === currentCell.value) {
              currentCells[downCellIndex].value *= 2
              hasMoved = true
              secondAxisMax = downSecondAxis - 1
              currentCell = null
              break
            }
          }
        }

        if (currentCell) {
          currentCells.push(currentCell)
        }
      }

      secondAxisCurrent--
    }

    newCells = newCells.concat(currentCells)
  }

  return { hasMoved, newCells }
}

export default move

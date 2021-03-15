import React from 'react'

export default function Status (props) {
  const { status } = props

  return (
    <div className="status">
      Game status: <span data-status={status.title}>{status.title}</span>
    </div>
  )
}

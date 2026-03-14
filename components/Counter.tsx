"use client"

import { useState } from "react"

export default function Counter() {
  const [count, setCount] = useState(0)

  return (
  <button
      onClick={() => setCount(count + 1)}
      style={{
        padding: "10px 20px",
        background: "blue",
        color: "white",
        borderRadius: "6px",
        border: "none"
      }}
    >
      Click Me ({count})
    </button>
  )
}
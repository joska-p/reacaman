import { useRef, useEffect, useState } from "react"
import { draw } from "./draw"
import Controls from "./controls"

const Checkerboard = () => {
  const canvasRef = useRef(null)
  const [size, setSize] = useState(20)

  useEffect(() => {
    if (canvasRef.current) draw(canvasRef.current, size)
  }, [canvasRef, size])

  return (
    <div className="relative h-screen">
      <Controls size={size} setSize={setSize} />
      <canvas id="checkerboard" ref={canvasRef} />
    </div>
  )
}

export default Checkerboard

import { useEffect, useMemo, useRef, useState } from "react"
import Controls from "./controls"
import { createRacamanSequence } from "../../racaman/racaman"
import { draw } from "./draw"
import { throttle } from "../../libs/utils"

const Visual = () => {
  const canvasRef = useRef(null)
  const [sequenceLength, setSequenceLength] = useState(100)

  const memoizedSequence = useMemo(
    () => createRacamanSequence(sequenceLength),
    [sequenceLength],
  )

  useEffect(() => {
    if (canvasRef.current) {
      const drawThrottle = throttle(
        () => draw(canvasRef.current, memoizedSequence),
        1000,
      )

      drawThrottle()

      window.addEventListener("resize", drawThrottle)

      return () => {
        window.removeEventListener("resize", drawThrottle)
      }
    }
  }, [canvasRef, memoizedSequence])

  return (
    <div>
      <Controls
        sequenceLength={sequenceLength}
        setSequenceLength={setSequenceLength}
      />
      <canvas ref={canvasRef} className="h-screen w-full" />
    </div>
  )
}

export default Visual

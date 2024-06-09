import { useRef, useMemo, useEffect } from "react"
import { createRacamanSequence } from "../../racaman/racaman"
import { drawSvg } from "./drawSvg"

const VisualSvg = () => {
  const svgRef = useRef(null)
  const memoizedSequence = useMemo(() => createRacamanSequence(50), [])

  useEffect(() => {
    if (svgRef.current) {
      drawSvg(svgRef.current, memoizedSequence)
    }
  }, [svgRef, memoizedSequence])

  return (
    <div>
      <svg
        ref={svgRef}
        className="h-full w-full fill-none stroke-slate-400"
      ></svg>
    </div>
  )
}

export default VisualSvg

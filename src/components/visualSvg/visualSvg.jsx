import { useRef, useMemo, useEffect, useState, useCallback } from "react"
import Controls from "./controlsSvg"
import { createRacamanSequence } from "../../racaman/racaman"
import { drawSvg } from "./drawSvg"
import "./visualSvg.css"

const VisualSvg = () => {
  const svgRef = useRef(null)
  const [sequenceLength, setSequenceLength] = useState(57)
  const memoizedSequence = useMemo(
    () => createRacamanSequence(sequenceLength),
    [sequenceLength],
  )
  const callbackDrawSvg = useCallback(
    (svg, sequence) => {
      drawSvg(svg, sequence)
    },
    [drawSvg],
  )

  useEffect(() => {
    if (svgRef.current) {
      callbackDrawSvg(svgRef.current, memoizedSequence)
    }
  }, [svgRef, memoizedSequence])

  return (
    <div className="relative">
      <Controls
        sequenceLength={sequenceLength}
        setSequenceLength={setSequenceLength}
      />

      <svg
        ref={svgRef}
        className="w-full fill-transparent stroke-slate-400 stroke-1"
      ></svg>
    </div>
  )
}

export default VisualSvg

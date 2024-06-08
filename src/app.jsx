import { useState } from "react"
import Controls from "./components/controls"
import Visualisation from "./components/visualisation"
import { createRacamanSequence } from "./racaman/racaman"

const App = () => {
  const [sequenceLength, setSequenceLength] = useState(100)
  return (
    <div className="min-h-screen bg-slate-900">
      <Controls
        sequenceLength={sequenceLength}
        setSequenceLength={setSequenceLength}
      />
      <Visualisation sequence={createRacamanSequence(sequenceLength)} />
    </div>
  )
}

export default App

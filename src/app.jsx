import Visualisation from "./components/visualisation"
import { createRacamanSequence } from "./racaman/racaman"

const App = () => {
  return (
    <div className="min-h-screen bg-slate-900">
      <Visualisation sequence={createRacamanSequence(100)} />
    </div>
  )
}

export default App

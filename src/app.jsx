import VisualSvg from "./components/sequences/visualSvg/visualSvg"
import Checkerboard from "./components/illusions/checkerboard/checkerboard"

const App = () => {
  return (
    <div className="flex min-h-screen flex-col justify-center bg-slate-900">
      <VisualSvg />

      <Checkerboard
        className="flex min-h-screen flex-col justify-center bg-slate-900"
        size={50}
      />
    </div>
  )
}

export default App

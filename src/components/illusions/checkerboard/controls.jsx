const Controls = ({ size, setSize }) => {
  return (
    <div className="absolute right-0 top-0 flex flex-col gap-1 p-4">
      <input
        className="w-32 rounded bg-slate-700 p-2 text-slate-50"
        type="number"
        value={size}
        onChange={e => setSize(e.target.value)}
      />
    </div>
  )
}

export default Controls

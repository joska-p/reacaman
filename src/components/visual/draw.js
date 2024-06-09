const draw = (canvas, sequence) => {
  canvas.width = canvas.parentElement.clientWidth
  canvas.height = canvas.parentElement.clientHeight

  const context = canvas.getContext("2d")
  const valueMin = Math.min(...sequence)
  const valueMax = Math.max(...sequence)
  const valueScale = canvas.width / (valueMax - valueMin)

  context.save()
  context.translate(0, canvas.height / 2)

  context.strokeStyle = "#a89984"
  context.lineWidth = 1

  sequence.forEach((value, index) => {
    if (index > 0) {
      const previousValue = sequence[index - 1]
      const middleValue = (previousValue + value) / 2
      const radius = Math.abs(value - previousValue) / 2

      context.beginPath()

      if (index % 2 === 0)
        context.arc(
          middleValue * valueScale,
          0,
          radius * valueScale,
          0,
          Math.PI,
        )
      else
        context.arc(
          middleValue * valueScale,
          0,
          radius * valueScale,
          Math.PI,
          0,
        )

      context.stroke()
    }
  })

  context.restore()
}

export { draw }

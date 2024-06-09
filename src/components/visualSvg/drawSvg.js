const drawSvg = (svg, sequence) => {
  // calculate the viewbox
  const valueMax = Math.max(...sequence)
  const magicY = valueMax / 2

  //reset the svg
  svg.innerHTML = ""

  svg.setAttribute("viewBox", `0 0 ${valueMax} ${valueMax}`)

  let path = ""
  sequence.forEach((value, index) => {
    const previousValue = sequence[index - 1]
    const middleValue = (previousValue + value) / 2
    const radius = Math.abs(value - previousValue) / 2

    if (index > 0) {
      if (index % 2 === 0) {
        path += `  A ${radius} ${radius} 0 0 1 ${value} ${magicY}`
      } else {
        path += `  A ${radius} ${radius} 0 0 0 ${value} ${magicY}`
      }
    }
  })

  svg.innerHTML += `<path d="M 0 ${magicY}${path} stroke-width='1' fill='none' vector-effect='non-scaling-stroke"/>`
}

export { drawSvg }

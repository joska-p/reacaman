const drawSvg = (svg, sequence) => {
  //reset the svg
  svg.innerHTML = ""
  svg.setAttribute("xmlns", "http://www.w3.org/2000/svg")

  // calculate the viewbox
  const width = Math.max(...sequence) // avoid looping here
  const height = width / 2 // find better init value for the height

  svg.setAttribute("viewBox", `0 0 ${width} ${height}`)

  const path = sequence.reduce((acc, value, index) => {
    if (index > 0) {
      const previousValue = sequence[index - 1]
      const radius = Math.abs(value - previousValue) / 2
      if (
        (index % 2 === 0 && previousValue > value) ||
        (index % 2 !== 0 && previousValue < value)
      ) {
        acc += ` A ${radius} ${radius} 0 0 1 ${value} 0` // clockwise
      } else acc += `  A ${radius} ${radius} 0 0 0 ${value} 0` // counter-clockwise
    }
    return acc
  }, `M 0 0`)

  svg.innerHTML += `<path class="path" d="${path}" transform="translate(0, ${height / 2})" style="vector-effect: non-scaling-stroke"/>`
}

export { drawSvg }

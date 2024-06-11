const drawSvg = (svg, sequence) => {
  // calculate the viewbox
  const valueMax = Math.max(...sequence)
  let height = valueMax / 2

  //reset the svg
  svg.innerHTML = ""
  svg.setAttribute("xmlns", "http://www.w3.org/2000/svg")
  svg.setAttribute("viewBox", `0 0 ${valueMax} ${height}`)

  let path = ""
  let y0 = height / 2
  sequence.forEach((value, index) => {
    if (index > 0) {
      const previousValue = sequence[index - 1]
      const radius = Math.abs(value - previousValue) / 2

      if (radius > height / 2) {
        svg.setAttribute("viewBox", `0 0 ${valueMax} ${radius * 2}`)
        y0 = radius
      }

      if (
        (index % 2 === 0 && previousValue > value) ||
        (index % 2 !== 0 && previousValue < value)
      ) {
        path += ` A ${radius} ${radius} 0 0 1 ${value} 0`
      } else path += `  A ${radius} ${radius} 0 0 0 ${value} 0`
    }
  })

  svg.innerHTML += `<path class="path" d="M 0 0${path}" transform="translate(0, ${y0})" style="vector-effect:non-scaling-stroke"/>`
}

export { drawSvg }

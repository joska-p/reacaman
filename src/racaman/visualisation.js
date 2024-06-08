/*
Projet: Visualisation of the racaman sequence

What is the Racaman sequence ?
Recamán's sequence a0 , a1 , a2 is defined as:
      { 0             if  n = 0
an =  { an − 1 − n    if  a n − 1 − n > 0  and is not already in the sequence
      { a n − 1 + n   otherwise

The first terms of the sequence are:
0, 1, 3, 6, 2, 7, 13, 20, 12, 21, 11, 22, 10, 23, 9, 24, 8, 25, 43, 62, 42, 63, 41, 18, 42, 17, 43, 16, 44, 15,
45, 14, 46, 79, 113, 78, 114, 77, 39, 78, 38, 79, 37, 80, 36, 81, 35, 82, 34, 83, 33, 84, 32, 85, 31, 86, 30,
87, 29, 88, 28, 89, 27, 90, 26, 91, 157, 224, 156, 225, 155,...
*/

import { createRacamanSequence } from "./racaman.js"

const fancyVisualisation = (canvas, sequence) => {
  return () => {
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

        if (index % 2 === 0) context.arc(middleValue * valueScale, 0, radius * valueScale, 0, Math.PI)
        else context.arc(middleValue * valueScale, 0, radius * valueScale, Math.PI, 0)

        context.stroke()
      }
    })

    context.restore()
  }
}

const visualiations = [fancyVisualisation(document.getElementById("racaman-fancy"), createRacamanSequence(30))]

const init = () => {
  visualiations.forEach(visualiation => visualiation())
  const resize = () => {
    visualiations.forEach(visualiation => visualiation())
  }
  // Debouncing mecanism https://bencentra.com/code/2015/02/27/optimizing-window-resize.html
  let timeout = false
  const delay = 260

  window.addEventListener("resize", () => {
    clearTimeout(timeout)
    timeout = setTimeout(resize(), delay)
  })
}

init()

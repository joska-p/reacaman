/**
 * @param {HTMLCanvasElement} canvas
 * @param {number} size size of the tiles
 */
const draw = (canvas, size) => {
  const ctx = canvas.getContext("2d")
  const width = (canvas.width = canvas.parentElement.clientWidth)
  const height = (canvas.height = canvas.parentElement.clientHeight)

  const tileSize = Math.floor(width / size)

  // define the style of the checkerboard
  ctx.strokeStyle = "grey"
  ctx.lineWidth = 2

  const drawSquare = (x, y, size) => {
    ctx.save()
    ctx.beginPath(x, y, size)
    ctx.rect(x, y, size, size)
    ctx.fill()
    ctx.stroke()
    ctx.restore()
  }

  // draw the checkerboard
  let offset = 0
  for (let y = 0; y < height; y += tileSize) {
    for (let x = 0; x < width; x += tileSize) {
      if ((x / tileSize) % 2 === 0) ctx.fillStyle = "#e9e9ed"
      else ctx.fillStyle = "#080c15"

      drawSquare(x + offset, y, tileSize, tileSize)
    }
    offset = tileSize / 2 - offset
  }

  ctx.restore()
}

export { draw }

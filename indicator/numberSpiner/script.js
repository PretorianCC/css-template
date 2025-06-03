let x = 0
const MAX = 10
const MIN = 0
const LIMIT = 7
let output = document.getElementById('output')
let meter = document.getElementById('meter')
output.innerHTML = x

function plus() {
  if (x >= MAX) return false
  if (x >= LIMIT) {
    meter.style.background = "#f00"
    meter.style.filter = "drop-shadow(0 0 2.5px #f00) drop-shadow(0 0 10px #f00)"
  }
  output.innerHTML = ++x
  meter.style.height = x * 10 + '%'
}

function minus() {
  if (x <= MIN) return false
  if (x <= LIMIT + 1) {
    meter.style.background = "#0f0"
    meter.style.filter = "drop-shadow(0 0 2.5px #0f0) drop-shadow(0 0 10px #0f0)"
  }
  output.innerHTML = --x
  meter.style.height = x * 10 + '%'
}
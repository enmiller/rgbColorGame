var numOfColors = 6
var colors = generateRandomColors(numOfColors)
var pickedColor = pickColor()
var squares = document.querySelectorAll(".square")
var colorDisplay = document.querySelector("#colorDisplay")
var messageDisplay = document.querySelector("#message")
var header = document.querySelector("h1")
var resetButton = document.querySelector("#resetButton")
var easyButton = document.querySelector("#easyButton")
var hardButton = document.querySelector("#hardButton")

for (var i = 0; i < squares.length; i++) {
    squares[i].style.background = colors[i]

    squares[i].addEventListener("click", function() {
        var clickedColor = this.style.background
        if (pickedColor === clickedColor) {
            messageDisplay.textContent = "Correct!"
            changeColors(clickedColor)
            header.style.background = pickedColor
            resetButton.textContent = "Play Again?"
        } else {
            this.style.background = "#232323"
            messageDisplay.textContent = "Try Again"
        }
    })
}
colorDisplay.textContent = pickedColor

resetButton.addEventListener("click", function() {
    resetGame()
})

easyButton.addEventListener("click", function() {
    easyButton.classList.add("selected")
    hardButton.classList.remove("selected")
    numOfColors = 3
    resetGame()
})

hardButton.addEventListener("click", function() {
    easyButton.classList.remove("selected")
    hardButton.classList.add("selected")
    numOfColors = 6
    resetGame()
})

function resetGame() {
    colors = generateRandomColors(numOfColors)
    pickedColor = pickColor()
    colorDisplay.textContent = pickedColor
    messageDisplay.textContent = ""
    header.style.background = "steelblue"
    resetButton.textContent = "New Colors"
    resetColorSquares()
}

function resetColorSquares() {
    for (var i = 0; i < squares.length; i++) {
        if (colors[i]) {
            squares[i].style.background = colors[i]
            squares[i].classList.remove("hidden")
        } else {
            // squares[i].style.display = "none"
            squares[i].classList.add("hidden")
        }
    }
}

function changeColors(colorStr) {
    for (var i = 0; i < squares.length; i++) {
        squares[i].style.background = colorStr
    }
}

function pickColor() {
    var n = randomInteger(colors.length)
    return colors[n]
}

function generateRandomColors(numOfColors) {
    var colorArr = []
    for (var i = 0; i < numOfColors; i++) {
        colorArr.push(randomColor())
    }

    return colorArr
}

function randomColor() {
    var r = randomInteger(256)
    var g = randomInteger(256)
    var b = randomInteger(256)

    return buildRGBString(r, g, b)
}

function randomInteger(upperBound) {
    return Math.floor(Math.random() * upperBound)
}

function buildRGBString(r, g, b) {
    return "rgb(" + r + ", " + g + ", " + b + ")"
}

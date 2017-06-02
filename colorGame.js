let colors = generateRandomColors(6)

const body = document.getElementsByTagName('body')
const squares = document.querySelectorAll('.square')
const rgbDisplay = document.getElementById('picked-color')
const gameStatus = document.getElementById('game-status')
const headerDisplay = document.getElementsByTagName('h1')[0]
const pickedColor = pickColor()

rgbDisplay.textContent = pickedColor

for (let i = 0; i < squares.length; i++) {
  //add starting colors to squares
  squares[i].style.backgroundColor = colors[i]
  //add click event to change clicked square colors
  squares[i].addEventListener('click', function(){
    //grab clicked color and tie it to a variable
     let clickedColor = this.style.backgroundColor
     //console.log(this.style.backgroundColor)
     //add logic to match colors
     if(clickedColor === pickedColor){
       gameStatus.textContent = 'Correct!'
       //change all colors to picked color
       changeColor(clickedColor)
       //change header background color to match winning color
       headerDisplay.style.backgroundColor = clickedColor

     } else{
       //change wrong colored squares to background color
       //console.log(this.style.backgroundColor)
       this.style.backgroundColor = '#232323'
       gameStatus.textContent = 'Try Again'
     }
  })
}
//changes all square colors to our correctly clicked color
function changeColor(chosenColor){
  for (let i = 0; i < squares.length; i++) {
    squares[i].style.backgroundColor = chosenColor
  }
}

function pickColor(){
  const randomNumber = Math.floor(Math.random() * colors.length)
  return colors[randomNumber]
}

function generateRandomColors(num){
  //make an array
  let arr = []
  //repeat num times
  for (let i = 0; i < num; i++) {
    //get random rgb numbers and push that into the empty array
    arr.push(randomColor())
  }
  //return that array
  return arr
}

function randomColor() {
  //pick a red color from 0 - 255
  const r = Math.floor(Math.random() * 256)
  //pick a green color from 0 - 255
  const g = Math.floor(Math.random() * 256)
  //pick a blue color from 0- 255
  const b = Math.floor(Math.random() * 256)
  //return combined random rgb numbers
  return 'rgb(' + r + ', ' + g + ', ' + b +')'
}

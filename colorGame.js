let colors = [  'rgb(255, 0, 0)',
                'rgb(255, 255, 0)',
                'rgb(0, 255, 0)',
                'rgb(0, 255, 255)',
                'rgb(0, 0, 255)',
                'rgb(255, 0, 255)'
              ]

let body = document.getElementsByTagName('body')
const squares = document.querySelectorAll('.square')
const rgbDisplay = document.getElementById('picked-color')
const gameStatus = document.getElementById('game-status')
let pickedColor = colors[3]

rgbDisplay.textContent = pickedColor

for (let i = 0; i < squares.length; i++) {
  //add starting colors to squares
  squares[i].style.backgroundColor = colors[i]
  //add click event to change clicked square colors
  squares[i].addEventListener('click', function(){
    //grab clicked color and tie it to a variable
     let clickedColor = this.style.backgroundColor
     console.log(this.style.backgroundColor)
     //add logic to match colors
     if(clickedColor === pickedColor){
       gameStatus.textContent = 'Correct!'
       //change all colors to picked color
       changeColor(clickedColor)
     } else{
       //change wrong colored squares to background color
       console.log(this.style.backgroundColor)
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

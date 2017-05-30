let colors = [  'rgb(255, 0, 0)',
                'rgb(255, 255, 0)',
                'rgb(0, 255, 0)',
                'rgb(0, 255, 255)',
                'rgb(0, 0, 255)',
                'rgb(255, 0, 0255)'
              ]

let body = document.getElementsByTagName('body')
const squares = document.querySelectorAll('.square')
const rgbDisplay = document.getElementById('picked-color')
let pickedColor = colors[3]

rgbDisplay.textContent = pickedColor

for (let i = 0; i < squares.length; i++) {
  squares[i].style.backgroundColor = colors[i]
  squares[i].addEventListener('click', function(){
     console.log(this.style.backgroundColor)
     if(this.style.backgroundColor === pickedColor){
       alert('you got it right!')
      //  background.style.backgroundColor = pickedColor
     } else{
       this.style
       alert('Wrong Pick Again!')
     }
})
}

// body.addEventListener('click', function(){
//   this.style.backgroundColor = pickedColor
// })

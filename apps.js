const body = document.querySelector('body')
const btn = document.querySelector('.btn')
const span =  document.querySelector('span')

let arrayOfHexValues = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'a', 'b', 'c', 'd', 'e', 'f']

btn.addEventListener('click', runEvent)

function runEvent(e){
    // MY OWN FIRST WAY

    // let random =  Math.floor(Math.random()*arrayOfHexValues.length).toString()
    

    // span.textContent = '#' + arrayOfHexValues[Math.floor(Math.random()*arrayOfHexValues.length).toString()] + arrayOfHexValues[random] + arrayOfHexValues[Math.floor(Math.random()*arrayOfHexValues.length).toString()] + arrayOfHexValues[Math.floor(Math.random()*arrayOfHexValues.length).toString()] + arrayOfHexValues[Math.floor(Math.random()*arrayOfHexValues.length).toString()] + arrayOfHexValues[Math.floor(Math.random()*arrayOfHexValues.length).toString()]

    // body.style.background = span.textContent
    

    // THE SIMPLEER WAY
    let i;
    let hexValue = '#';
    for(i = 0; i < 6; i++){

        hexValue = hexValue + arrayOfHexValues[Math.floor(Math.random()*arrayOfHexValues.length)]
    }
    
    span.textContent = hexValue
    body.style.background = span.textContent  // YOU CAN ALSO USE THE HEXVALUE VARIABLE
}


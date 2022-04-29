// selecting two classes from HTML
const loadText = document.querySelector('.loading-text')
const bg = document.querySelector('.bg')


// 30millisecond to apply blurring function
let int = setInterval(blurring, 40)





// function to load and display 0-100
let load = 0;
function blurring(){
    load++
    if (load > 99) {
        clearInterval(int)
    }

    // referencing HTML text in function
    loadText.innerHTML =`${load}%`

    // opacity range: 0-1 ; load range: 0-100.
    // so we map them together
    loadText.style.opacity = scale(load, 0, 100, 1, 0)

    // we dont want  filter: blur > 30px. start (1): 30px, end (100): 0px.
    // so we have to map them together
    bg.style.filter = `blur(${scale(load, 0, 100, 30, 0)}px)`
}





// function to map a range of numbers to another range of numbers.
// https://stackoverflow.com/questions/10756313/javascript-jquery-map-a-range-of-numbers-to-another-range-of-numbers
const scale = (number, inMin, inMax, outMin, outMax) => {
    return ((number - inMin) * (outMax - outMin)) / (inMax - inMin) + outMin;
}
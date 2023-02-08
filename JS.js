let container = document.querySelector('.container')
const COUNT = 500

for(let i=0; i<COUNT; i++){
    let div = document.createElement('div')
    div.className = 'component'
    div.style.borderRadius = '1px'
    container.appendChild(div)
    div.addEventListener('mouseover', function(){setColor(div)})
    div.addEventListener('mouseout', function(){removeColor(div)})
}

function setColor(el){
    let random1 = Math.floor(Math.random()*255)
    let random2 = Math.floor(Math.random()*255)
    let random3 = Math.floor(Math.random()*255)
    el.style.backgroundColor = `rgb(${random1}, ${random2}, ${random3})`
    el.style.boxShadow = `0 0 0 2px rgb(${random1}, ${random2}, ${random3})`
}

function removeColor(el){
    el.style.backgroundColor = 'darkgray'
    el.style.boxShadow = '0 0 0 2px black'
}
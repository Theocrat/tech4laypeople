var mode = 'day'

function changefont() {
    let fontOption = document.getElementById('font-selector')
    let fontValue  = fontOption.value
    
    console.log(`Function changefont called with value = "${fontValue}"`)
}

function changesize() {
    let sizeOption = document.getElementById('size-selector')
    let sizeValue  = sizeOption.value
    
    console.log(`Function changesize called with value = "${sizeValue}"`)
}

function nightmode() {
    let togglebutton = document.getElementById('nightmode')
    
    if(mode == 'day') {
        mode = 'night'
        togglebutton.innerHTML = 'Day Mode'
    }
    
    else {
        mode = 'day'
        togglebutton.innerHTML = 'Night Mode'
    }        
}

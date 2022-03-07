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

const controlTable = `
<table class="control-table">
<tr>
    <td class="control">
        <img src="svg/fonts.svg"
             width="48px" 
             height="48px"
             title="Select Font">
        </img>
    </td>
    
    <td class="control">
        <img src="svg/size.svg"
             width="48px" 
             height="48px"
             title="Font Size">
        </img>
    </td>
    
    <td>
        <img src="svg/nightmode.svg"
             width="48px" 
             height="48px"
             title="Toggle Night Mode">
        </img>
    </td>
</tr>

<tr>
    <td class="control">
        <select id="font-selector" onchange="changefont()">
            <option value="arial">Arial</option>
            <option value="sans" >Sans </option>
        </select>
    </td>
    
    <td class="control">
        <select id="size-selector" onchange="changesize()">
            <option value="12">12</option>
            <option value="14">14</option>
            <option value="16">16</option>
            <option value="18">18</option>
            <option value="20">20</option>
            <option value="22">22</option>
        </select>
    </td>
    
    <td class="control">
        <button id="nightmode" onclick="nightmode()">
            Night Mode
        </button>
    </td>
</tr>
</table>`

function renderControls() {
    let controlNode = document.getElementById('controlTable')
    
    controlNode.innerHTML = controlTable

    resizeForMobile();
}

function resizeForMobile() {
    if(screen.width < 1000) {
        // Probably a mobile device
        document.querySelectorAll('.content').forEach(
            article => {
                article.style.width = '100%'
            }
        )
    }
}
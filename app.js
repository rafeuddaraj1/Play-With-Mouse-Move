const displayOne = document.getElementById('background-1')
const displayTwo = document.getElementById('background-2')
const colorCodeY = document.getElementById('color-codeY')
const colorCodeX = document.getElementById('color-codeX')
const mouseMove = document.getElementById('mouse-move')
const copyY = document.getElementById('copyY')
const copyX = document.getElementById('copyX')
mouseMove.addEventListener('mousemove',function(event){
    displayOne.style.background = `#${event.clientX}`
    displayTwo.style.background = `#${event.clientY}`
    colorCodeY.innerHTML = `#${event.clientY}`
    colorCodeX.innerHTML = `#${event.clientX}`
    colorCodeX.value = `#${event.clientX}`
    colorCodeY.value = `#${event.clientY}`
})

copyX.addEventListener('click',function(){
    copy(colorCodeX,copyX)
})
copyY.addEventListener('click',function(){
    copy(colorCodeY,copyY)
})


function copy(colorCode,target){
    colorCode.select()
    document.execCommand('copy')
    target.innerHTML = 'Copied Color'
    setTimeout(()=>{
        target.innerHTML = 'Copy Color'
    },2000)
}

// Adding Preview Section 

const preview = document.getElementById('preview')
const previewCopy= document.getElementById('preview-copy')
const previewDiv= document.getElementById('preview-div')
const test= document.getElementById('test')
const colorCode = document.getElementById('color-code')
const previewBtn = document.getElementById('preview-btn')
const resetBtn = document.getElementById('reset-btn')
test.addEventListener('keypress',function(e){
    if (e.key === 'Enter') {
        if (e.target.value === '') {
            return alert('Enter Color Code')
        }else{
            if (e.target.value.search('#')===0) {
                previewDiv.style.backgroundColor = e.target.value.toLowerCase()
                colorCode.textContent = e.target.value.toLowerCase()
                colorCode.style.display = 'block'
                preview.textContent = 'Preview Live'
                colorCode.style.display = 'block'
                colorCode.addEventListener('click',function(){
                    test.select()
                    document.execCommand('copy')
                    colorCode.textContent = 'Copied'
                    setTimeout(()=>{
                        colorCode.textContent = 'Copy'
                    },2000)
                })
            }else{
                alert(`First Index Should be # and type "${e.target.value}". "example #${e.target.value}"`)
            }
        }
    }
})
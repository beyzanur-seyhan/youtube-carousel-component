let boxes = document.querySelector(".boxes");

let leftbtn = document.querySelector('.left-btn')

let rightbtn = document.querySelector('.right-btn')

let rightLink = rightbtn.querySelector('a')

let rightSubText = document.querySelector('.last')

let leftSubText = document.querySelector('.prev')

let leftLink = leftbtn.querySelector('a')

leftbtn.addEventListener('click', leftBtn)
rightbtn.addEventListener('click', rightBtn)


// Right Button Event
function rightBtn(){

    if(rightSubText.classList.contains('v-visible')){
        rightSubText.classList.replace('v-visible','v-none')
    }

    boxes.scrollLeft+=320

    leftbtn.style.display = 'block'

    if(Math.round(boxes.scrollLeft) >= 444 || Math.round(boxes.scrollLeft) >= 764){
        rightbtn.style.display = 'none'
        
    }
}

// Left Button Event
function leftBtn(){

    if(leftSubText.classList.contains('v-visible')){
        leftSubText.classList.replace('v-visible','v-none')
    }

    boxes.scrollLeft-=320

    rightbtn.style.display = 'block'

    if(boxes.scrollLeft <= 320){
        leftbtn.style.display = 'none'
    }


}


// Right Button Over
rightLink.addEventListener('mouseover',rightLinkOver)
rightLink.addEventListener('mouseout',rightLinkOut)

function rightLinkOver(){
    rightSubText.classList.replace('v-none','v-visible')
}

function rightLinkOut(){
    rightSubText.classList.replace('v-visible','v-none')
}


// Left Button Over
leftLink.addEventListener('mouseover',leftLinkOver)
leftLink.addEventListener('mouseout',leftLinkOut)

function leftLinkOver(){
    leftSubText.classList.replace('v-none','v-visible')
}

function leftLinkOut(){
    leftSubText.classList.replace('v-visible','v-none')
}
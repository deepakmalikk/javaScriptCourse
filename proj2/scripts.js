var red = document.querySelector(".red")
const violet= document.querySelector(".violet")
const orange = document.querySelector(".orange")
const cyan = document.querySelector(".cyan")
const pink = document.getElementsByClassName(".pink")
const center =document.querySelector(".center")

const getBGColor = (Selected) =>{
     
    return window.getComputedStyle(Selected).backgroundColor;
}

// color =getBGColor(red)


// red.addEventListener('click', ()=>{
//     center.style.background = color
// })

const getMagicalColor = (element, color)=>{
   return  element.addEventListener('mouseenter', ()=>{
         center.style.background = color
})
}

console.log(getMagicalColor(red,getBGColor(red)))
console.log(getMagicalColor(violet,getBGColor(violet)))
console.log(getMagicalColor(orange,getBGColor(orange)))
console.log(getMagicalColor(cyan,getBGColor(cyan)))
console.log(getMagicalColor(pink,getBGColor(pink)))
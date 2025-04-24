let menu_btn = document.querySelector('#menu_icon')
let menu = document.querySelector('#links')
let toggle_menu = () =>{
    menu.classList.toggle('toggle')
}
menu_btn.addEventListener('click', toggle_menu)

let mode_btn = document.querySelector('ul #toggler')

if((localStorage.getItem('theme') === null)){
    localStorage.setItem('theme', 'sun')
}

let storeTheme = localStorage.getItem('theme')

if(storeTheme == 'moon'){
    mode_btn.children[0].setAttribute("src", "./assets/icons/sun.png") 
    document.body.style.setProperty('background', 'var(--black)')
    document.body.style.setProperty('--themeColor', 'var(--white)') 
    document.body.style.setProperty('--innerColor', 'var(--black)') 
    document.body.querySelector('#menu_icon').style = 'background : white;'
    mode_btn.classList.remove('toggling')
    document.body.style.setProperty('--bgColor', 'var(--white)') 
}else if(storeTheme == 'sun'){
    mode_btn.children[0].setAttribute("src", "./assets/icons/moon.png") 
    document.body.style.setProperty('background', 'var(--white)')
    document.body.style.setProperty('--themeColor', 'var(--black)')
    document.body.style.setProperty('--innerColor', 'var(--white)') 
    mode_btn.classList.add('toggling')
    document.body.style.setProperty('--bgColor', 'var(--white)') 
}

let toggle_mode = () =>{
    mode_btn.classList.toggle('toggling')
    if(mode_btn.classList.contains('toggling')){
        localStorage.setItem('theme', 'sun')
        mode_btn.children[0].setAttribute("src", "./assets/icons/moon.png") 
        document.body.style.setProperty('background', 'var(--white)')
        document.body.style.setProperty('--themeColor', 'var(--black)')
        document.body.style.setProperty('--innerColor', 'var(--white)') 
        document.body.style.setProperty('--bgColor', 'var(--white)') 
        mode_btn.id = 'moon'
    }else{
        localStorage.setItem('theme', 'moon')
        mode_btn.id = 'sun'
        mode_btn.children[0].setAttribute("src", "./assets/icons/sun.png") 
        document.body.style.setProperty('background', 'var(--black)')
        document.body.style.setProperty('--themeColor', 'var(--white)') 
        document.body.style.setProperty('--innerColor', 'var(--black)') 
        document.body.querySelector('#menu_icon').style = 'background : white;'
        document.body.style.setProperty('--bgColor', 'var(--white)') 
    } 
}
mode_btn.addEventListener('click', toggle_mode)
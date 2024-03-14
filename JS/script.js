let themeBtn = document.querySelector(".themeChange")
let currentTheme = body.getAttribute('data-theme')
themeBtn.addEventListener("click", changeTheme)

function changeTheme(){
    let body = document.querySelector('body')
    let currentTheme = body.getAttribute('data-theme')
    if(currentTheme == "dark"){
        body.setAttribute('data-theme', 'white')
    } else {
        body.setAttribute('data-theme', 'dark')
    }
}
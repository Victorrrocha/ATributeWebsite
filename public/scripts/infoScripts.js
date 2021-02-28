//reference p
let about = document.querySelector(".about")
let trivia = document.querySelector(".trivia")

const changeText = () => {
    let tab = document.querySelector("input[name='tab']:checked")
    if (tab.id === 'about') {
        about.style.display = "inline-block"
        trivia.style.display = "none"
    }
    else if (tab.id === 'trivia') {
        about.style.display = "none"
        trivia.style.display = "inline-block"
    }
}

const showAbout = () => {
    about.style.display = "inline-block"
    trivia.style.display = "none"
}

const showTrivia = () => {
    about.style.display = "none"
    trivia.style.display = "inline-block"
}

showAbout()
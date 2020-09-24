const toggleButton = document.getElementsByClassName("togell-bar")[0]
const navbarLinks =document.getElementsByClassName("nav-buttons")[0]

toggleButton.addEventListener('click',() => {
    navbarLinks.classList.toggle('active')
})
//light-mode/dark-mode selector

document.querySelector(".toggledisplay").addEventListener("click", (event) => {
    let body = document.querySelector("body")
    if (body.classList.contains('light-theme')) {
        body.classList.remove('light-theme');
        body.classList.add('dark-theme');
}   else {
        body.classList.remove('dark-theme');
        body.classList.add('light-theme');
}
})

// document.querySelector("")
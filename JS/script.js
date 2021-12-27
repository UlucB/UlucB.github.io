document.querySelector("#toggledisplay").addEventListener("click", (event) => {
    let body = document.querySelector("body")
    if (body.classList.contains('light-theme')) {
        body.classList.remove('light-theme');
        body.classList.add('dark-theme');
}   else {
        body.classList.remove('dark-theme');
        body.classList.add('light-theme');
}
})


// document.querySelector('.Eng').addEventListener("click", (event) => {
//     let body = document.querySelector("body")
//     if (body.classList.contains('Tr')) {
//         body.classList.remove('Tr');
//         body.classList.add('Eng')}
// })

document.querySelector('.Tr').addEventListener("click", (event) => {
    let body = document.querySelector("body")
    if (body.classList.contains('Eng')) {
        body.classList.remove('Eng');
        body.classList.add('Tr')}
    })

let main = document.querySelector('#main');
function cleanUpIndex() {
    let children_of_main = main.querySelectorAll("*")
    for (let i=0; i<children_of_main.length; i++) {
        children_of_main[i].remove();}
    // all_tags = main.querySelectorAll('*');
    // for (let i = 0; i < all_tags.length; i++) {all_tags[i].remove();};
}

let links = document.querySelectorAll('.page_link')
for (let i=0; i<links.length; i ++) {
    links[i].addEventListener('click', event=>{
        cleanUpIndex()
    })
}

document.querySelector("#main_link").addEventListener("click", event=>{
    let website_name = document.createTextNode("SoBo")
    let h1_node = document.createElement('h1')
    h1_node.appendChild(website_name)
    main.appendChild(h1_node)
})

document.querySelector("#team_link").addEventListener("click", event=>{
    let p = document.createElement('p')
    let image = document.createElement('img')    
    image.src = './Img/men_at_work.png'
    p.classList.add('in_line_picture')
    p.appendChild(image)
    main.appendChild(p)
})

document.querySelector("#products_link").addEventListener("click", event=>{
    let pic_div = document.createElement('div')
    pic_div.classList.add('in_line_picture')

    let p1 = document.createElement('p')
    let image1 = document.createElement('img')    
    image1.src = './Img/product_1.png'
    p1.appendChild(image1)

    let p2 = document.createElement('p')
    let image2 = document.createElement('img')    
    image2.src = './Img/product_2.png'
    p2.appendChild(image2)

    pic_div.appendChild(image1)
    pic_div.appendChild(image2)

    main.appendChild(pic_div)

    // let p2 = document.createElement('p')
    // p2.classList.add('in_line_picture')


    let description_div = document.createElement('div')
    description_div.classList.add('text_about_product')

    let p3 = document.createElement('p')
    // p3.classList.add('text_about_product')
    p3.innerHTML="Some description of product here"
    
    let p4 = document.createElement('p')
    p4.innerHTML="Some description of 2nd product here"

    description_div.appendChild(p3)
    description_div.appendChild(p4)

    main.appendChild(description_div)



})

// document.querySelector("#contact_link").addEventListener("click", event=>{
//     main.appendChild('h1').value="SoBo"
// })


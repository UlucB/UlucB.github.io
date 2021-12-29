// Light/Dark Mode

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


let lang_select = document.querySelectorAll('.langselect')

document.querySelectorAll('.langselect')[1].addEventListener("click", (event) => {
    console.log(event.target)
});

document.querySelectorAll('.langselect')[0].addEventListener("click", (event) => {
    console.log(event.target)
});


// document.querySelector('.Eng').addEventListener("click", (event) => {
//     let body = document.querySelector("body")
//     if (body.classList.contains('Tr')) {
//         body.classList.remove('Tr');
//         body.classList.add('Eng')}
// })

// document.querySelector('.Tr').addEventListener("click", (event) => {
//     let body = document.querySelector("body")
//     if (body.classList.contains('Eng')) {
//         body.classList.remove('Eng');
//         body.classList.add('Tr')}
//     })

let main = document.querySelector('#main');
function cleanUpIndex() {
    main.classList.remove('homepage')
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
    let p = document.createElement('p')
    let image = document.createElement('img')    
    image.src = './Img/SOBO Logo.png'
    p.classList.add('logo')
    p.appendChild(image)
    main.appendChild(p)
    main.classList.add('homepage')
})

document.querySelector("#team_link").addEventListener("click", event=>{
    let page_container_div = document.createElement('div')
    page_container_div.classList.add('page_container')
    
    let p = document.createElement('p')
    let image = document.createElement('img')    
    image.src = './Img/men_at_work.png'
    p.classList.add('in_line_picture')
    p.appendChild(image)
    page_container_div.appendChild(p)
    main.appendChild(page_container_div)
})

document.querySelector("#products_link").addEventListener("click", event=>{
    let page_container_div = document.createElement('div')
    page_container_div.classList.add('page_container')

    let pic_div = document.createElement('div')
    pic_div.classList.add('in_line_picture')

    let prod1_wrap = document.createElement('div')
    prod1_wrap.classList.add('product_wrap')

    let image1 = document.createElement('img')    
    image1.src = './Img/product_1.png'
    
    let p1_description = document.createElement('div')
    p1_description.classList.add('prod_description')
    p1_description.innerHTML='You can describe the first item here!'

    prod1_wrap.appendChild(image1)
    prod1_wrap.appendChild(p1_description)


    let prod2_wrap = document.createElement('div')
    prod2_wrap.classList.add('product_wrap')

    let image2 = document.createElement('img')    
    image2.src = './Img/product_2.png'

    let p2_description = document.createElement('div')
    p2_description.classList.add('prod_description')
    p2_description.innerHTML='You can describe the second item here!'

    prod2_wrap.appendChild(image2)
    prod2_wrap.appendChild(p2_description)

    let image3 = document.createElement('img')    
    image3.src = './Img/product_3.jpeg'

    let image4 = document.createElement('img')    
    image4.src = './Img/product_4.jpeg'

    let image5 = document.createElement('img')    
    image5.src = './Img/product_5.jpeg'

    let image6 = document.createElement('img')    
    image6.src = './Img/product_6.jpeg'

    pic_div.appendChild(prod1_wrap)
    pic_div.appendChild(prod2_wrap)
    pic_div.appendChild(image3)
    pic_div.appendChild(image4)
    pic_div.appendChild(image5)
    pic_div.appendChild(image6)

    page_container_div.appendChild(pic_div)

    let description_div = document.createElement('div')
    description_div.classList.add('text_about_product')

    let p7 = document.createElement('p')
    p7.innerHTML="Some description of product here"
    
    let p8 = document.createElement('p')
    p8.innerHTML="Some description of 2nd product here"

    let p9 = document.createElement('p')
    p9.innerHTML="Some description of 3rd product here"

    let p10 = document.createElement('p')
    p10.innerHTML="Some description of 4th product here"
    
    let p11 = document.createElement('p')
    p11.innerHTML="Some description of 5th product here"
    
    let p12 = document.createElement('p')
    p12.innerHTML="Some description of 6th product here"

    description_div.appendChild(p7)
    description_div.appendChild(p8)
    description_div.appendChild(p9)
    description_div.appendChild(p10)
    description_div.appendChild(p11)
    description_div.appendChild(p12)

    page_container_div.appendChild(description_div)

    main.appendChild(page_container_div)
})

document.querySelector("#contact_link").addEventListener("click", event=>{
    let page_container_div = document.createElement('div')
    page_container_div.classList.add('page_container')
    page_container_div.classList.add('contact_page')

    let contact_picture = document.createElement('div')
    contact_picture.classList.add('in_line_picture')
    
    let efe_image = document.createElement('img')    
    efe_image.src = './Img/efe_atesler.png'
    contact_picture.appendChild(efe_image)
    
    let contact_column = document.createElement('div')
    contact_column.classList.add('text_about_product')

    let contact_name = document.createElement('p')
    contact_name.innerHTML="Efe Atesler <br>530 505 40 33 <br>efeatesler@email.com"

    contact_column.appendChild(contact_name)

    page_container_div.appendChild(contact_picture)
    page_container_div.appendChild(contact_column)

    main.appendChild(page_container_div)
})


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
    let image = document.createElement('img')    
    image.src = './Img/SOBO Logo.png'
    image.classList.add('logo')
    main.appendChild(image)
    main.classList.add('homepage')
})

document.querySelector("#team_link").addEventListener("click", event=>{
    let page_container_div = document.createElement('div')
    page_container_div.classList.add('page_container')
    page_container_div.classList.add('team_page')

    let contact_picture = document.createElement('div')
    contact_picture.classList.add('in_line_picture')
    
    let efe_image = document.createElement('img')    
    efe_image.src = './Img/efe_atesler.png'
    contact_picture.appendChild(efe_image)
    
    let contact_column = document.createElement('div')
    contact_column.classList.add('text_about_product')

    let efe_contact = document.createElement('p')
    efe_contact.innerHTML="Efe Atesler<br>CEO & Founder<br>0530 50 540 33 <br>efeatesler@email.com"

    contact_column.appendChild(efe_contact)

    let arda_image = document.createElement('img')    
    arda_image.src = './Img/arda_atesler.png'
    
    let arda_column = document.createElement('div')
    arda_column.classList.add('text_about_product')

    let arda_contact = document.createElement('p')
    arda_contact.innerHTML="Arda Atesler<br>Co-Founder<br>0530 50 540 34<br>ardaatesler97@hotmail.com"

    contact_picture.appendChild(arda_image)
    contact_column.appendChild(arda_contact);

    let avi_image = document.createElement('img')    
    avi_image.src = './Img/avi_aruh.png'
    
    let avi_column = document.createElement('div')
    avi_column.classList.add('text_about_product')

    let avi_contact = document.createElement('p')
    avi_contact.innerHTML="Avram Aruh<br>yüksek kimya mühendisi<br>0506 50 967 19<br>avram.aruh@gmail.com"

    contact_picture.appendChild(avi_image)
    contact_column.appendChild(avi_contact);


    page_container_div.appendChild(contact_picture)
    page_container_div.appendChild(contact_column)

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
    image1.src = './Img/product_6.jpeg'
    
    let p1_description = document.createElement('div')
    p1_description.classList.add('prod_description')
    p1_description.innerHTML='You can describe the first item here!'

    prod1_wrap.appendChild(image1)
    prod1_wrap.appendChild(p1_description)

    let prod2_wrap = document.createElement('div')
    prod2_wrap.classList.add('product_wrap')

    let image2 = document.createElement('img')    
    image2.src = './Img/product_3.jpeg'

    let p2_description = document.createElement('div')
    p2_description.classList.add('prod_description')
    p2_description.innerHTML='You can describe the second item here!'

    prod2_wrap.appendChild(image2)
    prod2_wrap.appendChild(p2_description)

    let image3 = document.createElement('img')    
    image3.src = './Img/product_4.jpeg'

    let image6 = document.createElement('img')    
    image6.src = './Img/product_5.jpeg'

    pic_div.appendChild(prod1_wrap)
    pic_div.appendChild(prod2_wrap)
    pic_div.appendChild(image3)
    pic_div.appendChild(image6)

    page_container_div.appendChild(pic_div)

    let description_div = document.createElement('div')
    description_div.classList.add('text_about_product')
    
    let p7 = document.createElement('p')
    p7.innerHTML="Hümik Fulvik Asit: <br>%40 organik madde içerir. Köklendirici bir üründür. Kullanan musterilemiz piyasadaki en iyi humik asiti olduğuna dair geri dönüş sağlamışlardır. Humik asit konusunda da aynı şekilde memnuniyet garantisi vermekteyiz. Bu ürünün asıl amacı köklendirmeyi arttırmaktır. Aynı zamanda toprağın pH değerini düzenler ve bitkiye fazladan kuvvet verir. Kullanım şekli olarak, fide dikiminden 1 hafta sonra kullanılması tavsiye edilir. Miktar olarak ise her 1 dönüm arazi icin kullanılacağı ürüne bağlı olarak 0.5-1 litre kullanılması tavsiye edilir. Ürünümüzün damlamadan 15 günde 1, toplamda 3 kere uygulama ile kullanılması önerilmektedir."

    let p8 = document.createElement('p')
    p8.innerHTML="Üre Amonyum Nitrat Sülfat Çözeltisi: <br><br>Günümüzdeki katı üre fiyatlarındaki artış ve piyasada amonyum nitrata ulaşılamadığı icin ürün bu sebepten dolayı tasarlanmıştır. Her rahat bir kullanım hem de uygun fiyatından ötürü piyasada çok talep aldığımız bir ürünümüzdür. İcinde %32 üre azotu, %8 amonyum azotu ve %8 nitrat azotu bulundurmaktadır. Ürün kullanıldığı bitkiye hızlı bir şekilde boy artışı sağlamaktadır. Kullanım şekli olarak, damlama yöntemi ile her 1 dönüm arazi icin 3-4 litre kullanılması önerilmektedir.<br><br></br>Ürünün maliyeti, her 20 litrelik ambalaj icin 101.6₺dir.<br>Satış fiyatı ise, 20 litrelik ambalajlarda satılıp, 20 Litresi 200₺ + KDVdir"

    let p9 = document.createElement('p')
    p9.innerHTML="Sıvı Deniz Yosunu Gubresi: <br> Sıvı deniz yosunu, saf deniz yosunu konsantresi, alginik asit, organik karbon, gibberalik asit, aminoasitler ve özel bitki besinleri ile etkili bir kombinasyonudur. Deniz yosunu ekstraktindan elde edilen oksinlerin ve sitokininlerin fiziksel yöntemleri ile oluşan bioaktivatördür. Faydaları, kök hacminin ve yatay kök gelişiminin artmasına yardımcı olur. Böylece bitkinin toprağa daha sıkı tutunmasını ve gerekli besin maddelerini daha iyi emilimini sağlar. Bitki ve meyve gelişimindeki tüm doğal surecleri hizlandirir. Uygulama meyve çiçeklenme döneminin basında ve meyve tutumundan sonra başlar. Gerekli sonuçları elde etmek için en az 2 uygulama yeterlidir. Bakteri ve mantarlara karşı doğal bir savunma sağlar. Özellikle meyve boyutunu geliştirmek ve estetik kaliteyi arttırmak istenen ürünlerde güvenle kullanılabilir. Aşırı soguk, yüksek sıcaklık, kuraklık ve tuzluluk gibi çeşitli stres koşullarına karşı bitkinin direncini arttırır. 100 litre suya 300 cc kullanımı tavsiye edilir. Damlama yöntemi ile ise 1 dekara 600-1000 cc kullanımı tavsiye edilir. Bu ürünün içinde her 1 litre icin 150 gram deniz yosunu, 175 gram aminoasit, 200 cc Gibberelik asit, 200 gram ETHA ile şelatlandırılmış olup sitrik asit aracılığı ile 4.6 pH değerine sabitlendirilmistir."
    
    let p11 = document.createElement('p')
    p11.innerHTML="Some description of 5th product here"

    description_div.appendChild(p7)
    description_div.appendChild(p8)
    description_div.appendChild(p9)
    description_div.appendChild(p11)

    page_container_div.appendChild(description_div)

    main.appendChild(page_container_div)
})

document.querySelector("#contact_link").addEventListener("click", event=>{
    let page_container_div = document.createElement('div')
    page_container_div.classList.add('page_container')
    page_container_div.classList.add('contact_page')

    let contact_column = document.createElement('div')
    contact_column.classList.add('text_about_product')

    let efe_contact = document.createElement('p')
    efe_contact.innerHTML="Efe Atesler<br>CEO & Founder<br>0530 50 540 33 <br>efeatesler@email.com"

    contact_column.appendChild(efe_contact)
    page_container_div.appendChild(contact_column)
    
    let pic_div = document.createElement('div')
    pic_div.classList.add('in_line_picture')
    pic_div.classList.add('map')

    let iframe = document.createElement('iframe')
    iframe.src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3125.940496607002!2d27.248641315336343!3d38.41973997964719!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14b963699c9340c7%3A0xa787e8d8f7c5f948!2zR8O8cnDEsW5hciwgNzIzMi81LiBTayAxN0EsIDM1MDYwIEJvcm5vdmEvxLB6bWlyLCBUdXJrZXk!5e0!3m2!1sen!2sca!4v1640813470361!5m2!1sen!2sca" 
    iframe.width="600" 
    iframe.height="450" 
    iframe.style="border:0;" 
    iframe.allowfullscreen="" 
    iframe.loading="lazy"

    pic_div.appendChild(iframe)
    page_container_div.appendChild(pic_div)
    
    main.appendChild(page_container_div)

})


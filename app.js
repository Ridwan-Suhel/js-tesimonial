// local reviews data 
let reviews = [
    {
        id: "01",
        name: "Ridwan Suhel",
        job: "Web Developer",
        img: "https://github.com/Ridwan-Suhel/hex-color-flipper/blob/main/img/ridwan.png?raw=true",
        text: "Perferendis officia dolore exercitationem, porro laborum nobis, fugiat, quos veniam odit totam sit et quae sint at magnam ipsam deleniti? Aperiam sint",
    },
    {
        id: "02",
        name: "Mashrafee",
        job: "Cricketer",
        img: "https://github.com/Ridwan-Suhel/hex-color-flipper/blob/main/img/mash.png?raw=true",
        text: "Perferendis officia dolore exercitationem, porro laborum nobis, fugiat, quos veniam odit totam sit et quae sint at magnam Aperiam sint consectetur ex quaerat",
    },
    {
        id: "03",
        name: "Messi",
        job: "Footbaler",
        img: "https://github.com/Ridwan-Suhel/hex-color-flipper/blob/main/img/messi.png?raw=true",
        text: "Perferendis officia dolore exercitationem, porro laborum nobis, fugiat, quos veniam odit totam sit et quae sint at magnam ipsam deleniti? Aperiam sint consectetur ex quaerat",
    },
    {
        id: "04",
        name: "Neymar",
        job: "Footbaler",
        img: "https://github.com/Ridwan-Suhel/hex-color-flipper/blob/main/img/neymar.png?raw=true",
        text: "Perferendis officia dolore exercitationem, porro laborum nobis, fugiat, quos veniam oditmagnam ipsam deleniti? Aperiam sint consectetur ex quaerat",
    },
    {
        id: "05",
        name: "Alex Hales",
        job: "Business man",
        img: "https://github.com/Ridwan-Suhel/hex-color-flipper/blob/main/img/ronaldo.png?raw=true",
        text: "Perferendis officia dolore exercitationem, porro laborum nobis, fugiat, quos veniam odit totam sit et at magnam ipsam deleniti? Aperiam sint consectetur ex quaerat",
    },
    {
        id: "06",
        name: "Warner",
        job: "Cricketer",
        img: "https://github.com/Ridwan-Suhel/hex-color-flipper/blob/main/img/warner.png?raw=true",
        text: "Perferendis officia dolore exercitationem, porro laborum nobis, fugiat, quos veniam odit totam sit et quae sint at magnam ipsam deleniti? Aperiam sint consectetur ex quaerat",
    }

]

// select items 
const authorImage = document.querySelector(".person-img");
const author = document.querySelector(".author");
const job = document.querySelector(".job");
const info = document.querySelector(".info");
const cardNumber = document.querySelector(".card-number");

const nextBtn = document.querySelector(".btn-next");
const prevBtn = document.querySelector(".btn-prev");
const randomBtn = document.querySelector(".random-btn");

// starting items 
let currentItem = 0;

// load initial items 
window.addEventListener("DOMContentLoaded", function(){
    showPerson(currentItem);
})


// show person base on item 
function showPerson(itemOfPerson){
    const item = reviews[itemOfPerson];
    authorImage.src = item.img;
    author.textContent = item.name;
    job.textContent = item.job;
    info.textContent = item.text;
    cardNumber.textContent = item.id;
}


// show next person
nextBtn.addEventListener("click", function(){
    currentItem++;
    if(currentItem > reviews.length - 1){
        currentItem = 0;
    }
    showPerson(currentItem);
})

// prev next person
prevBtn.addEventListener("click", function(){
    currentItem--;
    if(currentItem < 0){
        currentItem = reviews.length - 1;
    }
    showPerson(currentItem);

})


// random number of item 
randomBtn.addEventListener("click", function(){
    currentItem = Math.floor(Math.random() * reviews.length);
    showPerson(currentItem);
})















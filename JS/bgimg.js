// make an array of img files

const bgImgs = [
{ 
    img: "01.png",
    alt: "01.png" 
},
{ 
    img: "02.png",
    alt: "02.png", 
},
{ 
    img: "03.png",
    alt: "03.png",
},
{ 
    img: "04.jpg",
    alt: "04.jpg",
},
{ 
    img: "05.jpg",
    alt: "05.jpg",
},
{ 
    img: "06.png",
    alt: "06.png",
},
{ 
    img: "07.png",
    alt: "07.png",
},
{ 
    img: "08.jpg",
    alt: "08.jpg",
},
{ 
    img: "09.jpg",
    alt: "09.jpg",
},
{ 
    img: "10.jpg",
    alt: "10.jpg",
},
{ 
    img: "11.png",
    alt: "11.png",
},
{ 
    img: "12.png",
    alt: "12.png",
},
{ 
    img: "13.png",
    alt: "13.png",
},
{ 
    img: "14.jpg",
    alt: "14.jpg",
},
{ 
    img: "15.png",
    alt: "15.png",
},
];

// randomly select the array index
const chosenImg = bgImgs[Math.floor(Math.random()*bgImgs.length)];

// put this random index in the HTML
//document.querySelector(".bgimg").src = `img/${chosenImg.img}`;
//document.querySelector(".bgimg").alt = chosenImg.alt;
document.body.style.backgroundImage = `url('img/${chosenImg.img}')`;

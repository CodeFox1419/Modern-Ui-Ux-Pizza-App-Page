import { data } from "./data.js";
const cards = document.querySelectorAll('.card');
const textBox = document.querySelectorAll('.img,.dess,.head,.cui,.list,.rat-num,.info-head,.info-para')
const link = document.querySelectorAll('.link');
const like = document.getElementById('like');
const dislike = document.getElementById('dislike');

// like & dislike functionality

like.addEventListener('click',(e)=>{
    if(dislike.classList.contains('fa-solid')){
        dislike.classList.remove('fa-solid')
    }
    like.classList.toggle('fa-solid')
})
dislike.addEventListener('click',(e)=>{
    if(like.classList.contains('fa-solid')){
        like.classList.remove('fa-solid')
    }
    dislike.classList.toggle('fa-solid')
})

//  functionality to show clicked card data in display section

cards.forEach((e)=>{
    e.addEventListener('click',(e)=>{
        const { parentNode } = e.target;
            for (var i = 0; i < data.length; i++) {
                if (data[i].id == parentNode.id) {
                    cards[i].classList.add('sel');
                    textBox[0].classList.add("img_a")
                    setTimeout(animate,500,i)
                    setTimeout(addData,500,i);
                    textBox[0].addEventListener('animationend',()=>{
                        textBox[0].classList.remove("img_a")
                    })                
                }
                else{
                    cards[i].classList.remove('sel')
                }
            }
    })
})

// function to add data of clicked card to display section 

const addData = (i)=>{
    textBox[0].src = data[i].image;
    textBox[1].textContent = data[i].type;
    textBox[2].textContent = data[i].title;
    textBox[3].textContent = data[i].cuisines[0];
    textBox[4].innerHTML = data[i].ingredients.join('\n');
    textBox[5].textContent = data[i].rating;
    textBox[6].textContent = data[i].title;
    textBox[7].textContent = data[i].summary;
}

//  function to add data to cards

const addCardData = ()=>{
    data.map((e,i)=>{
        cards[i].attributes[1].textContent = e.id
        cards[i].children[0].src = e.image;
        cards[i].children[1].textContent = e.title
    })
    textBox[0].src = data[0].image;
    textBox[1].textContent = data[0].type;
    textBox[2].textContent = data[0].title;
    textBox[3].textContent = data[0].cuisines[0];
    textBox[4].innerHTML = data[0].ingredients.join('\n');
    textBox[5].textContent = data[0].rating;
    textBox[6].textContent = data[0].title;
    textBox[7].textContent = data[0].summary;
} 

// Adding data on page load

window.addEventListener('load',()=>{
    addCardData();
})

// functionality to show or hide content

link.forEach((e)=>{
    e.addEventListener("click",(e)=>{
        e.preventDefault()
        if(e.target.id === "over"){
            document.querySelector('.content').classList.remove('show')
            document.querySelector('.i-info').classList.add('show')
        }else if(e.target.id === 'ingr'){
            document.querySelector('.i-info').classList.remove('show')
            document.querySelector('.content').classList.add('show')
        }
    })
})

// Animation on Load

window.addEventListener('load',()=>{
    const tl = gsap.timeline();
    tl.set('.nav',{
        opacity:0,
        y:-100,
    }).to('.nav',{
        y:0,
        opacity:1,
        delay:0.6,
        ease: "power2.out"
    })
    gsap.from('.des',{
        y:150,
        opacity:0,
        delay:1,
        duration:2,
        ease: "power2.out"
    })
    gsap.from('.dess',{
        y:-150,
        opacity:0,
        delay:1,
        duration:2,
        ease: "power2.out"
    })
    gsap.from('.head',{
        x:150,
        opacity:0,
        delay:1,
        duration:2,
        ease: "power2.out"
    })
    gsap.from('.con',{
        y:150,
        opacity:0,
        delay:1,
        duration:2,
        ease: "power2.out"
    })
    gsap.from('.card-wrapper',{
        y:150,
        opacity:0,
        delay:1,
        duration:2,
        ease: "power2.out"
    })
    gsap.from('.img',{
        keyframes: {
            "0%":   { opacity:0,y: "300%",x: "-500%"},
            "75%":  { opacity:0,y: "50%",x: "-250%"},
            "100%": { y: 0 ,x: 0,opacity:1},
           },
           ease: 'none',
           duration:2,
    })
    gsap.from('.circle',{
        keyframes: {
            "0%":   { opacity:0,y: "300%",x: "-500%"},
            "75%":  { opacity:0,y: "50%",x: "-250%"},
            "100%": { y: 0 ,x: 0,opacity:1},
           },
           ease: 'none',
           duration:2
    })
})

//  Animation for elements when they update

const animate = (i)=>{
    const clArr = ["#ffa166","#fed766","#fec89a","#ff9b54","#F8DBB4"];
    var clr = clArr[Math.floor(Math.random() * clArr.length)]
    gsap.set('#path',{
        fill: clr,
        ease: "linear"
    })
    gsap.set('#rating',{
        backgroundColor: clr,
        ease: "linear"
    })
    if(i%2 == 0){
        gsap.from('.com_e',{
            y: 10,
            opacity: 0,
            stagger: 0.4
        })
        gsap.from('.com_i_e',{
            x: 10,
            opacity: 0,
            stagger: 0.4
        })
        gsap.from('.rat-num',{
            y: 30,
            opacity: 0,
            ease: 'linear'
        })
    }else{
        gsap.from('.com_e',{
            y: -10,
            opacity: 0,
            stagger: 0.4
        })
        gsap.from('.com_i_e',{
            x: -10,
            opacity: 0,
            stagger: 0.4
        })
        gsap.from('.rat-num',{
            y: -30,
            opacity: 0,
            ease: 'linear'
        })
    }
}
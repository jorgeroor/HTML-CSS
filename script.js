const box = document.querySelector('.box');
const h1 = document.querySelector('h1');
const para = document.querySelector('.para');

/*function randomcolor(){
    const rand_int = Math.floor(Math.random()*255)
    let color = `rgb(${rand_int},${rand_int},${rand_int})`
    h1.style.color = color
    para.style.color = color
}*/

function randomcolor(){
    colors = ['red','green','yellow','blue','blueviolet','brown','chartreuse','chocolate','white']
    const rand_int = Math.floor(Math.random()* colors.length )
    let color = colors[rand_int]
    h1.style.color = color
    para.style.color = color
};

setInterval(randomcolor,2000);



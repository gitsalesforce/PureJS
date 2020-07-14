//Choose a random color
const button = document.querySelector('button')
const body = document.querySelector('body')
//Hex color codes
const inn = document.getElementById('colorcode');
//Unique colors
const uni = document.getElementById('unique');
//code converted
constrvalue=document.getElementById('rval');
constgvalue=document.getElementById('gval');
constbvalue=document.getElementById('bval');
var colormap = new Set();//Unique colors
var hue = 0;
//Base model
const colors = ['red', 'green', 'blue', 'yellow', 'pink', 'purple']

body.style.backgroundColor = 'violet'
//button.addEventListener('click', automaticBackground)
//color choosing from Array
function changeBackground(){
const colorIndex= parseInt(Math.random()*colors.length)//choose random
body.style.backgroundColor = colors[colorIndex]//set the color
colormap.add(colorIndex);
inn.innerHTML=colors[colorIndex];
uni.innerHTML=colormap.size;
}

//Random color changer
function changeAuto(){
const randomcolor = Math.floor(Math.random()*16777215).toString(16);
body.style.backgroundColor="#"+randomcolor;
inn.innerHTML="#"+randomcolor;
}
//Automatic color chnaging
function mainfunc(){
const randomcolor = Math.floor(Math.random()*16777215).toString(16);
body.style.backgroundColor="#"+randomcolor;
colormap.add(randomcolor);//adding unique colors
inn.innerHTML="#"+randomcolor;
uni.innerHTML= colormap.size;
constrvalue.innerHTML=(hexToRgb(randomcolor).r);
constgvalue.innerHTML=(hexToRgb(randomcolor).g);
constbvalue.innerHTML=(hexToRgb(randomcolor).b);
context.fillStyle = 'hsl(' + randomcolor + ', 100%, 50%)';
context.fillRect(0, 0, context.canvas.width, context.canvas.height);
}
//HEXtoRGB
function hexToRgb(hex) {
var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
return result ? {
    r: parseInt(result[1], 16),
    g: parseInt(result[2], 16),
    b: parseInt(result[3], 16)
} : null;
}
setInterval(mainfunc,1000);
let colorbox = document.querySelector('.color_win');
const container = document.querySelector(".inner-list");
let color;
let count = 0;
let i = 0;

function updateColor(){
    let red = document.querySelector('.inputRed').value;
    let green = document.querySelector('.inputGreen').value;
    let blue = document.querySelector('.inputBlue').value;
    color = "rgb(" + red + "," + green + "," + blue + ")";
    colorbox.style.backgroundColor = color;
}

document.querySelector('.inputRed').addEventListener('input', updateColor);
document.querySelector('.inputGreen'). addEventListener('input', updateColor);
document.querySelector('.inputBlue').addEventListener('input', updateColor);

function Create(){
    if(count < 15){
        const newBlock = document.createElement("div");
        newBlock.className = "newblock";
        container.appendChild(newBlock)
        newBlock.style.backgroundColor = color;
        count++;
    }
    else{
        const oldBlock = container.querySelectorAll('.newblock');
        oldBlock[i].style.backgroundColor = color;
        i++;
        if(i >= 15){
            i = 0;
        }
    }
}

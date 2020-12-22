let noOfPicks = 6;
var colors = [];
let pickedColor;

//listeners
var squares = document.querySelectorAll(".square");
let colorDisplay = document.getElementById("colorDisplay");
let messageDisplay = document.querySelector("#message");
const resetButton = document.querySelector("#reset");
const modeButtons = document.querySelectorAll(".mode");
const h1 = document.querySelector("h1");

init();

function init(){
    //mode button listeners
    setUpModeButtons();
    setUpSquares();
    resetButton.addEventListener("click",function(){
        reset();
    });
    reset();
};

//FUNCTIONS ON START
//Set up Easy/Hard Mode
function setUpModeButtons(){
    for (let i = 0; i < modeButtons.length; i++) {
        modeButtons[i].addEventListener("click", function(){
            modeButtons[0].classList.remove("selected");
            modeButtons[1].classList.remove("selected");
            this.classList.add("selected");
            this.textContent === "Easy" ? noOfPicks = 3: noOfPicks = 6;
            reset();
        });
    };
};

//Set up Colors and checks for the right one
function setUpSquares(){
    for (let i = 0; i < squares.length; i++) {
        squares[i].addEventListener("click", function(){
            var clickedColor = this.style.backgroundColor;
    
            if(clickedColor === pickedColor){
                messageDisplay.textContent = "Correct!";
                changeColors(clickedColor);
                h1.style.backgroundColor = clickedColor;
    
                resetButton.textContent = "Play Again?";
            }
            else{
                this.style.backgroundColor = "#232323";
                messageDisplay.textContent = "Try Again!";
            }
        });
    }
};

//load on start as well as on buttons
function reset(){
    colors = generateRandomColors(noOfPicks);
    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor;

    resetButton.textContent = "New Colors";
    messageDisplay.textContent = "";
    for (let i = 0; i < squares.length; i++) {
        if(colors[i]){
            squares[i].style.display = "block"; 
            squares[i].style.backgroundColor = colors[i];  
        }
        else{
            squares[i].style.display = "none";
        }
        
    };
    h1.style.backgroundColor = "steelblue";

};


// MINOR FUNCTIONS
//
function changeColors(color){
    for (let i = 0; i < squares.length; i++) {
        squares[i].style.backgroundColor = color;
    }
}

//Picks a color from the set colors on screen as picked color
function pickColor(){
    let random = Math.floor(Math.random() *  colors.length);
    return colors[random];
};

//generates list of random colors using randomColor()
function generateRandomColors(num){
    let arr = [];

    for (let i = 0; i < num; i++) {
        arr.push(randomColor());
    }
    return arr;
}

//generates a randomcolor with RGB scheme
function randomColor(){
    let r = Math.floor(Math.random() * 256);
    let g = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);
    return "rgb(" + r + ", " + g + ", " + b +")";
};
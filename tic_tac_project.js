//reset game button
var Restart = document.querySelector("#reset_button");

//grab all the squares
var squares = document.querySelectorAll("td");

//clear all the squares
function clearBoard(){
    for(var i=0 ; i < squares.length; i++){
        squares[i].textContent = ' ';
    }
}

Restart.addEventListener("click",clearBoard);

//change marker
function changeMarker(){
    if(this.textContent === ' '){
        this.textContent = 'X';
    }else if (this.textContent === 'X'){
        this.textContent = 'O';
    }else {
        this.textContent= ' ';
    }
}

for(var i =0;i<squares.length;i++){
    squares[i].addEventListener('click',changeMarker)
}
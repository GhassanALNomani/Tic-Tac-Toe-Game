// Function navigate to another page
$('#butGame').on('click', () =>{
    location.href = "game.html"
})


// Start function  Start Game

var turn = "X";

$('#butStart').on('click', ()=>{
    setMessage(turn + " start game")
})

function setMessage(msg){
    $('.boardInst').text(msg);
}

// Start move
function move(spot){ 
    if(spot.innerText == ""){
        spot.innerText = turn;
        switchTurn();
    }else{
        alert("Select another spot, It's already selected")
    }
}

function switchTurn(){
    if(turn == "X"){
        turn = "O";
    }else{
        turn = "X";
    }

    setMessage("It's " + turn + " Your turn");
}






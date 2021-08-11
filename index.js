let input = document.querySelectorAll(".btn");
let message = document.getElementById("message");
let play = document.getElementById("play-btn");

let plr;
plr = "1";


play.addEventListener("click", function () {
    message.innerHTML = "";
    reset(input);
});

let check_Status = function (input) {
    if((input[0].innerText == input[1].innerText && input[1].innerText == input[2].innerText)&&(input[0].innerText != "")) return true;
    else if((input[3].innerText == input[4].innerText && input[4].innerText == input[5].innerText)&&(input[3].innerText != "")) return true;
    else if((input[6].innerText == input[7].innerText && input[7].innerText == input[8].innerText)&&(input[6].innerText != "")) return true;

    else if((input[0].innerText == input[3].innerText && input[3].innerText == input[6].innerText)&&(input[0].innerText != "")) return true;
    else if((input[1].innerText == input[4].innerText && input[4].innerText == input[7].innerText)&&(input[1].innerText != "")) return true;
    else if((input[2].innerText == input[5].innerText && input[5].innerText == input[8].innerText)&&(input[2].innerText != "")) return true;
    
    else if((input[0].innerText == input[4].innerText && input[4].innerText == input[8].innerText)&&(input[0].innerText != "")) return true;
    else if((input[6].innerText == input[4].innerText && input[4].innerText == input[2].innerText)&&(input[2].innerText != "")) return true;

    return false;
}

let reset = function (input) {
    for(let i = 0; i < 9; i++)
    {
        
        input[i].innerText = "";
        console.log(input[i].innerText);

    }
    message.innerHTML = "";

}

play.addEventListener("click", function () {
    message.innerHTML = "";
    reset();
});


let rst = document.getElementById("reset");
rst.addEventListener("click", function () {
    reset(input);
})
for (let i = 0; i <= 9; i++) {
    input[i].addEventListener("click", function () {
        console.log(i, input[i]);
        if ((plr == "1")&&(input[i].innerHTML == "")) {
            input[i].innerHTML = "X";
            if(check_Status(input)) {
                reset(input);
                // alert("Player 1 won");
                message.innerHTML = "Player 1 won Click! ~Play~ to play again";
                
            }
            plr = "0";
            
        }
        else if ((plr == "0")&&(input[i].innerText == "")) {
            input[i].innerHTML = "O";
            if(check_Status(input)) {
                // alert("Player 2 won");
                reset(input);
                message.innerHTML = "Player 2 won Click! ~Play~ to play again";
            }
            plr = "1";

        }
        
        
    })
}



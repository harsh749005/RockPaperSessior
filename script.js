let winStatus = document.querySelector(".status");
let image = document.querySelector(".image");
let userimage = document.querySelector(".userimage");
let reload = document.querySelector(".reloaddiv");
let start = document.querySelector(".start");
let image_name ,user_image_url,computer;
let player = document.querySelector(".user");

start.addEventListener("click",()=>{
    let tie = new Audio("tie.wav");
    
    let audio = new Audio("win.wav");
    let loss = new Audio("loss.wav");
    let player_name;

    player_name = prompt("Enter Player Name");
    
    const user=prompt("Enter Your Choice in capital letters like : ROCK PAPER SESSIORS");
    
    const array = ["ROCK","PAPER","SESSIORS"];
    
    
    
    const randno = Math.floor(Math.random() * array.length);
    image_name = "image"+randno+".png";
    image.src = image_name;
    
    if (user == "ROCK") {
        user_image_url =  "image"+0+".png";
        userimage.src = user_image_url;
    } else if(user == "PAPER"){
        user_image_url =  "image"+1+".png";
        userimage.src = user_image_url;
    }
    else{
        user_image_url =  "image"+2+".png";
        userimage.src = user_image_url;
    }
    computer = array[randno];
    console.log(user);
    console.log(computer);
    if (computer == user) {
        console.log("Tie");
        winStatus.textContent = "Tie";
        tie.play();
    } else if(computer == "ROCK" && user =="SESSIORS") {
        console.log("Computer Win"+computer);
        winStatus.textContent = "Computer Win";
        loss.play();
    }
    else if(computer == "ROCK" && user =="PAPER") {
        console.log("User Win"+user);
        winStatus.textContent = player_name+"  "+"Win";
        audio.play();
    }
    else if(computer == "PAPER" && user =="ROCK") {
        console.log("Computer Win"+computer);
        winStatus.textContent = "Computer Win";
        loss.play();
    }
    else if(computer == "PAPER" && user =="SESSIORS") {
        console.log("User Win"+user);
        winStatus.textContent =  player_name+"  "+"Win";
        audio.play();
    }
    else if(computer == "SESSIORS" && user =="PAPER") {
        console.log("Computer Win"+computer);
        winStatus.textContent = "Computer Win";
        loss.play();
    }
    else if(computer == "SESSIORS" && user =="ROCK") {
        console.log("User Win"+user);
        winStatus.textContent =  player_name+"  "+"Win";
        audio.play();
    }
    

})

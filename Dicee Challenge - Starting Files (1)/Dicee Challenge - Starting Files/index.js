//  generate two different random Numbers.
 
 let randomNumber1=Math.floor(Math.random()*6 + 1);
 let randomNumber2=Math.floor(Math.random()*6 + 1);

//  grab different dice depending on random number
// dice 1.
document.querySelector('.img1').setAttribute("src", `images/dice${randomNumber1}.png`);

// dice 2.
document.querySelector('.img2').setAttribute("src", `images/dice${randomNumber2}.png`);

// Determine winner by tapping into h1.
let winner=document.querySelector('h1');

// refresh
let timeout= setTimeout(()=> winner.innerText='Refresh me',6000);


if (randomNumber1>randomNumber2){
    winner.innerText='Player 1 wins';
    timeout;
}else if(randomNumber2>randomNumber1){
    winner.innerText='Player 2 wins';
    timeout;
} else{
    winner.innerText='Draw';
    timeout;
}
    















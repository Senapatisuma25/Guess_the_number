const input=document.querySelector('input')
const guess=document.querySelector('.guess')
const checkbutton=document.querySelector('button')
const remainchances=document.querySelector('.chances')
input.focus()
let randomnum = Math.floor(Math.random()*100)
chance=10;
console.log(randomnum)
checkbutton.addEventListener('click',() =>{
    chance--;
    let inputvalue=input.value
    console.log(inputvalue)
    let text=checkbutton.innerText
    if(text=='Replay')
    {
        window.location.reload();
    }
    else if(inputvalue==randomnum)
    {
      guess.textContent='Congratualtions!! You are Right'
      checkbutton.textContent='Replay'
    }
    else if(inputvalue>randomnum && inputvalue<100)
    {
        remainchances.innerHTML=chance
        guess.textContent='Your guess is high'
    }
    else if(inputvalue<randomnum && inputvalue>0)
    {
        remainchances.innerHTML=chance
        guess.textContent='Your Guess is low'
    }
    if(chance==0)
    {
        checkbutton.textContent='Replay'
        input.disabled=true
        inputvalue=''
        guess.textContent='You lost the game'
    }
    if(chance<0)
    {
        window.location.reload()
    }
})
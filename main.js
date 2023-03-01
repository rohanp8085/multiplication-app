const num1 = Math.ceil(Math.random()*10);
const num2 = Math.ceil(Math.random()*10);

const form = document.querySelector("form")

const input = document.querySelector("#input")

const scoreone = document.querySelector("#scoreone")

const question = document.querySelector("#question")
// console.log(question)

let score = JSON.parse(localStorage.getItem("score"))
// console.log(score)

if(!score){
    score = 0;
}
scoreone.innerText = `score: ${score}`
question.innerText = `What is ${num1} multiply by ${num2}`
// console.log(question)

const correctAns = num1 * num2

form.addEventListener("submit", () => {
     
      const userAns = +input.value;
    if (userAns === correctAns) {
        score++;
        updateLocalStorage();
    }else{
        score--;
        updateLocalStorage();
    }
   
});


function updateLocalStorage() {
    localStorage.setItem("score" , JSON.stringify(score))
}

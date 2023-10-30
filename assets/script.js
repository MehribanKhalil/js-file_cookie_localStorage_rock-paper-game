// localStorage.setItem("ad",'mehi')
// localStorage.setItem("soyad",'xelilova')

// const ad=localStorage.getItem(ad)
// localStorage.removeItem("soyad")
// localStorage.clear();

// --------------------------------------------------------
// sessionStorage.setItem('username','mehi')
// sessionStorage.setItem('userSurname','khalil')

// --------------------------------------------------------
// cookies

// document.cookie="ad='mehi'; expire=Mon, 30 Oct 2023 12:00:00 GMT; path=/"
// document.cookie="ad=; expire=Sun 29 Oct 2023 12:00:00 GMT; path=/"

// --------------------------------------------------------
// const dosya=document.getElementById('file')

// dosya.addEventListener('change',e=>{
//     let file=e.target.files[0]
//     console.log(file.name);
// });

// ---------------------------------------------------
// task way1

// localStorage.setItem("name", "mehi");
// localStorage.setItem("surname", "xelilova");
// localStorage.setItem("password", "112233");

// const ad = localStorage.getItem("name");
// const soyad = localStorage.getItem("surname");
// const parol = localStorage.getItem("password");

// const p = document.createElement("p");
// p.innerHTML='...'

// document.body.append(p);

// way2

// const obj={
//     name :'mehi',
//     surname :'xelilova',
//     password :'666666666'
// }

// localStorage.setItem("obyekt" ,JSON.stringify(obj))

// const deyisen=JSON.parse(localStorage.getItem("obyekt"))

// const p = document.createElement("p");
// p.innerHTML=`${deyisen.name} ${deyisen.surname} ${deyisen.password}`

// document.body.append(p);

// ---------------------------------------------------
// task2 todo list

// const input = document.getElementById("input");
// const submitBtn = document.getElementById("button");
// const list = document.getElementById("list");
// const form = document.getElementById("form");
// const arr = [];

// submitBtn.addEventListener("click", (e) => {
//   e.preventDefault();
//   const inputValue = input.value;
//   const li = document.createElement("li");
//   const inp = document.createElement("input");
//   inp.setAttribute("type", "checkbox");

// //   li.textContent = inputValue;
//   inp.onclick = () =>
//       inp.checked ? li.classList.add("xett") : li.classList.remove("xett");

//   list.appendChild(li);
//   li.appendChild(inp);

//   arr.push(inputValue)

//   localStorage.setItem("arr",JSON.stringify(arr))

//   const deyisen=JSON.parse(localStorage.getItem("arr"))

//   deyisen.forEach(element => {
//     li.textContent = element;
//   });

//   console.log(deyisen);

//   form.reset();
// });



// ---------------------------------------------------
// task3  (buttona basanda localstorage a elave edilsin . sehife refresh olunanda eger local storage da varsa inputlarin yerine yazilsin)


// const userName = document.getElementById("name");
// const userPassword = document.getElementById("password");
// const submitBtn =document.getElementById("submit");


// const deyisen=JSON.parse(localStorage.getItem("obyekt"))

// console.log(deyisen);

// if (deyisen) {
//     userName.value=deyisen.ad
//     userPassword.value=deyisen.parol
// }   

// submitBtn.addEventListener("click",(e)=>{
//     e.preventDefault()
//     nameValue=userName.value
//     passwordValue=userPassword.value

//     obj={
//         ad:nameValue,
//         parol:passwordValue
//     }


//     localStorage.setItem("obyekt",JSON.stringify(obj))


// })


// -----------------------------------------------------------
// task Rock, Paper and Scissor Game

// const rock=document.getElementById('rock')

// let userChoice = prompt('please choose one from rock, paper or scissors, and type into the box below');

// console.log(userChoice.toLocaleLowerCase());

// const choices=['rock','paper','scissors']

// const randomNum=Math.floor(Math.random()*3)

// // console.log(randomNum);

// const compChoice=choices[randomNum]

// const heading = document.getElementById('heading')
// heading.textContent=(`your choice is ${userChoice} computer choice is ${compChoice}`)
// console.log(`your choice is ${userChoice} computer choice is ${compChoice}`);

// if (userChoice===compChoice) {
//     alert('berabere !!!')
// }
// else if(userChoice==='rock' && (compChoice==='paper' || compChoice==='scissors') ){
//     alert('user qazandi')
    
// }
// else if(userChoice==='scissors' && compChoice==='paper' ){
//     alert('user qazandi')
    
// }
// else if(userChoice==='scissors' && compChoice==='rock' ){
//     alert('comp qazandi')
// }
// else if(userChoice==='paper' && compChoice==='rock' ){
//     alert('comp qazandi')
// }
// else if(userChoice==='paper' && compChoice==='rock' ){
//     alert('comp qazandi')
// }
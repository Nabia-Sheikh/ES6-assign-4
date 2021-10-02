/*Question # 01
We have an array of cities. Assign each city in different individual variable. hint ['LA', 'new york', 'karachi','islamabad']
*/
const arrCity = ['LA', 'new york', 'karachi','islamabad'] ;
let [val1 , val2 , val3 , val4 ] = arrCity ;
console.log(val1,val2,val3,val4);

/*Question # 02
//We have a student object. Assign each property in different and individual variable in JS {name:'Marry',age:20,rollNo:2}
*/
let stdObj = {
    fName : "Nabia",
    lName : "Sheikh",
    age : "24",
    edu : "Under Graduate"
}
let {fName,lName,age,edu} = stdObj ;
console.log(fName,lName,age,"years old",edu);

//Question # 03
//A function is taking 5 arguments and You have to pass it through an array.
function foo(...myArr){
   console.log(myArr); 
};
const myArr = [1,2,3,4,5];
foo(myArr);

/*
Question # 04
Given an array of firstname and an array of last name. First check both array size is equal or not, if equal then make third new array which has first last name concat value
let firstNames = ['maryam', 'hira', 'faiza', 'aisha']
let lastNames = ['khan', 'ayub', 'aziz', 'yasin']
['maryam khan', 'hira ayub', 'faiza aziz', 'aisha yasin']
*/
let firstNames = ['maryam', 'hira', 'faiza', 'aisha']
let lastNames = ['khan', 'ayub', 'aziz', 'yasin']
let newArr = []
if(firstNames.length == lastNames.length){
    firstNames.map((a,b)=>{
       newArr =[...newArr, a + " " + lastNames[b]]
    
    })
    console.log(newArr);
}
else{
    alert("Length did not match!!!")
}

/*
Question # 05
Create an arrow function that takes array as an input and make each element double and then return an array 
*/
const Q5 = [1,2,3,4,5];
const myFunction = ([...Q5]) => {
   const double = Q5.map((a)=>{
       return a*2
   })
   console.log(double);
}
myFunction(Q5);

/*
Question # 06
Create an arrow function that takes a number and return square of a number
*/

const myFunc = (a) => {
       return a**2
   }

console.log(myFunc(6));

/*
Question # 07
question: `var authenticated=true;
        var allowed = authenticated ? (alert('you r allowed')) : (alert('you are not allowed))
        which alert will run
        Answer: First alert will run
*/

/*
Question # 08
question: ` What is the value of canDrive
        var age = 12;
        var canDrive = age > 18 ? 'yes' : 'no';
        `,
        answers: ['12', '18', 'yes', 'no'],
        which is correct answer
        Answer: This answer will return 'no'
*/

/*
Question # 09
question: `const dog='snickers'
        logdog(dog);
        function logdog(dog){
            console.log(dog)
        }
         function go(){
             const dog='sunny';
             logdog(dog)
         }`,
        answers: ['snickers sunny','sunny snickers','snickers snickers','sunny sunny'] 
        Answer: This code will execute 'snickers'
*/

/*let text = `He's often called "Johnny"`;
console.log(text)
Answer: This code will execute: He's often called "Johnny"
*/

/*
Question # 10
function welcomeMsg(name = "Everyone") {
    let msg = "Welcome " + name
    console.log(msg)
}
welcomeMsg("Faiza")
welcomeMsg()
I have called funtion twice , share the answer what is printed each time
Answer: Line 118 will execute 'Welcome Faiza' and line 119 will execute 'Welcome Everyone' 
*/

/*
Question # 11
make a promise that resolves after 5 sec. Use setTimeOut for resolve.
*/
let Age = 18;
let myPromise = new Promise( (resolve,reject) => {
if(Age > 17){
setTimeout(()=>{resolve('you are allowed')},3000)
}
else{
reject('you are not allowed')
}
})
myPromise.then(res => console.log(res))
.catch(err => console.log(err))



function welcomeMsg(name = "Everyone") {
    let msg = "Welcome " + name
    console.log(msg)
}
welcomeMsg("Faiza")
welcomeMsg()

fetch('https://api.openweathermap.org/data/2.5/weather?qty=karachi&appid=a1a36875d10fc7c4646740447a2926d0')
.then((x)=>x.json())
.then((y) => console.log(y))
.catch(err => console.log(err))

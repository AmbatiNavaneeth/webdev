// JavaScript (JS) is a lightweight, cross-platform programming language used to add behaviour and interactivity to web pages

// With JavaScript, you can:
// Respond to button clicks
// Validate forms
// Update web pages without reloading  
// Create animations and games
// Build web servers and mobile apps

// array methods with examples

// let original = [1, 2, [3, 4]];
// console.log(original.flat())
// console.log(original)

// let num=[1,2,3]
// console.log(num.reverse())
// console.log(num)

// nums=[1,2,3]
// nums.shift()
// console.log(nums)

// nums.unshift(0)
// console.log(nums)

// n=[10,20,30,40,50]
// n.splice(2,2)
// console.log(n)

// let nums=[10,4,2,60]
// nums.sort((a,b)=>b-a)
// console.log(nums)


// nums=[2,4,6,8]
// nums.reverse()
// console.log(nums)

// nums=[0,4,5]
// nums.fill(1);
// console.log(nums)

// --------------------------------------------------------------------------------

// nums=[1,2,3,4]
// neww=nums.map(nums=>nums*2)
// console.log(neww)


// n=[3,6,8,11]
// neww=n.filter(n=>n>6)
// console.log(neww)


// let str1="nav"
// let str2="an"
// console.log(str1.concat(str2))


// let nums=[2,4,6,8]
// neww=nums.slice(2,3)
// console.log(neww)


// let list=[1,2,3,[4,5,6],7,8,9,10]
// neww_list=list.flat()
// console.log(neww_list)


// let x=[1,2,3,4,5,6]
// let new_x=x.flatMap(x=>[x,0])  //we can insert any value in place of 0
// console.log(new_x)


// let nums=[3,8,1,2,9]
// let new_nums=nums.toSorted()
// console.log(new_nums)

// let neww=nums.toReversed()
// console.log(neww)

// let m=['jan','feb','march','april']
// let new_m=m.slice(1,3)
// console.log(new_m)


// let months=['jan','april','march']
// let new_months=months.with(1,"feb")
// console.log(new_months)


-------------------------------
  // function myfunc()
// {
//     console.log("hi")
//     console.log("hello")
// }
// myfunc()

// function sum(x,y){
//     s=x+y
//     return s
// }
// let val=sum(6,9)
// console.log(val)


// function val(x){
//     console.log("before")
//     return x
//     console.log("after")
// }
// let v=val(7)
// console.log(v)

//arrow fuctions
// const student=(x,y)=>{
//     return x*y
// }
// console.log(student(3,4))


// const greet=() =>{console.log("hello")}
// greet()

  
// const arrowSum=(a,b)=>{
//     console.log(a+b)
// }
// arrowSum(3,4)



  // //q)vowels count using function and arrow function
// function vowelscount(s){
//     let c=0
//     for (let ch of s){
//         if (ch=="a" || ch=="e" || ch=="i" || ch=="o" || ch=="u"  )
//             c++ 
//         }
//     console.log(c)
// }
// s="navan"
// vowelscount(s)


// const vowelcount=(s) =>{
//      let c=0
//     for (let ch of s){
//         if (ch=="a" || ch=="e" || ch=="i" || ch=="o" || ch=="u"  )
//             c++ 
//         }
//     return c    //here if we write return inside function then we need to use console outide the function to print the value
// }      
// s="navan"
// console.log(vowelcount(s))


//for each loop (onlt used for arrray not t0 srings)
// let arr=[1,4,7,0]
// arr.forEach(function printval(val){
//     console.log(val)
// })


// let cities=['hyd','goa','kerala','odisha']
// cities.forEach((val,idx)=>{
//     console.log(val.toUpperCase(),idx,cities)
// })   //o/p:- hyd 0 cities goa 1 cities kerala 2 cities odisha 3 cities


//printiong square of each number
// let values=[1,2,3,4,5]
// values.forEach((val)=>{
//     console.log(val*val)
// })


//sum of numbers in a list
// let val=[1,2,3,4]
// const output=val.reduce(res,curr)=>{
//     return res+curr}
// console.log(output)


//greatest number in a list
// let val=[1,2,3,4]
// const output=val.reduce((prev,curr)=>{
//     return prev>curr ? prev:curr})
// console.log(output)


// let val=[1,2,3,4]
// const output=val.reduce((prev,curr)=>{
//     return prev<curr ? prev:curr})
// console.log(output)


// let marks=[67,94,99,56,20]
// // let new_marks=marks.filter(marks=>marks>90)
// let topper=marks.filter((val)=>{
//     return val>90
// })
// console.log(topper)

//adding elements to a list 
// let num=prompt("ENTER S NUMBER")
// let new_num=[]
// for (let i=1;i<=num;i++){
//     new_num.push(i)
// }
// console.log(new_num)

//sum of elements
// let ans1=new_num.reduce((res,curr)=>{
//     return res+curr
// })
// console.log(ans1)

//multiplication of all elements
// let ans2=new_num.reduce((res,curr)=>{
//     return res*curr
// })
// console.log(ans2)

// const products = {
//     title:"Ball pen",
//     rating:4.0,
//     offer:5,
//     price:270
// };
// console.log(products);


// const insta_profile = {
//     username:"shradhakhapra",
//     posts:195,
//     followers: 5,
//     following: 4,
//     bio:"To educate someone is the highest privilege",
//     is_follow:false
// };
// console.log(typeof[insta_profile]);
// console.log(typeof insta_profile["username"]);


// //this is commented


// let num=prompt("Enter a number:")
// if (num%5==0){
//     console.log("YEs")
// }
// else{
//     console.log("No")
// }



// for (let i=1;i<=5;i++)
// {
//     console.log("hi")
// }


// for (c=0;c<=50;c++)
//     {
//     console.log("hi");
// }



// sum=0
// for (let i=1;i<=5;i++){
//     sum+=2
// }
// console.log(i) //error 
// console.log(sum)  //10


// sum=0
// for (var i=1;i<=5;i++){
//     sum+=2
// }
// console.log(i) //6
// console.log(sum)  //10


// a=1
// while (a<=5){
//     console.log("a =",a)
//     a++
// }  
// /*
// a = 1
// a = 2
// a = 3
// a = 4
// a = 5
// */


// let j=1
// do{
//     console.log(j)
//     j++
// }
// while (j<=5);  


// let s="HELLO"
// let len=0
// for (let i of s){
//     console.log(i)
//     len++
// }
// console.log(len)

// //even number
// for (let i=0;i<=100;i++){
//     if (i%2===0) {
//     console.log(i)

// }
// }

// //odd number
// for (let i=0;i<=100;i++){
//     if (i%2!==0) {
//     console.log(i)
// }
// }


// // game_num=25
// // let user_num=prompt("enter the num:")
// // while (game_num!=user_num){
// //     prompt("entered the wrong num please guess again")
// // }
// // console.log("congratulations you won:")


// let str="nav"
// console.log(str.length)
// console.log(str[0])


// //template literals
// let specialstring=`this is a special string`
// console.log(specialstring)


// let obj={
//     name:'nav',
//     age:20
// }
// special=`My name is ${obj.name} and my age is ${obj.age}`
// console.log(special)
// console.log(typeof special) //string


// let st="upper"
// let n=st.toUpperCase()
// console.log(n)



// let ss="upper"
// console.log(ss.replace("p","x"))  //uxper
// console.log(ss.replaceAll("p","x"))  //uxxer


// let name=prompt("enter name:")
// let user_name="@"+name+name.length
// console.log(user_name)

// let name=prompt("enter name:")
// let user_name=`@${name}${name.length}`
// console.log(user_name)


// let list=[1,2,3,4]
// console.log(list)
// console.log(typeof list)  //object

// list[0]=99
// console.log(list)  //[99,2,3,4]


// let l=["n","a","v"] //using for of loop
// for (let ele of l){
//     console.log(ele)
// }

// for (let i=0;i<l.length;i++){   //using for loop
//     console.log(l[i])
// }  
// //n
// //a
// //v  


// cities=["delhi","mumbai","kolkata"]
// for (let city of cities){
//     console.log(city) //delhi,mumbai,kolkata
//     console.log(city.toUpperCase()) //DELHI,MUMBAI,KOLKATA
//     console.log(city[0]) //d,m,k
// }


// //avg marks in a list
// let marks=[97,20,30,40]
// let sum=0
// for (let mark of marks){
//     sum+=mark
//     }
// console.log(sum/marks.length)  //46.75
// console.log(Math.floor(sum/marks.length))  //46 This rounds the result down to the nearest whole integer. (Python // Equivalent)
// console.log(Math.trunc(sum/marks.length))  //46 This directly cuts off the decimal point and everything after it
// console.log(Math.ceil(sum/marks.length))  //46



// let prices=[250,645,300,900,50]
// let offer=10/100
// let ans=[]
// for (let price of prices){
//     x=(price-(price*offer))
//     ans.push(x)}
// console.log(ans)  //225,580.5,270,810,45



// let nums=[10,4,2,60]
// nums.sort()
// console.log(nums)


// let lst=[1,2,3,[4,5,6],7,8,9,10]
// neww_list=lst.flat()
// console.log(neww_list)

// function val(x){
//     console.log("before")
//     return x
//     console.log("after")
// }
// let v=val(7)
// console.log(v)



// o987
// let num=10
// let new_num=[]
// for (let i=1;i<=num;i++){
//     new_num.push(i)
// }
// console.log(new_num)


// alert("hello")

// window.alert("hello")


// console.dir(window.document)
-----------------------------------------------
DOM-DOCUMENT OBJECT MODEL

-getElementById
let head = document.getElementById("heading");
console.dir(head);

-getElementsByClassName
let header = document.getElementsByClassName("head");
console.dir(header);

-getElementsByTagName
let para=document.getElementsByTagName("p");
console.dir(para);

-querySelector
let q=document.querySelector("p")
console.dir(q)

let qq=document.querySelector(".head")
console.dir(qq)

-querySelectorAll
let qqq=document.querySelectorAll(".head")
console.dir(qqq)

let query=document.querySelectorAll("p")
console.dir(query)

//creating div then performing operations on it
let div=document.querySelector("div")
console.dir(div)

//q)create h2 heading with any text and append another with it then display itin console
let h6=document.querySelector("h6")
console.dir(h6.innerHTML)
h6.innerText=h6.innerText+"..........."


q)create 3 divs access ekements and add some unique text to each of them and display in console
let divs=document.querySelectorAll(".myDiv")
let idx=1
for (d of divs){
    d.innerText=`new text ${idx}`
    console.log(d.innerText)
    idx++
}
divs[0].innerText=divs[0].innerText+" hiii"
divs[1].innerText=divs[1].innerText+" hello"
divs[2].innerText=divs[2].innerText+"world"

for(let i=0;i<divs.length;i++){
    divs[i].innerText="Unique text for Div "+(i+1);
    console.dir(divs[i].innerText)
}


attributes
-get attribute
let d=document.querySelector("div")
console.log(d.getAttribute('id')) 

let id=div.getAttribute('id')
console.log(id)

let p=document.querySelector("p")
console.log(p)

let pclass=p.getAttribute('class')
console.log(pclass)

-set attribute
let d=document.querySelector("div")
console.log(d.setAttribute("class","new_class"))

let p=document.querySelector("p")
console.log(p.getAttribute("id"))

--node.style
p.style.background="red"
p.style.color="yellow"
p.innerText="Hiiiii Javascript"
p.style.visibility='hidden'


-----------html-----
  <!DOCTYPE html>
<html lang="en ">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="style.css">
    
</head>
<body>
    <!-- <h1 id="heading">DOM-Document object model</h1>
    <h1 id="heading2">JAVASCRIPT</h1>  
    <h2 class="head">DOM</h2>
    <h3 class="head">DOM</h3>   
    <p class="head">DOM is a programming interface for HTML and XML documents. It represents the page so that programs can change the document structure, style, and content. The DOM represents the document as nodes and objects; that way, programming languages can connect to the page.</p>   
    <p class="head">DOM is a programming interface for HTML and XML documents. It represents the page so that programs can change the document structure, style, and content. The DOM represents the document as nodes and objects; that way, programming languages can connect to the page.</p>
    <p >1st parah</p>    
    <p >2nd parah</p>    
    <button>Click me</button>  -->

    <!-- <h6>Hello JavaScript!</h6>

    <div>
        <ul>
            <h1>fruits</h1>
            <li>Banana</li>
            <li>Apple</li>
            <li>Orange</li>       
        </ul>
    </div>

    /*q.create 3 divs under same class access them add some unique text to each of them*/
    <div class="myDiv">Div 1</div>
    <div class="myDiv">Div 2</div>
    <div class="myDiv">Div 3</div> -->

    <!-- <div id="box">This is a box</div> -->
    <!-- <div class ="setatt">this need to be chnaged</div> -->
    <!-- <p id='node'> THis is need to access by nodestyle</p> -->
    <!-- <h1>insert</h1>
    <h1>insert elements</h1>

  
    <div>
    <ul>
        <h1>INDIAN CRICKET TEAM</h1>
        <li>shikar dhawan</li>
        <li>Rohit sharma</li>
        <li>gautam gambhir</li>
        <li>virat kohli</li>
        <li>suresh raina</li>
        <li>yuvrajsingh</li>
        <li>Dhoni</li>
    </ul>
   </div> -->
   
   <!-- <p>insert elements</p> -->
    <p class="q2">this is the second example</p>
    <script src="dm.js"></script>
</body>
</html>


-------css-----------
#heading{
    color:red;
    background-color:yellow;
}

.head{
    color:blue;
    background-color:lightgreen;
}

p{
    color:green;
    background-color:lightblue;
}

body{
    background-color:lightgray;
}

button{
    color:blue;
    background-color:lightgreen;
}

.myDiv{
    color:green;
    background-color:lightblue;
    height:100px;
    width:100px;
    border:2px solid black;}


p{
    color:green;
    background-color:black
}

div{
    color:green;
    background-color:lightblue;
    
    }


.q2{
    color:purple;
}

.newcls{
    color: red;
}


------------js----------------
console.log("JavaScript Loaded");

let head = document.getElementById("heading");
console.dir(head);

let header = document.getElementsByClassName("head");
console.dir(header);

let para=document.getElementsByTagName("p");
console.dir(para);

let q=document.querySelector("p")
console.dir(q)

let qq=document.querySelector(".head")
console.dir(qq)


let qqq=document.querySelectorAll(".head")
console.dir(qqq)

let query=document.querySelectorAll("p")
console.dir(query)

//creating div then performing operations on it
let div=document.querySelector("div")
console.dir(div)

//q)create h2 heading with any text and append another with it then display itin console
let h6=document.querySelector("h6")
console.dir(h6.innerHTML)
h6.innerText=h6.innerText+"..........."


q)create 3 divs access ekements and add some unique text to each of them and display in console
let divs=document.querySelectorAll(".myDiv")
let idx=1
for (d of divs){
    d.innerText=`new text ${idx}`
    console.log(d.innerText)
    idx++
}
divs[0].innerText=divs[0].innerText+" hiii"
divs[1].innerText=divs[1].innerText+" hello"
divs[2].innerText=divs[2].innerText+"world"

for(let i=0;i<divs.length;i++){
    divs[i].innerText="Unique text for Div "+(i+1);
    console.dir(divs[i].innerText)
}


attributes
let d=document.querySelector("div")
console.log(d.getAttribute('id')) 

let id=div.getAttribute('id')
console.log(id)

let p=document.querySelector("p")
console.log(p)

let pclass=p.getAttribute('class')
console.log(pclass)

let d=document.querySelector("div")
console.log(d.setAttribute("class","new_class"))

let p=document.querySelector("p")
console.log(p.getAttribute("id"))

p.style.background="red"
p.style.color="yellow"
p.innerText="Hiiiii Javascript"
p.style.visibility='hidden'


let newbtn=document.createElement("button")
newbtn.innerText='submit'
console.log(newbtn)


let team=document.querySelector("div")
team.append(newbtn)


let team=document.querySelector("div")
team.prepend(newbtn)

let team=document.querySelector("div")
team.before(newbtn)

let team=document.querySelector("div")
team.after(newbtn)

let p=document.querySelector("p")
p.before(newbtn)

let rem=document.querySelector('p')
rem.remove()

let n=document.createElement("button")
n.innerText="clickme"
console.log(n)

n.style.color='white'
n.style.backgroundColor="red"

let qone=document.querySelector("body")
qone.prepend(n)

document.querySelector('body').prepend(n)


let q2=document.querySelector('p')
console.log(q2.getAttribute('class'))
q2.style.color="green"
console.log(q2.setAttribute('class','newcls'))


------------EVENTS ---------------------------------------------------------------------------
//events
let btn=document.querySelector('button');

btn.onclick=() =>{
    console.log("btn clicked");
    let a=25;
    a++;
    console.log(a);
}


let d=document.querySelector('div')
d.onmouseover=()=>{
    console.log("yor are inside div")
}

add
let btn=document.querySelector('button')
// btn.onclick=(e)=>{
//     console.log(e)
//     console.log(e.type)
//     console.log(e.target)
//     console.log(e.clickX,e.clickY)
// }

btn.addEventListener('click',(evt)=>{
    console.log("First Button was clicked")
    // console.log(evt)
    // console.log(evt.type)
})


btn.addEventListener('click',(evt)=>{
    console.log("second button clicked")})

let handler3=('click',(evt)=>{
console.log("third button clicked")})

btn.addEventListener('click',(evt)=>{
console.log("fourth button clicked")})

//remove
btn.removeEventListener('click',(evt)=>{
console.log("fourth button clicked")})


btn.removeEventListener('click',handler3)


let tb=document.querySelector('#toggle')
let currmode="light"

tb.addEventListener("click",()=>{
    if (currmode==="light"){
        currmode="dark"
        document.querySelector('body').style.backgroundColor="black"
    }
    else{
        currmode="light"
        document.querySelector('body').style.backgroundColor="white"

        }
console.log(currmode)
    }
)






























































  



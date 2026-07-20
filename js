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










































































  



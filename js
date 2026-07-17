JavaScript (JS) is a lightweight, cross-platform programming language used to add behaviour and interactivity to web pages

With JavaScript, you can:
Respond to button clicks
Validate forms
Update web pages without reloading  
Create animations and games
Build web servers and mobile apps

array methods with examples

let original = [1, 2, [3, 4]];
console.log(original.flat())
console.log(original)

let num=[1,2,3]
console.log(num.reverse())
console.log(num)

nums=[1,2,3]
nums.shift()
console.log(nums)

nums.unshift(0)
console.log(nums)

n=[10,20,30,40,50]
n.splice(2,2)
console.log(n)

let nums=[10,4,2,60]
nums.sort((a,b)=>b-a)
console.log(nums)


nums=[2,4,6,8]
nums.reverse()
console.log(nums)

nums=[0,4,5]
nums.fill(1);
console.log(nums)

--------------------------------------------------------------------------------

nums=[1,2,3,4]
neww=nums.map(nums=>nums*2)
console.log(neww)


n=[3,6,8,11]
neww=n.filter(n=>n>6)
console.log(neww)


let str1="nav"
let str2="an"
console.log(str1.concat(str2))


let nums=[2,4,6,8]
neww=nums.slice(2,3)
console.log(neww)


let list=[1,2,3,[4,5,6],7,8,9,10]
neww_list=list.flat()
console.log(neww_list)


let x=[1,2,3,4,5,6]
let new_x=x.flatMap(x=>[x,0])  //we can insert any value in place of 0
console.log(new_x)


let nums=[3,8,1,2,9]
let new_nums=nums.toSorted()
console.log(new_nums)

let neww=nums.toReversed()
console.log(neww)

let m=['jan','feb','march','april']
let new_m=m.slice(1,3)
console.log(new_m)


let months=['jan','april','march']
let new_months=months.with(1,"feb")
console.log(new_months)


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


const arrowSum=(a,b)=>{
    console.log(a+b)
}
arrowSum(3,4)






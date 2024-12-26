// // Array Methods :
// // slice ,splice ,pop ,push,shift ,unshift,includes ,reverse 

// // Higher Order Methods 
// map()
// filter()
// reduce()
// foreach( )
// find()
// findindex()
// some()
// every ()
// sort()



// function step1(a){ // parameters
//     console.log("i am call back function",a())
// }
// function step12(){
   
//     for (let i=0;i<3;i++){
//         console.log("hello")
//     }
// }

// calling 
// step1(step12)




// let Prices=[100,200,300]

// function step2(ele){
//     console.log(ele)
//     return ele*0.5
// }
// let res=Prices.map(step2)
// console.log(res)

// Array.map(callback(Element,indexed,newarry))
// Array.map((Element,indexed,newarry)=>{})
// Array.map(function(Element,indexed,newarry){})
// Array.map(step2)


let arr=["iphone","vivo","sumsung","nokia"]
// output:
//  name:iphone 
//  discount:10%
// name:vivo 
//  discount:10%  etc..
// let newarr=[]
// // for(let i=0;i<arr.length;i++){
// //     console.log(`name:${arr[i]}discount:10% `)
// // }


// let res=arr.map((ele)=>{
//     console.log("name:",ele)
//     console.log("discount:",10)
//     return  10
// })
import { Data } from "./data.js"

let prod=document.querySelector(".products")
// let res=Data.map((ele)=>{
//      const {category,title,price}=ele
//     let data=document.createElement("li")
//     data.innerText=price
//     prod.appendChild(data)
//     return  price
// })


// console.log(res)
// let filterdata=Data.filter((ele)=>{
// //  console.log(ele)
//  const {category,title,price}=ele



//  return price>100
// })

// let res=filterdata.map((ele)=>{
//          const {category,title,price}=ele
//         let data=document.createElement("li")
//         data.innerText=price
//         prod.appendChild(data)
//         return  price
//     })

// let total=res.reduce((prev,cur)=>{
//     console.log("prevvalu:",prev)
//     console.log("nextvalu:",cur)
//     return prev+cur
// },0)

// console.log(total)


// let arr1=["iphone","vivo","sumsung","nokia"]
// const res=arr1.forEach((ele)=>{
//     console.log(ele)
//     return ele.toUpperCase()
// })
// console.log(res)

// let userList=[
//     {name:"raju",isprime:true},
//     {name:"ramu",isprime:true},
//     {name:"rani",isprime:true}
// ]

// let user=userList.findIndex((ele)=>ele.isprime==true)
// console.log(user)

// let user1=userList.every((ele)=>ele.isprime==true)
// console.log(user1)

// let data=[100,2000,200]
// console.log(Data.sort((a,b)=>b.price-a.price))
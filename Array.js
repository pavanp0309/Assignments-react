// Props -
let arr=["hello",3,4,5,6,7]

// ways to acces the values 
// console.log(arr[0])
// console.log(arr[1])

// // Distructuring 
// const [a]=arr
// console.log(a)


const songs=["song1","song2","s3","s4"]
// const [s,,s2]=songs //skiping the Elements
// console.log(s)
// console.log(s2)

const songs1=["song1","song2",]
// // default values
// const [p="no song",p1,p3="no song in playlist"]=songs1
// console.log(p)
// console.log(p1)
// console.log(p3)


// // swaping the varibales 
// let a="song1"
// let a2="song2"

// [a,a2]=[a2,a]//a=a2 a2=a
// console.log(a,a2)

// TypeError
// ReferenceError : 
// SyntaxError
//----------------- error ============
// let [a1,b1]=[1,4]
// console.log(a1)
// console.log(b1)

// // [a1,b1]=[b1,a1]
// // console.log(b1)

// Rest Operator 
// let songsdata=["s1","s2","s3","s4","s5"]
// const [...s3,s,s1,]=songsdata //rest operator
// console.log(s,s1)
// console.log(s3)

// // let Pers={
// //     name:"ramu",
// //     age:24,
// //     address:"hyderabad"
// // }

// // const {name,...t}=Pers
// // console.log(t)

// // let pes2={...Pers}
// // console.log(pes2)

// // let song2=[...songsdata,"hello",...songsdata] //spread operator
// // console.log(song2)


// // object distructuring 
// let Mobile={
//     brand:"Iphone",
//     name:"iphonemax",
//     price:200000,
//     ram:"6gb",
//     Rom:"2gb",
//     description:"Good mobile",
//     rating :{
//        global:"5star",
//        userRating:"4star"
//     }
// }

// // basic
// const {brand,name}=Mobile
// console.log(brand)

// // skiping 
// const {description}=Mobile
// console.log(description)

// // nested 
// const {rating:{global,userRating:u}}=Mobile
// console.log(global)
// console.log(u)


// // aliasing :
// const {brand:b,name:n}=Mobile ;
// console.log(b)
// console.log(n)


// // Default values 
// const {color="red"}=Mobile ;
// console.log(color)





// function Card({brand,name="iphone16",color:c="red"}){
//     console.log("MobileProfile")
//     // accessing in normal way
//     // console.log(hh.brand)
//     // console.log(hh.rating.global)
//     console.log("brandname:",brand)
//     console.log("mobilename:",name)
//     console.log("color:",c)
// }

// Card(Mobile)


const example=[{name:"raju",age:24,rating:{client:"5star"}}]

// testcase : raju , work (rapido) is rating(client)
const [{name,work="rapido",rating:{client}}]=example
console.log(name)
console.log(work)
console.log(client)

// nested array
let a=[[1,3]]
const [[t]]=a 
console.log(t)

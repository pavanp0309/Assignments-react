// syntax: (condition)? "expression1":"expression2"
// expression1: it will be excuted if condition is true
// expression2: it will be excuted if condition is false

// let isloggedIn=true;
// // let user=(isloggedIn)?<h1>hello</h1>:" logout"
// console.log(user)

// let data=true;
// let userData=(data)?document.write("loding...") : document.write("data")

// if(data){
//     document.write("loding...") 
// }else{
//     document.write("data")
// }

let weather={
    temp:"20deg"
}
// console.log(weather.temp)
// console.log(weather.humidity)


// let data=weather&&weather.temp
// console.log(data.padStart(10,"Y"))
// let dat2=weather&&weather.wind
// console.log(dat2.padStart(10,"Y"))
// let dat2=weather&&weather.wind
// console.log(dat2.padStart(10,"Y"))

// optional chaining 

// console.log(weather?.temp)
// // console.log(weather?.humidity)

// let user={
//     profile:{
//         name:"ramu",
//         age:null ,
//         data:null

//     },
//     getData:function(){console.log("hello")}
// }
// // console.log(user.profile.name) //TernaryOperator.js:40 Uncaught TypeError: Cannot read properties of null (reading 'name')
// // console.log(user?.profile?.name)// undefined
// // console.log(user.profile.data.toUpperCase())
// console.log(user?.profile?.data?.toUpperCase())
// console.log(user.getData())
// console.log(user?.getData?.())


// let cartvalue=0

// let total= cartvalue ?? 100
// console.log(total)

// Logical Opertor 
// &&
console.log(true&&true)
console.log(true&&false)
console.log(true||false)
console.log(true||true)

// 0-false 
// ""
// []
// shortcircuiting  -user Authentication firebase nodejs express python

// console.log(true && "loggedin")
// console.log(false && "loggedin")
// console.log(!0 && "loggedin")
// console.log("" && "loggedin")
// let a=[]
// console.log(a.length && "loggedin")
// console.log(null && "loggedin")
// console.log(undefined && "loggedin")

// let userlogin=null 
// console.log(!!userlogin && "welcome" )
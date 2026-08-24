// console.log("hello");

// function sum(a, b) {
//   return a + b;
// }
// console.log(sum(20, 30));
// function sqr(a, b) {
//   return Math.sqrt(a) + Math.sqrt(b);
// }
// console.log(sqr(16, 25));

// var a = 34; //jha tk define h vhi tk work
// if (a > 20) {
//   var a = 45;
//   console.log("a inside" + a);
// }
// console.log("a outside" + a);

// let b = 34;
// if (b > 20) {
//   let b = 45;
//   console.log("a inside" + b);
// }
// console.log("a outside" + b);

// const sum=(a,b)=>{return Math.sqrt(a+b)}
// console.log(sum("40+90"));


//IIFE (Immediately Invoked Function Expression)
// (() => {console.log("hello")})();
//callback function
// function sum(a,b){
//     return a+b;
// }

// function sumWithMsg(clbk, msg){
//     const result=clbk(12,40);
//     console.log("Hiii" + msg +" "+ result )
// }
// sumWithMsg(sum, "Ram");
// function login(msg, error){
//     if(error){
//         console.log(error)
//     }
//     else{
//         console.log(msg)
//     }
// }

// function loginHandler(username, password, clbk){
//     // username="Arya";
//     // password="3214";
//     if(username=="Arya" && password=="3214"){
//         clbk("success", null)
//     }
//     else{

//         clbk(null , "Username or password is incorrect")
//     }
// }
// loginHandler ("Arya", "3214", login)
// loginHandler ("Aryxa", "3a214", login)
//  setTimeout(() => { 
//     console.log("one")
//  setTimeout(() => {
//     console.log("two")
// }, 3000);
//  setTimeout(() => {
//     console.log("three")
// }, 6000);

// PROMISE
const myPromise = new Promise((resolve, reject) => {
   let username="Yashpratap";
   let password="1123";
   if(username=="Yashpratap"&&password=="1123"){
      resolve("success");
   }else{
      reject("Invalid");
   }
}) 

//  console.log(myPromise);
 
// myPromise.then((msg)=>{console.log(msg)})
// .catch(msg=>{console.log(msg)})
// .finally(console.log("Resource closed"))

//js syncro
//first
//second

//asych

async function requestOrder() {
  return await new Promise((resolve) => {
    setTimeout(() => {
      resolve(" one Order received");
    }, 1000);
  });
}

async function prepareOrder() {
  return await new Promise((resolve) => {
    setTimeout(() => {
      resolve(" The Order is ready");
    }, 1000);
  });
}
async function orderHandover() {
   return await new Promise((resolve)=>{
      setTimeout(()=>{
         resolve("Order handed to the customer")
      },1000);
   })
}
async function orderCompleted() {
   return await new Promise((resolve)=>{
      setTimeout(()=>{
         resolve("Order successfully completed")
      },1000);
   })
   
}
async function otp(){
   return await new Promise((resolve) => {
      setTimeout(()=>{
         const verificationOTP = Math.floor(10000+Math.random()*90000);
         console.log(verificationOTP);
         resolve(verificationOTP);
      },1000);
   })
}

function verifyOTP(generatedOTP, enteredOTP) {
   return generatedOTP === Number(enteredOTP);
}

async function handleLogin(){
      const status= await myPromise;
      console.log(status)
      if(status=="success"){
         console.log("Hi inside success")
      }
      const orderStatus = await requestOrder();
      console.log(orderStatus);
      const orderPreparedStatus=await prepareOrder();
      console.log(orderPreparedStatus);
      const orderHandoverStatus=await orderHandover();
      console.log(orderHandoverStatus);
      const generatedOTP=await otp();
      const enteredOTP = generatedOTP;
      console.log("OTP verified:", verifyOTP(generatedOTP, enteredOTP));
      const orderCompletionStatus=await orderCompleted();
      console.log(orderCompletionStatus);
}
handleLogin();
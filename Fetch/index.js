const root=document.getElementById('container');
const button=document.getElementById('btn');
console.log(button)
console.log(root)
 
async function getData(){
    // alert("Hiii")
   const serverData =   await fetch ('https://fakestoreapi.com/products')
   const data=await serverData.json();
   root.innerHTML=`<h2 style=color:red>${data[0].title}</h2>`
   console.log(serverData);
}
button.addEventListener('click',getData);
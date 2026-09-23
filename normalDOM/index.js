const root=document.getElementById('root')
const button=document.getElementById('btn')
console.log(root)
    const h2=document.createElement('h2');
    const h1=document.createElement('h1');
    const img=document.createElement('img');
    const loader=document.createElement('h1');
    loader.innerHTML='loading data...';
    
function showData(){
    try{
    h2.innerText="Welcome to DOM Manipulation";
    h2.innerText="ABES Engineering College ";
    img.src='https://edsathi.com/wp-content/uploads/2025/05/ABES.jpg';
    // img.setAttribute('height',200);
    // img.setAttribute('width',600);
    root.appendChild(h1);
    // root.appendChild(h2);
    // root.appendChild(img);
    }catch(e){
        console.log("HIII")
        h1.innerHTML="Erron in loading"
    }
    finally{
        root.removeChild(loader);
    }
    
}

button.addEventListener('click',showData);
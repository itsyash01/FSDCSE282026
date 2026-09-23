const container = document.getElementById('root');
console.log(container);
const root =ReactDOM.createRoot(container);
const h2=React.createElement('h2',{style:{color:'Black'}},'Yash Pratap Singh');
const h1=React.createElement('h1',{style:{color:'brown',backgroundColor:'Grey' }},'ABES ENGINEERING COLLEGE');
const img=React.createElement('img',{src:'https://th.bing.com/th/id/OIP.YRLnFB2_z8EqsilbfSMoQAHaD9?w=289&h=180&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3',style:{height:'300px',width:'300px',border:'5px black'}});
const div=React.createElement('div',{style:{border:'2px dotted black',height:'200px',width:'400px'}},h1,h2,img);
root.render(div);
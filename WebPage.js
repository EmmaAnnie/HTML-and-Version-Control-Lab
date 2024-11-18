alert("Hello, World");

const fYear = docuement.getElementById("footerYear");
const d = new Date();
fYear.textContent = d.getFullYear();
console.log(d.getFullYear());

if(d.getHours() < 12) {
    console.log("Good Morning");
} else if (d.getHours() > 18) {
    console.log("Good Afternoon");
} else {
    console.log("Good Evening");
    
}

const button = document.querySelector('button');
button.addEventListener('mouseover', () => {
    button.style.backgroundColor = 'pink';
}); 

for (let i = 0; i <4; i += 1) {
    console.log(i);
}
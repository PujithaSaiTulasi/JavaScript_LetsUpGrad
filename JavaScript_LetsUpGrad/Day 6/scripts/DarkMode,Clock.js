function welcome(){
    let name;
    name= document.getElementById('username').value;
    document.write(`Warm Welcome to ${name}`);
}
const ctime=document.getElementById('time');
function clock(){
    let date=new Date();
    let time=date.toLocaleTimeString();
    ctime.innerText = time;
}
setInterval(clock,1000);

function darkmode() {
    var element = document.body;
    element.classList.toggle("dark-mode");
  }
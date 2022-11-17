let division=document.createElement("div");
division.innerHTML=`<div class="calculator">
<input type="text" placeholder="0" id="screen" readonly>
<button onclick="Clear()">CLR</button>
<button onclick="del()">DEL</button>
<button onclick="display('%')">%</button>
<button onclick="display('+')">+</button>
<button onclick="display('1')">1</button>
<button onclick="display('2')">2</button>
<button onclick="display('3')">3</button>
<button onclick="display('-')">-</button>
<button onclick="display('4')">4</button>
<button onclick="display('5')">5</button>
<button onclick="display('6')">6</button>
<button onclick="display('*')">*</button>
<button onclick="display('7')">7</button>
<button onclick="display('8')">8</button>
<button onclick="display('9')">9</button>
<button onclick="display('/')">/</button>
<button onclick="display('0')">0</button>
<button onclick="display('.')">.</button>
<button onclick="Calculate('=')" id="ans">=</button>
</div>`
division.setAttribute("class","container");
//input.setAttribute("id","screen");
document.body.append(division)


//function of calculator//
let outputScreen=document.getElementById("screen");

function display(num){
    outputScreen.value+=num;
}

function Calculate(){
    try{
        outputScreen.value=eval(outputScreen.value);
    }
    catch(err)
    {
        alert("Given Input is Invalid")
    }
}
function Clear(){
      outputScreen.value="";
}
function del(){
    outputScreen.value=outputScreen.value.slice(0,-1);
}

//keyevents
var screen=document.getElementById('screen');
document.addEventListener('keydown',(event)=>{
    console.log(event);
    if(event.key =="Backspace"){outputScreen.value=outputScreen.value.slice(0,-1);}
    if(event.key =="Enter") {outputScreen.value=eval(outputScreen.value);}
    if(event.key =="1") {outputScreen.value += event.key; }
    if(event.key =="2") {outputScreen.value += event.key; }
    if(event.key =="3") {outputScreen.value += event.key; }
    if(event.key =="4") {outputScreen.value += event.key; }
    if(event.key =="5") {outputScreen.value += event.key; }
    if(event.key =="6") {outputScreen.value += event.key; }
    if(event.key =="7") {outputScreen.value += event.key; }
    if(event.key =="8") {outputScreen.value += event.key; }
    if(event.key =="9") {outputScreen.value += event.key; }
    if(event.key =="0") {outputScreen.value += event.key; }
    if(event.key =="+") {outputScreen.value += event.key; }
    if(event.key =="-") {outputScreen.value += event.key; }
    if(event.key =="/") {outputScreen.value += event.key; }
    if(event.key =="*") {outputScreen.value += event.key; }
    if(event.key =="%") {outputScreen.value += event.key; }
    if(event.key =="(") {outputScreen.value += event.key; }
    if(event.key ==")") {outputScreen.value += event.key; }
    if(event.key ==".") {outputScreen.value += event.key; }
    if(event.key =="[") {outputScreen.value += event.key; }
    if(event.key =="]") {outputScreen.value += event.key; }
    if(event.key =="{") {outputScreen.value += event.key; }
    if(event.key =="}") {outputScreen.value += event.key; }
   
    

    //if(event.key == "a") {outputScreen.value += event.key; }
    if(event.key == "a"){alert('only Number are Allowed')} 
    if(event.key == "b"){alert('only Number are Allowed')} 
    if(event.key == "c"){alert('only Number are Allowed')} 
    if(event.key == "d"){alert('only Number are Allowed')} 
    if(event.key == "e"){alert('only Number are Allowed')} 
    if(event.key == "f"){alert('only Number are Allowed')} 
    if(event.key == "g"){alert('only Number are Allowed')} 
    if(event.key == "h"){alert('only Number are Allowed')} 
    if(event.key == "i"){alert('only Number are Allowed')} 
    if(event.key == "j"){alert('only Number are Allowed')} 
    if(event.key == "k"){alert('only Number are Allowed')} 
    if(event.key == "l"){alert('only Number are Allowed')} 
    if(event.key == "m"){alert('only Number are Allowed')} 
    if(event.key == "n"){alert('only Number are Allowed')} 
    if(event.key == "o"){alert('only Number are Allowed')} 
    if(event.key == "p"){alert('only Number are Allowed')} 
    if(event.key == "q"){alert('only Number are Allowed')} 
    if(event.key == "r"){alert('only Number are Allowed')} 
    if(event.key == "s"){alert('only Number are Allowed')} 
    if(event.key == "t"){alert('only Number are Allowed')} 
    if(event.key == "v"){alert('only Number are Allowed')} 
    if(event.key == "u"){alert('only Number are Allowed')} 
    if(event.key == "w"){alert('only Number are Allowed')} 
    if(event.key == "x"){alert('only Number are Allowed')} 
    if(event.key == "y"){alert('only Number are Allowed')} 
    if(event.key == "z"){alert('only Number are Allowed')} 
    
    
})



// let keyBoard = document.querySelector("#screen")
// keyBoard.addEventListener('keyup', e =>{
//     //console.log(e)
    
    
//     if(e.keyCode === 65 || e.keyCode === 66 || e.keyCode === 67|| e.keyCode === 68|| e.keyCode === 69|| e.keyCode === 70
//         || e.keyCode === 71|| e.keyCode === 72|| e.keyCode === 73|| e.keyCode === 74|| e.keyCode === 75|| e.keyCode === 76
//         || e.keyCode === 77|| e.keyCode === 78|| e.keyCode === 79|| e.keyCode === 80|| e.keyCode === 81|| e.keyCode === 82
//         || e.keyCode === 83|| e.keyCode === 84|| e.keyCode === 85|| e.keyCode === 86|| e.keyCode === 87|| e.keyCode === 88
//         || e.keyCode === 89|| e.keyCode === 90){
//         alert('Only Numbers are allowed');
//     }
// })


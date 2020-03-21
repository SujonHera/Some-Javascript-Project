var eyeContact = true;
var propose = "yes";

let btn = document.querySelector("#btn");
let submitArea = document.querySelector(".submit-area");
let proposeArea = document.querySelector("#propose-area");
let inputMyCrush;
btn.addEventListener('click', function(){ 
    let myCrush = document.querySelector("#myCrush").value;
    inputMyCrush = myCrush;

    if(myCrush.length >= 3){
        submitArea.style.display = "none";
        proposeArea.style.display = "block";

    }else{
        alert("Please Minimum 3 characters")
    }
    
    document.querySelector("#myCrush").value = "";
    
})
let proposeBtn = document.querySelector("#proposeBtn");
let proposeStatus = document.querySelector("#proposeStatus");

proposeBtn.addEventListener('click', function() {
    let myCrushName = document.querySelector("#myCrushName").value;
    let eyeContact = document.querySelector("#eyeContact").value;
    if(myCrushName.length >= 3 && eyeContact =="true" || eyeContact == "false" ){
        if(inputMyCrush != myCrushName){
            proposeStatus.innerText = "Mistake Crush Name So Sad!"
            proposeStatus.style.color= "red";
            setTimeout(function(){
                submitArea.style.display = "flex";
                proposeArea.style.display = "none";
                proposeStatus.innerText = ""
            },2000)
        }else if(inputMyCrush == myCrushName && eyeContact == "true"){
            proposeStatus.innerText = "Propose Accepted !";
            setTimeout(function(){
                submitArea.style.display = "flex";
                proposeArea.style.display = "none";
                proposeStatus.innerText = ""
            },2000);
        }else{
            proposeStatus.innerText = "So Sad! Kopale Pream Nai"
            proposeStatus.style.color= "red";
            setTimeout(function(){
                submitArea.style.display = "flex";
                proposeArea.style.display = "none";
                proposeStatus.innerText = ""
            },2000);
        }
    }else{
        alert("Please Fill Up Field Valid Information")
    }
    document.querySelector("#myCrushName").value = "";
    document.querySelector("#eyeContact").value = "";
})


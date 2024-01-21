let button=document.querySelectorAll(".btn");
let disp=document.querySelector("#disp");
console.log(disp);

function isOparator(strID){
    if(strID==="b_add"||strID==="b-"||strID==="bX"||strID==="b_div"){
        return true;
    }
    return false;
}

let opt1=0,opt2=0;
button.forEach(clkBtn =>{
    
    clkBtn.addEventListener("click",()=>{
        let btn=clkBtn.getAttribute("id");
        
        if(btn==="b_equal"){
            disp.innerText=opt1+opt2;
        }
        else if(isOparator(btn)){
            opt2=opt1;
            disp.innerText+=clkBtn.innerText;
        }
        else{
            opt1=Number(clkBtn.innerText);
            disp.innerText+=opt1;
        }
    })
})
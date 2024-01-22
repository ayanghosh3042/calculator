let button=document.querySelectorAll(".btn");
let disp=document.querySelector("#disp");

let str="";
button.forEach(clkBtn =>{
    
    clkBtn.addEventListener("click",()=>{
        let btn=clkBtn.getAttribute("id");
        
        if(btn==="b_equal"){
            str=eval(str);
            disp.innerText=str;
        }
        else if(btn==="bMC"){
            str="";
            disp.innerText=str;
        }
        else if(btn==="bM"){
            let newstr="";
            for(let i=0;i<str.length-1;i++){
                newstr+=str[i];
            }
            str=newstr;
            disp.innerText=str;
        }
        else{
            str+=clkBtn.innerText;
            disp.innerText=str;
        }
    })
})
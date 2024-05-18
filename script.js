let count=0;
function fxnInit(){
    let countArea=document.getElementById('changeAble');
    check(count); 
    if(count==0){
        countArea.innerHTML="Your Current Count is:0";
        let clear=document.getElementById('clear');
        clear.classList.add("displayOff");
        countArea.style.borderBottom="1px solid white";
    }
   
    let incrBnt=document.getElementById('increment').addEventListener("click",function(){
        check(count);
        count=count+1;
        countArea.innerHTML=`Your Current Count is ${count}`
    });
    let dreBtn=document.getElementById('decrement').addEventListener("click",function(){
        check(count);
        if(count ==0){
            let div=document.createElement('div');
            div.innerHTML="Error: you cannot go below zero";
            div.style.color="red";
            countArea.appendChild(div);
            let dreBtn=document.getElementById('decrement');
            // dreBtn.classList.toggle("displayOff");
        }
        else if(count>0){
            let dreBtn=document.getElementById('decrement');
            // dreBtn.classList.toggle("displayOff");
            count=count-1;
            countArea.innerHTML=`Your Current Count is ${count}`;
        }
    })
    let clear=document.getElementById('clear').addEventListener("click",function(){
        count=0;
        countArea.innerHTML=`Your Current Count is ${count}`;
        let clear=document.getElementById('clear');
        clear.classList.add("displayOff");
    })
}
function check(count){
    if(count!=0){
        let clear=document.getElementById('clear');
        clear.classList.remove("displayOff");
        let decrement=document.getElementById('decrement');
        decrement.classList.remove("displayOff")
    }
    else if(count==0){
        let clear=document.getElementById('clear');
        clear.classList.add("displayOff");
        // let decrement=document.getElementById('decrement');
        // decrement.classList.add("displayOff");

    }
}
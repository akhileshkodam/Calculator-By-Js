 let result=document.getElementById('result');

const zero=document.getElementById("0");
const double=document.getElementById("00");
const one=document.getElementById("1");
const two=document.getElementById("2");
const three=document.getElementById("3");
const four=document.getElementById("4");
const five=document.getElementById("5");
const six=document.getElementById("6");
const seven=document.getElementById("7");
const eight=document.getElementById("8");
const nine=document.getElementById("9");

const add=document.getElementById("+");
const sub=document.getElementById("-");
const mul=document.getElementById("*");
const divide=document.getElementById("/");
const dot=document.getElementById(".");
const cancel=document.getElementById("cancel");
const delete1=document.getElementById("delete");
const eqaul=document.getElementById("=");

console.log(result.innerText);
zero.addEventListener('click',()=>{
    result.innerHTML=`${result.innerText}${0}`
});
double.addEventListener('click',()=>{
    result.innerHTML=`${result.innerText}${"00"}`;
})
one.onclick=function(){
    result.innerHTML=`${result.innerText}${1}`;
}
two.addEventListener('click',()=>{
    result.innerHTML=`${result.innerText}${2}`;
})
three.addEventListener('click',()=>{
    result.innerHTML=`${result.innerText}${3}`
});
four.addEventListener('click',()=>{
    result.innerHTML=`${result.innerText}${4}`;
})
five.addEventListener('click',()=>{
    result.innerHTML=`${result.innerText}${5}`
});
six.addEventListener('click',()=>{
    result.innerHTML=`${result.innerText}${6}`;
})
seven.addEventListener('click',()=>{
    result.innerHTML=`${result.innerText}${7}`
});
eight.addEventListener('click',()=>{
    result.innerHTML=`${result.innerText}${8}`;
})
nine.addEventListener('click',()=>{
    result.innerHTML=`${result.innerText}${9}`
});

let add1=0;
let sub1=0;
let mul1=0;
let divide1=0;
let resultt=0;



dot.addEventListener('click',()=>{
    result.innerHTML=`${result.innerText}${"."}`
});
cancel.addEventListener('click',()=>{
    result.innerHTML="";
    add1=0;
    sub1=0;
    mul1=0;
    divide1=0;
})
delete1.addEventListener('click',()=>{
    let re=result.innerText;
    let re1="";
    for(let i=0;i<re.length-1;i++)
    {
        re1=re1+re.charAt(i);
    }
    result.innerHTML=re1;
});



add.addEventListener('click',()=>{
    add1++;
    
    result.innerHTML=`${result.innerText}${'+'}`;
})

sub.addEventListener('click',()=>{
    sub1++;
   
    result.innerHTML=`${result.innerText}${'-'}`
});

mul.addEventListener('click',()=>{
    mul1++;
    
    result.innerHTML=`${result.innerText}${'*'}`;
})

divide.addEventListener('click',()=>{
    divide1++;
    
    result.innerHTML=`${result.innerText}${'/'}`
});

const subtract= (arr,i) =>{

            let arr1=arr[i].split('-');
            let re1=0;let e=0;
            for(let j=0;j<arr1.length;j++)
            {
                if(arr1[j].includes("*"))
                {
                    multifly(arr1,j);
                }
                else if(arr1[j].includes("/"))
                {
                    divisible(arr1,j);
                }
                else{
                   if(j==0){
                        e=1;
                   }
                    let a=Number.parseFloat(arr1[j]);
                    if(j==0)
                    {
                        re1=a-re1;
                    }
                    else{
                    re1=re1-a;
                    }
                }
            }
            if(e==1){resultt=re1-resultt;}else{resultt=resultt-re1;}
            
            console.log(re1);
            sub1=0;
}
const multifly= (arr,i) =>{

    let arr1=arr[i].split('*');
    let re1=1;
    let d=0;
    for(let j=0;j<arr1.length;j++)
    {
        if(arr1[j].includes("/"))
                {
                    divisible(arr1,j);
                    d=1;
                }
                else{
                    let a=Number.parseFloat(arr1[j]);
                    re1=re1*a;
                }
        
    }
    if(d==1){resultt=resultt*re1;}else{resultt=resultt+re1;}
    
    console.log(re1);
    mul1=0;
}
const divisible= (arr,i) =>{

    let arr1=arr[i].split('/');
    let re1=1;
    for(let j=0;j<arr1.length;j++)
    {
        let a=Number.parseFloat(arr1[j]);
        if(j==0)
        {
            re1=Number.parseFloat(arr1[0]);
        }
        else{
        re1=re1/a;}
    }
    resultt=resultt+re1;
    console.log(re1);
    divide1=0;
}



eqaul.addEventListener('click',()=>{
    let value=result.innerText;
    if(add1!=0)
    {
        let arr=value.split('+');
        let re=0;
        for(let i=0;i<arr.length;i++)
        {
            if(arr[i].includes("-"))
            {
                subtract(arr,i);
            }
            else if(arr[i].includes("*"))
            {
                multifly(arr,i);
            }
            else if(arr[i].includes("/"))
            {
                divisible(arr,i);
            }
            else{
            let a=Number.parseFloat(arr[i]);
            re=re+a;}
        }
        resultt=resultt+re
        console.log(re);
        result.innerHTML=resultt;
        resultt=0;
        add1=0;
    }
    else if(sub1!=0)
    {
        let arr=value.split('-');
        let re=0;let d=0;let e=0;
        for(let i=0;i<arr.length;i++)
        {
            if(arr[i].includes("*"))
            {
                multifly(arr,i);
            }
            else if(arr[i].includes("/"))
            {
                divisible(arr,i);
            }
            else{
                if(i==0){
                    e=1;
                }
                let a=Number.parseFloat(arr[i]);
                if(d==0){
                    re=a-re;
                }
                else{re=re-a;}
                d++;
            }
        }
        if(e==1){resultt=re-resultt;}else{resultt=resultt-re;}
        
        result.innerHTML=resultt;
        resultt=0;
        sub1=0;
    }
    else if(mul1!=0)
    {
        let arr=value.split('*');
        let re=1; let d=0;
        for(let i=0;i<arr.length;i++)
        {
            if(arr[i].includes("/"))
            {
                divisible(arr,i);
                d=1;
            }
            else{
                let a=Number.parseFloat(arr[i]);
                re=re*a;
            }
            
        }
        if(d==1){resultt=re*resultt;}else{resultt=re+resultt;}
        
        result.innerHTML=resultt;
        resultt=0;
        mul1=0;
    }
    else if(divide1!=0)
    {
        let arr=value.split('/');
        let re=Number.parseFloat(arr[0]);
        for(let i=1;i<arr.length;i++)
        {
            let a=Number.parseFloat(arr[i]);
            re=re/a;
        }
        result.innerHTML=re;
        divide1=0;
    }
    
    
});

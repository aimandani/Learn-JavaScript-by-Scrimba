let num1 =1
let num2 =6

document.getElementById('num1-el').textContent=num1
document.getElementById('num2-el').textContent=num2
ans = document.getElementById('output')

function add()  {
    let answer = num1 +num2
    ans.textContent ='Sum :'+ answer
    

}


function minus()  {
    let answer = num1 -num2
    ans.textContent ='Sum :'+ answer
    

}


function div()  {
    let answer = num1/num2
    ans.textContent ='Sum :'+ answer
    

}


function mult()  {
    let answer = num1*num2
    ans.textContent ='Sum :'+ answer
    

}

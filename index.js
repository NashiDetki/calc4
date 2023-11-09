let sple = document.querySelector('.sple');
console.log(sple);
let minys = document.querySelector('.minys');
console.log(minys);
let uvn = document.querySelector('.uvn');
console.log(uvn);
let leto = document.querySelector('.leto');
console.log(leto);
let res = document.querySelector('.res');
console.log(res);

sple.addEventListener('click',function(){
 let num1 = +document.querySelector('.num1').value;
 let num2 = +document.querySelector('.num2').value;
 console.log(num1,num2)
 res.innerText = num1+num2
})

minys.addEventListener('click',function(){
    let num1 = +document.querySelector('.num1').value;
    let num2 = +document.querySelector('.num2').value;
    console.log(num1,num2)
    res.innerText = num1-num2
   })


   uvn.addEventListener('click',function(){
    let num1 = +document.querySelector('.num1').value;
    let num2 = +document.querySelector('.num2').value;
    console.log(num1,num2)
    res.innerText = num1*num2
   })



   leto.addEventListener('click',function(){
    let num1 = +document.querySelector('.num1').value;
    let num2 = +document.querySelector('.num2').value;
    console.log(num1,num2)
    if (num2 == 0){
    res.innerText = 'На 0 делить нельзя!'
    } else {
    res.innerText = num1/num2
    }
   })


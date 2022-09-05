let modalaudi = document.querySelector('.modalaudi'),
modalmercades= document.querySelector('.modalmercades'),
modalbmw = document.querySelector('.modalbmw'),
btna = document.querySelector('#btn1'),
btnm = document.querySelector('#btn2'),
btnb = document.querySelector('#btn3'),
span1 = document.querySelector('#span1'),
closm = document.querySelector('#span2'),
closb = document.querySelector('#span3');

// console.log(modalaudi);
// console.log(modalmercades);
// console.log(modalbmw);
// console.log(btna);
// console.log(btnm);
// console.log(btnb);


btna.addEventListener('click', function(){
    modalaudi.style.display = 'flex';
})
span1.addEventListener("click", function(){
    modalaudi.style.display = 'none'
});
btnm.addEventListener('click', function(){
    modalmercades.style.display = 'flex';
})
span1.addEventListener("click", function(){
    modalmercades.style.display = 'none'
});
btnb.addEventListener('click', function(){
    modalbmw.style.display = 'flex';
})
span1.addEventListener("click", function(){
    modalbmw.style.display = 'none'
});
const banner = document.querySelector('.logoMove');
const p = document.createElement('P');



banner.addEventListener("mouseover",  function () {
    p.innerHTML = "FireConsult";
    p.className = "effectLogo"
    banner.appendChild(p);
});

const button1 = document.querySelector('.btn1');
const button2 = document.querySelector('.btn2');
const button3 = document.querySelector('.btn3');

const button4 = document.querySelector('.btn4');
const button5 = document.querySelector('.btn5');
const button6 = document.querySelector('.btn6');




const selectImageProyect = document.querySelector('#imageProyect')

const selectImageCertified = document.querySelector('#imageCertified')


button1.addEventListener('click', function() {
    selectImageProyect.setAttribute("src","./image/project1.jpg");
});

button2.addEventListener('click', function() {
    selectImageProyect.setAttribute("src","./image/project2.jpg");
});

button3.addEventListener('click', function() {
    selectImageProyect.setAttribute("src","./image/project3.jpg");
});


button4.addEventListener('click', function() {
    selectImageCertified.setAttribute("src","./image/certificed1.jpg");
});

button5.addEventListener('click', function() {
    selectImageCertified.setAttribute("src","./image/certificed2.jpg");
});

button6.addEventListener('click', function() {
    selectImageCertified.setAttribute("src","./image/certificed3.jpg");
});




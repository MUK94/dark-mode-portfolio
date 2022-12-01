// Button State Dark/light mode
const lightBtn = document.querySelector('.light');
const bodyColor = document.querySelector('body');
const darkBtn = document.querySelector('.dark');
const icons = document.querySelectorAll('.fab');

// Light mode
lightBtn.addEventListener('click', function () {
  bodyColor.style.background = 'whitesmoke';
  bodyColor.style.color = 'black';
  lightBtn.classList.add('dark');
  darkBtn.classList.remove('dark');
});

// Dark mode
darkBtn.addEventListener('click', function () {
  bodyColor.style.background = '';
  darkBtn.classList.add('dark');
  lightBtn.classList.remove('dark');
  bodyColor.style.color = '';
});

// buttom load more
const btnShow = document.querySelector('.btnHide');
const showSection = document.getElementById('show');
const btnHide = document.querySelector('.btnShow');

btnShow.addEventListener('click', function () {
  showSection.classList.remove('hidden');
  btnShow.classList.add('hidden');
  btnHide.classList.remove('hidden');
});

// hidding button
btnHide.addEventListener('click', function () {
  showSection.classList.add('hidden');
  btnShow.classList.remove('hidden');
  btnHide.classList.add('hidden');
});

// Skills Progress Bar
let theNumber = document.getElementById('number');
let counter = 0;

setInterval(() => {
  if (counter === 70) {
    clearInterval();
  } else {
    counter += 1;
    theNumber.textContent = counter + `%`;
  }
}, 30);

//  REACT
let react = document.getElementById('numberReact');
let counterReact = 0;

setInterval( () => {
  if (counterReact === 85) {
    clearInterval();
  } else {
    counterReact += 1;
    react.textContent = counterReact + `%`;
  }
}, 35);

// NODE

let node = document.getElementById('numberNodeJs');

let counterNode = 0;

setInterval(() => {
  if (counterNode === 60) {
    clearInterval();
  } else {
    counterNode += 1;
    node.textContent = counterNode + `%`;
  }
}, 30);

// laravel
let laravel = document.getElementById('numberLaravel');
let counterLaravel = 0;

setInterval(() => {
  if (counterLaravel === 70) {
    clearInterval();
  } else {
    counterLaravel += 1;
    laravel.textContent = counterLaravel + `%`;
  }
}, 30);

// mongoDB

let mongoDB = document.getElementById('numberMongoDB');

let counterMongo = 0;

setInterval(() => {
  if (counterMongo === 60) {
    clearInterval();
  } else {
    counterMongo += 1;
    mongoDB.textContent = counterMongo + `%`;
  }
}, 30);

let express = document.getElementById('numberExpressJS');

let counterExpress = 0;

setInterval(() => {
  if (counterExpress === 60) {
    clearInterval();
  } else {
    counterExpress += 1;
    express.textContent = counterExpress + `%`;
  }
}, 30);

let vanilla = document.getElementById('numberVanilla');

let counterVanilla = 0;

setInterval(() => {
  if (counterVanilla === 95) {
    clearInterval();
  } else {
    counterVanilla += 1;
    vanilla.textContent = counterVanilla + `%`;
  }
}, 40);


// Applying the DRY Principle to the Skills section
// REFER TO THE CODE BELLOW 

// Skills Progress Bar

// let theNumber = document.getElementById('number');
// let pmp = document.getElementById('pmp');
// let fiber = document.getElementById('fiber');
// let canva = document.getElementById('canva');
// let msOffice = document.getElementById('msOffice');
// let html = document.getElementById('numberReact');
// let language = document.getElementById('numberLanguage');
// let os = document.getElementById('systemOS');
// let matlab = document.getElementById('numberMatlab');
// let python = document.getElementById('python');
// let laravel = document.getElementById('numberLaravel');
// let phpMySql= document.getElementById('numberExpressJS');
// let js = document.getElementById('numberVanilla');

// let counter = 0;

// function skills (counterInput, timer, element) {
//   setInterval(() => {
//     if(counterInput > counter) {
//       counter ++;
//       element.textContent = `${counter} %` 
//     }else {
//       clearInterval();
//     }
//   }, timer)
// }

// // ANSYS HFSS
// skills(71, 200, theNumber);
// // FIBER
// skills(71, 200, fiber);
// // PMP
// skills(71, 200, pmp);
// // HTML & CSS
// skills(85, 250, html);
// // CANVA
// skills(86, 250, canva);
// // OFFICE
// skills(86, 250, msOffice);
// //Language same with HTML
// skills(86, 250, language);
// // Windows & Linux
// skills(71, 200, os);
// // Matlab
// skills(71, 200, matlab);
// // PYTHON
// skills(71, 200, python);
// // Laravel
// skills(71, 200, laravel);
// // PHP MYSQL
// skills(71, 200, phpMySql);
// // JS
// skills(71, 200, js)

// Location data:

// Date - change date on all pages
let date = '25.02.2023'  

let datesOnPages = document.querySelectorAll('.data_update');

datesOnPages.forEach(el => el.innerHTML = date);

// Proceeds
let puliuiaProceeds = '66%';
let frankaProceeds = '66%';
let arsenProceeds = '52%';
let kytaiskaProceeds = '87%';
let maloholoskivskaProceeds = '75%';
let zaliznychnaProceeds = '57%';


let puliuiaId = '.pulProc';
let frankaId = '.frankaProceeds';
let arsenId = '#myBarArsen';
let kytaiskaId = '#myBarKytaiska';
let maloholoskivskId = '#myBarMaloholoskivska';
let zaliznychnaId = '#myBarZaliznychna';


document.querySelector(frankaId).innerHTML = frankaProceeds;
document.querySelector('.pulProc').innerHTML = '66%';


console.log



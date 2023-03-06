// Location data:

// Date - change date on all pages
let date = 'Дані оновлено 01.03.2023'; 

let datesOnPages = document.querySelectorAll('.data_update');


datesOnPages.forEach(el => el.innerHTML = date);

// Proceeds
let puliuiaProceeds = '0%';
let frankaProceeds = '0%';
let arsenProceeds = '0%';
let kytaiskaProceeds = '0%';
let maloholoskivskaProceeds = '0%';
let zaliznychnaProceeds = '%';


let puliuiaId = '.pulProc';
let frankaId = '.frankaProceeds';
let arsenId = '#myBarArsen';
let kytaiskaId = '#myBarKytaiska';
let maloholoskivskId = '#myBarMaloholoskivska';
let zaliznychnaId = '#myBarZaliznychna';


document.querySelector(frankaId).innerHTML = frankaProceeds;
document.querySelector('.pulProc').innerHTML = '0%';





module.exports = date;
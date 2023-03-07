let date = 'Дані оновлено 05.03.2023'; 

let datesOnPages = document.querySelectorAll('.data_update');

datesOnPages.forEach(el => el.innerHTML = date);

let  proceeds = "17%",
     id = "#myBar",
     label = ".kytProc",
     name1 ="Ліля Білокорович"
     name2 = "Пелещак Ірина"
     ingridientsManager1 = 5,
     ingridientsManager2 = 2,
     totalIngredients = ingridientsManager1 + ingridientsManager2,
     sauceMan1 = 10,
     sauceMan2 = 28,
     totalSauce = sauceMan1 + sauceMan2,
     teaMan1 = 0,
     teaMan2 = 0,
     totalTea = '21.3%';
     


document.querySelector(id).style.width = proceeds;
document.querySelector(label).innerHTML = proceeds;
document.querySelector('.span_adds').innerHTML = totalIngredients;
document.querySelector('.span_sauces').innerHTML = totalSauce;
document.querySelector('.span_tea').innerHTML = totalTea;
document.querySelector('.manager1').innerHTML = name1;
document.querySelector('.manager2').innerHTML = name2;
let date = 'Дані оновлено 23.04.2023'; 

let datesOnPages = document.querySelectorAll('.data_update');

datesOnPages.forEach(el => el.innerHTML = date);

let  proceeds = "54%",
     id = "#myBar",
     label = ".zalProc",
     name1 ="Іра Пелещак"
     name2 = "Божена Пеняк"
     ingridientsManager1 = 0,
     ingridientsManager2 = 44,
     totalIngredients = ingridientsManager1 + ingridientsManager2,
     sauceMan1 = 0,
     sauceMan2 = 0,
     totalSauce = sauceMan1 + sauceMan2,
     teaMan1 = 4,
     teaMan2 = 0;
     totalTea = teaMan1+teaMan2;
     


document.querySelector(id).style.width = proceeds;
document.querySelector(label).innerHTML = proceeds;
document.querySelector('.span_adds').innerHTML = totalIngredients;
document.querySelector('.span_sauces').innerHTML = totalSauce;
document.querySelector('.span_tea').innerHTML = totalTea;
document.querySelector('.manager1').innerHTML = name1;
document.querySelector('.manager2').innerHTML = name2;
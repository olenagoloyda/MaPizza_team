let date = 'Дані оновлено 15.03.2023'; 
let datesOnPages = document.querySelectorAll('.data_update');

datesOnPages.forEach(el => el.innerHTML = date);

let  proceeds = "41%",
     id = "#myBar",
     label = ".malProc",
     name1 ="Настя Буренко"
     name2 = "Таня Філімонова"
     ingridientsManager1 = 3,
     ingridientsManager2 = 0,
     totalIngredients = ingridientsManager1 + ingridientsManager2,
     sauceMan1 = 130,
     sauceMan2 = 0,
     totalSauce = sauceMan1 + sauceMan2,
     teaMan1 = 0,
     teaMan2 = 0,
     totalTea = teaMan1 + teaMan2;
     


document.querySelector(id).style.width = proceeds;
document.querySelector(label).innerHTML = proceeds;
document.querySelector('.span_adds').innerHTML = totalIngredients;
document.querySelector('.span_sauces').innerHTML = totalSauce;
document.querySelector('.span_tea').innerHTML = totalTea;
document.querySelector('.manager1').innerHTML = name1;
document.querySelector('.manager2').innerHTML = name2;
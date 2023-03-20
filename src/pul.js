let date = 'Дані оновлено 19.03.2023';   

let datesOnPages = document.querySelectorAll('.data_update');

datesOnPages.forEach(el => el.innerHTML = date);


let  proceeds = "60%",
     id = "#myBar",
     label = ".pulProc",
     name1 ="Діана Камінечна",
     name2 = "Таня Фірчук",
     ingridientsManager1 = 0,
     ingridientsManager2 = 10,
     totalIngredients = ingridientsManager1 + ingridientsManager2,
     sauceMan1 = 0,
     sauceMan2 = 59,
     totalSauce = sauceMan1 + sauceMan2,
     teaMan1 = 0,
     teaMan2 = 163,
     totalTea = teaMan1 + teaMan2;
     


document.querySelector(id).style.width = proceeds;
document.querySelector(label).innerHTML = proceeds;
document.querySelector('.span_adds').innerHTML = totalIngredients;
document.querySelector('.span_sauces').innerHTML = totalSauce;
document.querySelector('.span_tea').innerHTML = totalTea;
document.querySelector('.manager1').innerHTML = name1;
document.querySelector('.manager2').innerHTML = name2;
let date = 'Дані оновлено 27.03.2023'; 

let datesOnPages = document.querySelectorAll('.data_update');

datesOnPages.forEach(el => el.innerHTML = date);

let  proceeds = "78%",
     id = "#myBar",
     label = ".frankaProceeds",
     name1 ="Настя Мельник"
     name2 = "Катя Панченко"
     ingridientsManager1 = 0,
     ingridientsManager2 = 78,
     totalIngredients = ingridientsManager1 + ingridientsManager2,
     sauceMan1 = 0,
     sauceMan2 = 253,
     totalSauce = sauceMan1 + sauceMan2,
     teaMan1 = 0,
     teaMan2 = 159,
     totalTea = teaMan1 + teaMan2;
     


document.querySelector(id).style.width = proceeds;
document.querySelector(label).innerHTML = proceeds;
document.querySelector('.span_adds').innerHTML = totalIngredients;
document.querySelector('.span_sauces').innerHTML = totalSauce;
document.querySelector('.span_tea').innerHTML = totalTea;
document.querySelector('.manager1').innerHTML = name1;
document.querySelector('.manager2').innerHTML = name2;
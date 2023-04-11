let date = 'Дані оновлено 10.04.2023'; 

let datesOnPages = document.querySelectorAll('.data_update');

datesOnPages.forEach(el => el.innerHTML = date);

let  proceeds = "29%",
     id = "#myBar",
     label = ".arsenProc",
     name1 ="Машa Бойко",
     name2 = "Оля Гриценюк",
     ingridientsManager1 = 0,
     ingridientsManager2 = 1,
     totalIngredients = ingridientsManager1 + ingridientsManager2,
     sauceMan1 = 0,
     sauceMan2 = 17,
     totalSauce = sauceMan1 + sauceMan2,
     teaMan1 = 0,
     teaMan2 = 0,
     totalTea = teaMan1+teaMan2;
     
let manager1Name = document.querySelectorAll('.manager1');
manager1Name.forEach(name => name.innerHTML = name1);

let manager2Name = document.querySelectorAll('.manager2');
manager2Name.forEach(name => name.innerHTML = name2);

// document.querySelector('.span_category11').textContent = ingridientsManager1;
// document.querySelector('.span_category12').textContent = ingridientsManager2;


document.querySelector(id).style.width = proceeds;
document.querySelector(label).innerHTML = proceeds;
document.querySelector('.span_adds').innerHTML = totalIngredients;
document.querySelector('.span_sauces').innerHTML = totalSauce;
document.querySelector('.span_tea').innerHTML = totalTea;

document.querySelector('.manager2').innerHTML = name2;


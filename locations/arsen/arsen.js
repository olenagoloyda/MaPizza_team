let date = '25.02.2023'  

let datesOnPages = document.querySelectorAll('.data_update');

datesOnPages.forEach(el => el.innerHTML = date);

let  proceeds = "52%",
     id = "#myBar",
     label = ".arsenProc",
     name1 ="Машa Бойко"
     name2 = "Оля Гриценюк"
     ingridientsManager1 = 10,
     ingridientsManager2 = 10,
     totalIngredients = ingridientsManager1 + ingridientsManager2,
     sauceMan1 = 5,
     sauceMan2 = 15,
     totalSauce = sauceMan1 + sauceMan2,
     teaMan1 = 2,
     teaMan2 = 7,
     totalTea = teaMan1 + teaMan2;
     


document.querySelector(id).style.width = proceeds;
document.querySelector(label).innerHTML = proceeds;
document.querySelector('.span_adds').innerHTML = totalIngredients;
document.querySelector('.span_sauces').innerHTML = totalSauce;
document.querySelector('.span_tea').innerHTML = totalTea;
document.querySelector('.manager1').innerHTML = name1;
document.querySelector('.manager2').innerHTML = name2;

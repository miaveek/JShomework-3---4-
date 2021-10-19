
//домашняя работа 03 массивы 
var styles = ["джаз","Блюз"];
//добавление нового элемента в конец массива
styles.push("Рок-н-ролл");
document.writeln(styles + "</br>");
//замена элемента в середине массива
styles[Math.floor((styles.length - 1) / 2)] = "Классика"; 
// метод floor() объекта Math вычисляет и возвращает наибольшее целое число
for(var i = 0; i < styles.length;i++){
    document.writeln(styles[i] +",");
}
//удаление и вывод первого элемента массива
document.writeln("</br>" + styles.shift());
//добавление элементов в начало массива
styles.unshift("Рэп", "Регги");
document.writeln("</br>" + styles);
// домашняя работа 04 функции
// Напиши функцию map(fn, array), которая принимает на вход функцию и массив, и обрабатывает каждый элемент массива этой функцией, возвращая новый массив.
var array = [1,34,5,7,9,23,357];
function fn(ar){
    var array2 = [];
 for(var i = 0; i <ar.length;i++){
        array2.push(ar[i]);    
 }
    document.write("</br>"+array2);
}
function map(fn,array){
    document.writeln("</br>"+"домашнее задание  4");
    fn(array);
}
map(fn,array);
//Перепишите функцию, используя оператор '?' или '||'
var age = parseInt(prompt("Введите ваш возраст"));
document.write(age);
function checkAge(age) {
    return age >= 18 || confirm('Родители разрешили?');
  }
checkAge(age);

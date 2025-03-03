let method1 = [1, 2, 3, 4, 5];
method1.forEach(num => console.log(num + 3));


let method2 = [1, 2, 3, 4, 5];
let squared = method2.map(num => num * 2);
console.log(squared);


let method3 = [5, 2, 9, 1, 4];
method3.sort((a, b) => a - b);
console.log(method3);


let method4 = [1, 2, 3, 4, 5, 6];
let evenNumbers = method4.filter(num => num % 3 === 0);
console.log(evenNumbers);


let method5 = [1, 2, 3, 4, 5];
let sum = method5.reduce((acc, num) => acc + num, 0);
console.log(sum);


//Метод массива forEach() позволяет применить console.log / return функцию ко всем элементам массива
//Метод map() позволяет трансформировать один массив в другой при помощи функций console.log / return
//Метод sort() сортирует элементы в массиве, изменяет порядок элементов в  массиве
//Метод массива .filter() позволяет получить новый массив, отфильтровав элементы с помощью переданной console.log / return функции
//Метод массива reduce() позволяет превратить массив в любое другое значение с помощью переданной функции console.log / return и начального значения.

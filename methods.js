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

//Метод массива forEach() Выполняет функцию для каждого элемента массива,Ничего не возвращает.
//Метод map() Создает новый массив, применяя функцию к каждому элементу,Возвращает новый массив.
//Метод sort() Сортирует элементы массива по местам
//Метод массива .filter() Создает новый массив с элементами, прошедшими проверку,Возвращает новый массив.
//Метод массива reduce() Уменьшает массив до одного значения , Возвращает одно значение.

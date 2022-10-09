console.log('Sample JavaScript #1 HW #13');

/*
 * #1
 *
 * Создайте переменные со значениями
 */
var myNum;                             
myNum=10;
console.log('myNum = ',myNum);
var myStr='строка';                  
console.log('myStr = ',myStr);
var myBool=true;                     
console.log('myBool = ',myBool);
var myArr=[1,2,3,4,5];                 
console.log(myArr);
var myObj={                            
    first: 'First Name',
    last: 'Last Name'
}
console.log('myObj = ',myObj);
console.log('myObj.first = ',myObj.first);
console.log('myObj.last = ',myObj.last);
/*
 * #2
 *
 * Отформатируйте целое число, которое хранится в переменной myNum,
 * чтобы получить результат с 2 знаками после запятой.
 * Результат сохраните в переменную decimal2.
 */
var decimal2;
decimal2=myNum.toFixed(2);         
console.log('decimal2 = ',decimal2);
/*
 * #3
 *
 * Создайте переменную i для которой выполните префиксный
 * и постфиксный инкремент и декремент.
 * Поэкспериментируйте с результатами, выводя их в консоль.
 */
console.log('начало инкремента');
var i;
i=0;
var j=0;
console.log('значение i до изменнений : ',i);
console.log('значение j до изменнений : ',j);
j=j+1;
console.log('постфиксный инкремент i++ :',i++);
console.log('j=j+1',j);
i=0;
console.log('префиксный инкремент ++i : ',++i)
/**/
console.log('начало декремента');
j=5;
i=5;
j=j-1;
console.log('значение i до изменнений : ',i);
console.log('значение j до изменнений : ',j);
console.log('постфиксный декремент i-- : ',i--);
console.log('j=j-1',j);
i=5;
console.log('префиксный декремент --i : ',--i)
// i

/*
 * #4
 *
 * Создайте новую переменную myTest и присвойте ей значение 20.
 * Выполните присваивание с операцией, используя операторы: +=, –=, *=, /=, %=.
 * Результаты присваиваются в myTest, затем выводятся в консоль.
 * В вычислениях можно использовать объявленную ранее переменную myNum и/или числа.
 */
var myTest=20;
// +=
myTest+=myNum;
console.log('результат += : ',myTest);
// –=
myTest-=myNum;
console.log('результат -= : ',myTest);
// *=
myTest*=myNum;
console.log('результат *= : ',myTest);
// /=
myTest/=myNum;
console.log('результат /= : ',myTest);
// %=
myTest%=6;
console.log('результат /= : ',myTest);
/*
 * #5
 *
 * Используя свойства и методы объекта Math, присвойте переменным и отобразите в консоли
 */

// константа Pi → myPi
var myPi=Math.PI;
console.log('myPi = ',myPi);
// округленное значение числа 89.279 → myRound
var myRound=Math.round(89.279);
console.log('myRound = ',myRound);
// случайное число между 0..10 → myRandom
var myRandom;
myRandom=Math.round(Math.random()*10);
console.log('myRandom = ',myRandom);
// 3 в 5 степени → myPow
var myPow;
myPow=Math.pow(3,5);
console.log('myPov = ',myPow);
/*
 * #6
 *
 * Создайте объект с именем strObj.
 * Присвойте ключу str строку текста "Мама мыла раму, рама мыла маму", ключу length установите длину этой строки.
 */

// Мама мыла раму, рама мыла маму

// strObj
var strObj={
    str:'Мама мыла раму, рама мыла маму',
};
strObj.age='20 лет';
strObj.length=strObj.str.length;
console.log('весь объект strObj : ',strObj);
console.log('strObj.str : ',strObj.str);
console.log('длина строки объекта strObj : ',strObj.length);
console.log('strObj.age : ',strObj.age);
/*
 * #7
 *
 * Проверьте наличие текста 'рама' в поле str объекта strObj (см.п.6),
 * результат сохраните в переменную isRamaPos и выведите ее в консоль.
 */
// isRamaPos
var isRamaPos;
isRamaPos=strObj.str.indexOf('рама');
if (isRamaPos==-1) {
    console.log('такой подстроки нету!!!');
    }
    else{
        console.log('есть такая подстрока . Начинается с позиции : ',isRamaPos);
    }
/*
 * #8
 *
 * Выполните переименование подстроки в строке.
 * В качестве исходной строки используйте значение поля str объекта strObj (см.п.6), результат сохраните в переменную strReplace и отобразите в консоли.
 * Исходная строка: 'Мама мыла раму, рама мыла маму'
 *       Результат: 'Мама моет раму, Рама держит маму'
 */
// strReplace
var strReplace;
strReplace=strObj.str.replace('мыла','моет'); // первая замена   мыла-->моет   дальше меняем в strReplace!!!
console.log('измененная строка strReplace : ',strReplace);
console.log('исходная строка strObj.str : ',strObj.str);
strReplace=strReplace.replace('рама','Рама'); // вторая замена   рама-->Рама   дальше меняем в strReplace!!!
console.log('измененная строка strReplace : ',strReplace);
console.log('исходная строка strObj.str : ',strObj.str);
strReplace=strReplace.replace('мыла','держит'); // третья замена   мыла-->держит 
console.log('измененная строка strReplace : ',strReplace);
console.log('исходная строка strObj.str : ',strObj.str);
/*
 * #9
 *
 * Преобразуйте любую строку в верхний, затем в нижний регистры, результат отобразите в консоли.
 */
console.log('перевод в верхний регистр : ',strObj.str.toUpperCase());
console.log('перевод в нижний регистр : ','ПРИВЕТ МИР'.toLowerCase());
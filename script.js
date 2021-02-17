/* 
1. Есть массив со всеми символами алфавита (да,придется подрочится). Требуется создать функцию,
 которая принимает в качестве параметра число и возвращает массив со случайными символы из массива с алфавитом.
 Число, которое принимает функция - это количество символов из массива с алфавитом.
2. Сделать так, что если в функцию передать число большее нежели количество букв в выбранном тобой языке,
 то функция возвращала бы объект типа : {errorMessage:'Number must be less'} 
 ( Разобраться что происходит если не реализовать пункт 2).
 */

/* 

1. Написать функцию которая на вход принимает число и возвращает из алфавита ту букву которая находится на позиции 
равной входящему числу. Если переданное число больше количества букв в алфавите,
 то функция должна возвращать объект типа: {errorMessage:"Number must be less or more"'}. 
 Понять почему в тексте сообщения об ошибке есть упоминание о том, что символ должен быть больше.
ОБЯЗАТЕЛЬНОЕ УСЛОВИЕ: использовать тернарный оператор. */






 let alphabet = [
    "А","Б","В", "Г", "Д","Е","Ё", "Ж","З","И","Й","К","Л","М","Н","О","П","Р","С","Т","У","Ф","Х","Ц","Ч","Ш","Щ","Ь","Ы","Ъ","Э","Ю","Я"
  ];




function makeRandom(number){

alphabet[number -1 ]? ( console.log(alphabet[number -1])) : (console.log( {errorMessage:"Number must be less or more"}))}


makeRandom(5)  
















const getRandomSymbols = count => {

    const arrOfrandomSymbol = [];

    for (let i = 0; i < count; i++) {
      let randomNumber = Math.floor(Math.random() * alphabet.length);
      arrOfrandomSymbol.push(alphabet[randomNumber]);
    }

    return arrOfrandomSymbol;
  };

 

console.log( getRandomSymbols(6))













 let uniqueItem = function (array){

     let result = [];

     for(let item of array){
         if(!result.includes(item)){
             result.push(item)
         }

     }
     return result
 }

 
 
 let buddaHit = ['HArry','HArry','HArry','Crishna','Crishna','Crishna','Yo-ho-ho',':)'];

 console.log(uniqueItem(buddaHit))

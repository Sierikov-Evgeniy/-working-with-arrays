

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

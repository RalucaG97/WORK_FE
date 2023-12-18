//1.verificati daca toate elementele unui array sunt numere pare folosind metoda every

var array=[2,5,20,45,21,67,89,43,66,77,23,32,11];
var arrayEven=[2,4,6,8,10,12,14,16];

const isEven = (currentValue) => currentValue%2==0;
function even(array1){
    if(array1.every(isEven)===true)
    {
        console.log("Tot Array-ul este par");
    }else{
        console.log("Nu tot Array-ul este par");
    }
}

even(array);
even(arrayEven);

//2.folosind forEach, afisati toate elementele unui array

array.forEach((elem)=>console.log(elem));

//3.folosind reduce, adunati toate numerele dintr-un array

function sum(array1){
    const initialValue = 0;
    const sumWithInitial = array1.reduce(
      (accumulator, currentValue) => accumulator + currentValue,
      initialValue,
    );
    console.log("Suma elementelor arrayului",sumWithInitial);
}

sum(array);
sum(arrayEven)

